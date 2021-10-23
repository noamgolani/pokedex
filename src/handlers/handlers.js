import $ from "jquery";
import { getPokesIds, getPokesNames, addPoke } from "../components/pokemon";
import { getState, setState } from "../libs/localStorage";
import { showError } from "../error";
import { catchPoke, getPoke, releasePoke, getCatched } from "../libs/pokeapi";
import names from "../libs/names";
import { removeUsernameModal, getUserName } from "../components/usernameModal";

export function handleTypeClick(event) {
  const typeName = event.target.dataset.name.toLowerCase();
  if (getPokesNames().includes(typeName)) showError("Pokemon already exists");
  else
    getPoke(getState("username"), typeName)
      .then((pokeData) => {
        addPoke(pokeData);
        const pokemons = getState("pokemons");
        pokemons[pokeData.id] = pokeData;
        setState("pokemons", pokemons);
        clearCurrent();
      })
      .catch((err) => {
        showError(`API Error: ${err}`);
      });
}

export function handleSearchClick(event) {
  const searchValue = $("#searchValue").val().toLowerCase();
  if (
    getPokesNames().includes(searchValue) ||
    getPokesIds().includes(searchValue)
  )
    showError("Pokemon already exists");
  else
    getPoke(getState("username"), searchValue)
      .then((pokeData) => {
        addPoke(pokeData);
        const pokemons = getState("pokemons");
        pokemons[pokeData.id] = pokeData;
        setState("pokemons", pokemons);
        clearCurrent();
      })
      .catch((err) => {
        showError(`API Error: ${err}`);
      });
}

export function handleSearchChange() {
  const searchInput = $("#searchValue");
  const suggestions =
    searchInput.val().trim() === ""
      ? []
      : names.filter((names) =>
          names.toLowerCase().includes(searchInput.val().trim().toLowerCase())
        );

  const autoC = $(".autocomplete");
  autoC.empty();
  suggestions.forEach((sug) => {
    autoC.append(`
      <li class="list-group-item btn" data-name="${sug}">${sug}</li>
    `);
  });
  $("li.list-group-item").on("click", handleTypeClick);
}

function clearCurrent() {
  $("#searchValue").val("");
  $(".autocomplete").empty();
}

export function handleUsername(username) {
  if (!username) return showError("Please type a username");

  $(".username > button").empty().append(username);
  setState("username", username);
  removeUsernameModal();

  $(".poke").remove();
  getCatched(username).then((catchedList) => {
    setState("catched", catchedList);
    catchedList.forEach((pokeId) => {
      getPoke(username, pokeId).then((pokeData) => {
        addPoke(pokeData, true);
        const pokemons = getState("pokemons");
        pokemons[pokeId] = pokeData;
        setState("pokemons", pokemons);
      });
    });
  });
}

export async function handlePokeballClick(event) {
  const pokeId = event.target.closest(".poke").id;
  const catchedList = getState("catched");
  try {
    if (catchedList.includes(pokeId)) {
      await releasePoke(getState("username"), pokeId);
      const newCatchedList = catchedList.filter((id) => id !== pokeId);
      setState("catched", newCatchedList);
      $(`.poke#${pokeId}`).removeClass("catched");
    } else {
      await catchPoke(getState("username"), pokeId, {
        pokemon: getState("pokemons")[pokeId],
      });
      catchedList.push(pokeId);
      setState("catched", catchedList);
      $(`.poke#${pokeId}`).addClass("catched");
    }
  } catch (err) {
    showError(err);
  }
}
