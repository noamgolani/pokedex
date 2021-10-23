# Solution fo the "pokedex" task

### This is [a link](https://cyber4spokedex.herokuapp.com/) to the app hosted on heroku.

**Pokedex** is a webapp, for looking up Pokemon's and viewing their info. Using the [poke-api](https://pokeapi.co/).

### Main features:

- Search bar - type a name or an id for a pokemon. When clicking "Search" it will make a request for the _poke-api_
- Pokeon toast - each pokemon is displayed with a toast. Including its: weight, height, picture ant types.
- "The reveal" - when hovering over a toast the pokemon will reveal itself to the user.
- Types - clicking on a pokemon's type will open a dropdown displaying all the pokemons with the same type. Clicking on a pokemon will add it to the page
- Error alerts - if an error hapens the page will display an error at the right buttom of the screen. It will disapear after 5 seconds.
- **Autocomplete** - when you start typing, you will be suggested with clickble pokemons containing your current search value. (The suggestions data was stripped from [this site](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number) using RegEx.

### Built as part of the Cyber4s course.
