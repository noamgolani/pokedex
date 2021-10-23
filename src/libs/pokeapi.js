import axios from "axios";

const URI = "http://localhost:3000";

export async function getPoke(username, searchValue) {
  try {
    const response = await axios.get(
      `${URI}/pokemon/getDetailed/${searchValue}`,
      {
        headers: {
          username,
        },
      }
    );
    const pokeData = response.data;
    return pokeData;
  } catch (err) {
    if (!err.response) throw err;
    const { status, statusText, data } = err.response;
    throw `${status} -> ${statusText}: ${data.error}`;
  }
}

export async function getCatched(username) {
  try {
    const response = await axios.get(`${URI}/pokemon/`, {
      headers: {
        username,
      },
    });
    const pokeList = response.data;
    return pokeList;
  } catch (err) {
    if (!err.response) throw err;
    const { status, statusText, data } = err.response;
    throw `${status} -> ${statusText}: ${data.error}`;
  }
}

export async function catchPoke(username, pokeId, pokeData) {
  try {
    await axios.put(`${URI}/pokemon/catch/${pokeId}`, pokeData, {
      headers: {
        username,
      },
    });
  } catch (err) {
    if (!err.response) throw err;
    const { status, statusText, data } = err.response;
    throw `${status} -> ${statusText}: ${data.error}`;
  }
}

export async function releasePoke(username, pokeId) {
  try {
    await axios.delete(`${URI}/pokemon/release/${pokeId}`, {
      headers: {
        username,
      },
    });
  } catch (err) {
    if (!err.response) throw err;
    const { status, statusText, data } = err.response;
    throw `${status} -> ${statusText}: ${data.error}`;
  }
}
