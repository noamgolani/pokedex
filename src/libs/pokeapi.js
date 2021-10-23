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
    throw `${status} -> ${statusText}`;
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
    const { status, statusText } = err.response;
    throw `${status} -> ${statusText}`;
  }
}

export async function catchPoke(username, pokeId, pokeData) {
  try {
    const response = await axios.put(
      `${URI}/pokemon/catch/${pokeId}`,
      pokeData,
      {
        headers: {
          username,
        },
      }
    );
  } catch (err) {
    if (!err.response) throw err;
    const { status, statusText, data } = err.response;
    throw `${status} -> ${statusText}: ${data.error}`;
  }
}

//
//async function getType(searchValue) {
//  try {
//    const response = await axios.get(
//      `https://pokeapi.co/api/v2/type/${searchValue}`
//    );
//    return response.data.pokemon;
//  } catch (err) {
//    if (!err.response) throw err;
//    const { status, statusText } = err.response;
//    throw `${status} -> ${statusText}`;
//  }
//}
//
