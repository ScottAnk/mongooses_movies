// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request'
const BASE_URL_PREFIX =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_DEPLOYMENT_BACKEND
    : process.env.REACT_APP_DEVELOPMENT_BACKEND
const BASE_URL = BASE_URL_PREFIX + '/api/users'

// sign up main user
export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData)
}

// log in main user
export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

// check that user is logged in with token
export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`)
}

// create temporary user
export function tempUser() {
  return sendRequest(`${BASE_URL}/guest`, 'POST')
}
