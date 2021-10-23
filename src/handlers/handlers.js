import $ from "jquery";
import { getPokesIds, getPokesNames, addPoke } from "../components/pokemon";
import { getState, setState } from "../libs/localStorage";
import { showError } from "../error";
import { getPoke } from "../libs/pokeapi";
import names from "../libs/names";
import { removeUsernameModal } from "../components/usernameModal";

export function handleTypeClick(event) {
  const typeName = event.target.dataset.name.toLowerCase();
  if (getPokesNames().includes(typeName)) showError("Pokemon already exists");
  else
    getPoke(getState("username"), typeName)
      .then((pokeData) => {
        addPoke(pokeData);
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

export function handleUsername() {
  const username = $("#usernameInput").val().trim();
  console.log(username);
  if (username) {
    setState("username", username);
    removeUsernameModal();
  } else {
    showError("Please type a username");
  }
}
