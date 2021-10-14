import $ from "jquery";

import { handleTypeClick } from "./handlers";

export const getPokesIds = () =>
  [...$("#poke-cont").children(".poke")].map((poke) => poke.id);

export const getPokesNames = () =>
  [...$("#poke-cont").children(".poke")].map((poke) => poke.dataset.name);

export function addPoke(pokeData) {
  const { id, name, sprites, weight, height, types } = pokeData;

  $("#poke-cont").append(`
      <div class="poke card" id="${id}" data-name="${name}" style="width: 15rem;">
      <img class="card-img-top" src="${sprites.front_default}" id="frontS">
      <img class="card-img-top" src="${sprites.back_default}" id="backS">
        <div class="card-body">
          <h2 class="card-title">${name}</h2>
          <p class="card-text">
            Width: ${weight} <br>
            Height: ${height} <br>
            ${createTypeDropdown(types)}
          </p>
        </div>
      </div>
    `);

  $(".type").on("click", handleTypeClick);
}

function createTypeDropdown(types) {
  return `
  <div class="btn-group" role="group">
  ${[...types]
    .map(({ name, list }) => {
      return `
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        ${name}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        ${[...list]
          .map(({ pokemon }) => {
            return `
            <li class="dropdown-item type" data-name="${pokemon.name}">${pokemon.name}</li>
            `;
          })
          .join("")}
      </ul>
    </div>
    `;
    })
    .join("")}
  </div>`;
}
