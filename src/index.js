import "./styles/styles.css";

import $ from "jquery";
import { getPoke } from "./pokeapi";

$("#search").on("click", () => {
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
});

$("#poke-cont").on("click", (event) => {
  const poke = event.target.closest(".poke");
  if (!poke) return;

  alert(poke.id);
});

const getPokesIds = () =>
  [...$("#poke-cont").children(".poke")].map((poke) => poke.id);

const getPokesNames = () =>
  [...$("#poke-cont").children(".poke")].map((poke) => poke.dataset.name);

function addPoke(pokeData) {
  const { id, name, sprites, weight, height, types } = pokeData;
  $("#poke-cont").append(`
      <div class="poke" id="${id}" data-name="${name}" data-type="${types}">
        <div class="info">
          <h2>${name}</h2>
          <p>
            Width: ${weight} <br>
            Height: ${height} <br>
            Types:
            <ul>
              ${[...types].map(({ type }) => {
                return `<li>${type.name}</li>`;
              })}
            </ul>
          </p>
        </div>
        <img src="${sprites.front_default}" id="frontS">
        <img src="${sprites.back_default}" id="backS">
      </div>
    `);
}

function showError(msg) {
  clearError();
  $("#error").append(msg);
}

function clearError() {
  $("#error").empty();
}
