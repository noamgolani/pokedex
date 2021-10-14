import $ from "jquery";

export function openPokeDraw(pokes) {
  $("#pokeDraw").empty();
  $("#pokeDraw").addClass("show");
  $("#pokeDraw").append(
    pokes.map((poke) => `<li class="list-group-item">${poke.pokemon.name}</li>`)
  );
}
