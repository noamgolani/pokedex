import $ from "jquery";

export function openPokeDraw(pokes) {
  $("#pokeDraw").empty();
  $("#pokeDraw").append(pokes.map((poke) => `<li>${poke.pokemon.name}</li>`));
}
