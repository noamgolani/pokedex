export default class Pokemon {
  constructor(data) {
    this.data = data;
    this.catched = false;
    this.id = this.data.id;
  }

  getData() {
    return this.data;
  }
}

export function pokemonHtml({ id }) {
  return `
    <div class="poke" id="${id}">
      Poke
    </div>
  `;
}
