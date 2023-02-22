// api requests for rooms
import sendRequest from './send-request'

const BASE_URL = 'https://movie-royale-backup-server.onrender.com/api/rooms'

export function getRoom() {
  return sendRequest(BASE_URL, 'POST')
}

export function getRoomById(roomCode) {
  return sendRequest(BASE_URL + `/${roomCode}`)
}

export async function selectMovie(roomCode, movie) {
  return sendRequest(BASE_URL + `/${roomCode}` + '/recommend', 'POST', movie)
}

export async function vote(roomCode, body) {
  return sendRequest(BASE_URL + `/${roomCode}` + '/vote', 'POST', body)
}
