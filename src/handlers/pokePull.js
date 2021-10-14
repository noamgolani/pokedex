import $ from "jquery";
import { pokeClick } from "./pokemon";

$("#poke-cont").on("click", function (event) {
  if (!event.target.classList.contains("poke")) return;
  console.log(event.target.id);
});
