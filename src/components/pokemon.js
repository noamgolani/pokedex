import $ from "jquery";

import { handleTypeClick } from "../handlers/handlers";

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
          <h2 class="card-title">${name}</h2>
          <p class="card-text">
            Weight: ${weight} <br>
            Height: ${height} <br>
            ${createAbilityDropdown(abilities)}
            ${createTypeDropdown(types)}
          </p>
        </div>
      </div>
    `);

  $(`#${id} .type`).on("click", handleTypeClick);
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
  <div class="btn-group" role="group">
  ${[...abilities]
    .map(({ name, list }) => {
      return `
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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
