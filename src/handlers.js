import $ from "jquery";
import { getPokesIds, getPokesNames, addPoke } from "./pokemon";
import { showError, clearError } from "./error";
import { getPoke } from "./pokeapi";

export function handleTypeClick(event) {
  const typeName = event.target.dataset.name;
  getPoke(typeName)
    .then((pokeData) => {
      clearError();
      addPoke(pokeData);
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
    getPoke(searchValue)
      .then((pokeData) => {
        clearError();
        addPoke(pokeData);
      })
      .catch((err) => {
        showError(`API Error: ${err}`);
      });
}
