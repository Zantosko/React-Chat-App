import { 
  USER_ENTERS_ROOM,
  USER_LEAVES_ROOM
} from '../action-types/usersInRoom-action-type';

export const setUsersInRoom = async (dispatch) => {

  try {
    const response = await fetch("http://localhost:4001/", {
      method: "GET",
      headers: { token: localStorage.token }
    });

    const parseResponse = await response.json();

    const user = parseResponse.username

    return dispatch({ type: USER_ENTERS_ROOM, payload: user })

  } catch (err) {
    console.error(err.message)
  }
}

export const removeUserFromRoom = async (dispatch) => {
  try {
    const response = await fetch("http://localhost:4001/", {
      method: "GET",
      headers: { token: localStorage.token }
    });

    const parseResponse = await response.json();

    const user = parseResponse.username

    return dispatch({ type: USER_LEAVES_ROOM, payload: user })

  } catch (err) {
    console.error(err.message)
  }
}

