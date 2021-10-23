import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import $ from "jquery";
import { handleSearchClick, handleSearchChange } from "./handlers/handlers";
import { getUserName } from "./components/usernameModal";
import { getState, init, setState } from "./libs/localStorage";
import { getCatched, getPoke } from "./libs/pokeapi";
import { addPoke } from "./components/pokemon";
init();

$("#search").on("click", handleSearchClick);
$("#searchValue").on("keypress", (e) => {
  if (e.key === "Enter") handleSearchClick();
});
$("#searchValue").on("input", handleSearchChange);

const username = getState("username") ? getState("username") : getUserName();
getCatched(username).then((catchedList) => {
  setState("catched", catchedList);
  catchedList.forEach((pokeId) => {
    getPoke(username, pokeId).then((pokeData) => {
      addPoke(pokeData, true);
      const pokemons = getState("pokemons");
      pokemons[pokeId] = pokeData;
      setState("pokemons", pokemons);
    });
  });
});
