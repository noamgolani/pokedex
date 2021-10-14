import axios from "axios";

const URI = "https://pokeapi.co/api/v2";

export async function getPoke(searchValue) {
  try {
    const response = await axios.get(`${URI}/pokemon/${searchValue}`);
    const pokeData = response.data;
    const typesData = await Promise.all(
      pokeData.types.map(async ({ type }) => {
        return {
          name: type.name,
          list: await getType(type.name),
        };
      })
    );
    pokeData.types = typesData;
    return pokeData;
  } catch (err) {
    if (!err.response) throw err;
    const { status, statusText } = err.response;
    throw `${status} -> ${statusText}`;
  }
}

async function getType(searchValue) {
  try {
    const response = await axios.get(`${URI}/type/${searchValue}`);
    return response.data.pokemon;
  } catch (err) {
    if (!err.response) throw err;
    const { status, statusText } = err.response;
    throw `${status} -> ${statusText}`;
  }
}
