import axios from "axios";

const URI = "https://pokeapi.co/api/v2";

export async function getPoke(searchValue) {
  try {
    const response = await axios.get(`${URI}/pokemon/${searchValue}`);
    return response.data;
  } catch (err) {
    if (!err.response) throw err;
    const { status, statusText } = err.response;
    throw `${status} -> ${statusText}`;
  }
}

export async function getType(searchValue) {
  try {
    const response = await axios.get(`${URI}/type/${searchValue}`);
    return response.data.pokemon;
  } catch (err) {
    if (!err.response) throw err;
    const { status, statusText } = err.response;
    throw `${status} -> ${statusText}`;
  }
}
