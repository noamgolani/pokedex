const KEY = "pokedex";

export function init() {
  window.localStorage.setItem(KEY, "{}");
}

export function getState(key) {
  const obj = JSON.parse(window.localStorage.getItem(KEY));
  return obj[key];
}

export function setState(key, value) {
  const obj = JSON.parse(window.localStorage.getItem(KEY));
  obj[key] = value;
  window.localStorage.setItem(KEY, JSON.stringify(obj));
}
