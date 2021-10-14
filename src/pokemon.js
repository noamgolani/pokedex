import $ from "jquery";

import { handleTypeClick } from "./handlers";

export const getPokesIds = () =>
  [...$("#poke-cont").children(".poke")].map((poke) => poke.id);

export const getPokesNames = () =>
  [...$("#poke-cont").children(".poke")].map((poke) => poke.dataset.name);

export function addPoke(pokeData) {
  const { id, name, sprites, weight, height, types } = pokeData;

  const typesHtml = [...types].map(({ type }) => {
    return `
              <button type="button" class="btn type btn-outline-primary" data-name="${type.name}">
                ${type.name}
              </button>`;
  });

  $("#poke-cont").append(`
      <div class="poke card" id="${id}" data-name="${name}" style="width: 15rem;">
      <img class="card-img-top" src="${sprites.front_default}" id="frontS">
      <img class="card-img-top" src="${sprites.back_default}" id="backS">
        <div class="card-body">
          <h2 class="card-title">${name}</h2>
          <p class="card-text">
            Width: ${weight} <br>
            Height: ${height} <br>
            Types:
            <div class="btn-group" role="group" aria-label="Basic outlined example">
            ${[...types]
              .map(({ type }) => {
                return `
              <button type="button" class="btn type btn-outline-primary" data-name="${type.name}">
                ${type.name}
              </button>`;
              })
              .join("")}
          </div>


          </p>
        </div>
      </div>
    `);

  $("li.type").on("click", handleTypeClick);
}
