import $ from "jquery";

import { handleTypeClick } from "./handlers";

export const getPokesIds = () =>
  [...$("#poke-cont").children(".poke")].map((poke) => poke.id);

export const getPokesNames = () =>
  [...$("#poke-cont").children(".poke")].map((poke) => poke.dataset.name);

export function addPoke(pokeData) {
  const { id, name, sprites, weight, height, types } = pokeData;
  $("#poke-cont").append(`
      <div class="poke" id="${id}" data-name="${name}">
        <div class="info">
          <h2>${name}</h2>
          <p>
            Width: ${weight} <br>
            Height: ${height} <br>
            Types:
            <ul>
              ${[...types].map(({ type }) => {
                return `<li class="type" data-name="${type.name}">${type.name}</li>`;
              })}
            </ul>
          </p>
        </div>
        <img src="${sprites.front_default}" id="frontS">
        <img src="${sprites.back_default}" id="backS">
      </div>
    `);

  $("li.type").on("click", handleTypeClick);
}
