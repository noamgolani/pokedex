import "./styles/styles.css";

import axios from "axios";
import $ from "jquery";

const URI = "https://pokeapi.co/api/v2";

$("#search").on("click", () => {
  axios.get(`${URI}/pokemon/${$("#searchValue").val()}`).then((response) => {
    const { id, name, sprites, weight, height } = response.data;
    $("#poke-cont").append(`
      <div class="poke" id="${id}">
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
  });
});
