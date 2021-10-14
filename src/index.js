import "./styles/styles.css";

import axios from "axios";
import $ from "jquery";

const URI = "https://pokeapi.co/api/v2";

$("#search").on("click", () => {
  const searchValue = $("#searchValue").val().toLowerCase();
  axios
    .get(`${URI}/pokemon/${searchValue}`)
    .then((response) => {
      if (
        getPokesNames().includes(searchValue) ||
        getPokesIds().includes(searchValue)
      )
        showError("Already have this pokemon");
      else {
        clearError();
        addPoke(response.data);
      }
    })
    .catch((err) => {
      const { status, statusText } = err.response;
      showError(`Request failed -> ${status}: ${statusText}`);
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
  const { id, name, sprites, weight, height } = pokeData;
  $("#poke-cont").append(`
      <div class="poke" id="${id}" data-name="${name}">
        <div class="info">
          <h2>${name}</h2>
          <p>
            Width: ${weight} <br>
            Height: ${height}
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
