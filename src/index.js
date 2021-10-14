import "./styles/styles.css";

import "./handlers/pokePull";

import axios from "axios";
import $ from "jquery";
import Pokemon, { pokemonHtml } from "./pokemon";

const URI = "https://pokeapi.co/api/v2";

const pokes = [];

$("#search").on("click", () => {
  axios.get(`${URI}/pokemon/${$("#searchValue").val()}`).then((response) => {
    const newPoke = new Pokemon(response.data);
    pokes.push(newPoke);
    renderPokes();
  });
});

function renderPokes() {
  for (const poke of pokes) {
    $("#poke-cont").append(pokemonHtml(poke.getData()));
  }
}
