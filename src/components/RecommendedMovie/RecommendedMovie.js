import { useState } from 'react'
import * as roomsServices from '../../utilities/rooms-services'

export default function RecommendedMovie({ movie, room, setRoom, winner }) {
  const [wiggle, setWiggle] = useState(false)
  const [flop, setFlop] = useState(false)

  async function handleVote(event) {
    const vote = event.target.name
    const body = {
      imdbid: movie.imdbid,
      vote: vote,
    }
    const updatedRoom = await roomsServices.addNewVote(room.roomCode, body)
    setRoom(updatedRoom)

    if (event.target.name === 'yes') {
      setWiggle(!wiggle)
    } else if (event.target.name === 'no') {
      setFlop(!flop)
    }
  }

  console.log(winner)

  return (
    <div className="MovieCard">
        <h5>
          <i>"{movie.title}"</i>
        </h5>
      <li style={{marginBottom: "2vmin"}}>
        <img src={`${movie.image}`} className="MoviePoster" />
      </li>
      <div>
        <div className="VotingFooter">
          <h4 style={{marginTop: "1vmin", marginBottom: "0vmin"}}>
            <u>Number of Votes</u>:
          </h4>
          <div className="VotingScore">
            <h5
              style={{
                color: winner.imdbid === movie.imdbid ? 'gold' : 'green',
              }}
            >
              <span
                className={wiggle ? 'WiggleNumber' : ''}
              >{`+ ${movie.usersVotingYes.length}`}</span>{' '}
              Upvotes
            </h5>
            <h5
              style={{
                color: 'darkred',
              }}
            >
              <span
                className={flop ? 'FlopNumber' : ''}
              >{`- ${movie.usersVotingNo.length}`}</span>{' '}
              Downvotes
            </h5>
          </div>
          <div className="VotingButtons">
            <button
              name="yes"
              onClick={handleVote}
              style={{ 
                marginRight: '1.5vmin'}}
            >
              Upvote
            </button>
            <button name="no" onClick={handleVote}>
              Downvote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
