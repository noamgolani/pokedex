import $ from "jquery";
import { getPokesIds, getPokesNames, addPoke } from "./pokemon";
import { showError } from "./error";
import { getPoke } from "./pokeapi";
import names from "./names";

export function handleTypeClick(event) {
  const typeName = event.target.dataset.name;
  if (getPokesNames().includes(typeName)) showError("Pokemon already exists");
  else
    getPoke(typeName)
      .then((pokeData) => {
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
        addPoke(pokeData);
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
  suggestions.slice(0, 10).forEach((sug) => {
    autoC.append(`
      <li class="list-group-item">${sug}</li>
    `);
  });
}
