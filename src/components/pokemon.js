import $ from "jquery";

import { handleTypeClick, handlePokeballClick } from "../handlers/handlers";

export const getPokesIds = () =>
  [...$("#poke-cont").children(".poke")].map((poke) => poke.id);

export const getPokesNames = () =>
  [...$("#poke-cont").children(".poke")].map((poke) => poke.dataset.name);

export function addPoke({
  id,
  name,
  front_pic,
  back_pic,
  weight,
  height,
  types,
  abilities,
}) {
  console.log(abilities);
  $("#poke-cont").prepend(`
      <div class="poke card" id="${id}" data-name="${name}" style="width: 15rem;">
      <img class="card-img-top" src="${front_pic}" id="frontS">
      <img class="card-img-top" src="${back_pic}" id="backS">
        <div class="card-body">
        <div class="card-title d-flex">
        <h2>${name}</h2>
        <div class="pokeball"></div>
        </div>
          <div class="card-text">
          <span>
          Weight: ${weight}
          
          </span>
          <span>
          Height: ${height}
          </span>
          <span> Abilities: </span>
          ${createAbilityDropdown(abilities)}
          <span> Types: </span>
          ${createTypeDropdown(types)}
          </div>
          </div>
          </div>
    `);

  $(`#${id} .pokeball`).on("click", handlePokeballClick);
  $(`#${id} .type`).on("click", handleTypeClick);
}

function createTypeDropdown(types) {
  return `
  <div>
  ${[...types]
    .map(({ name, list }) => {
      return `
    <div class="dropdown">
      <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        ${name}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        ${[...list]
          .map((pokeName) => {
            return `
            <li 
              class="dropdown-item type"
              data-name="${pokeName}">
                ${pokeName}
              </li>
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

function createAbilityDropdown(abilities) {
  return `
  <div>
  ${[...abilities]
    .map(({ name, list }) => {
      return `
    <div class="dropdown">
      <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        ${name}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        ${[...list]
          .map((pokeName) => {
            return `
            <li 
              class="dropdown-item type"
              data-name="${pokeName}">
                ${pokeName}
              </li>
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
