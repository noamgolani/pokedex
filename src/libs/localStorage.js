const KEY = "pokedex";

export function getState(key) {
  const obj = window.localStorage.getItem(KEY);
  return obj[key];
}

export function setState(key, value) {
  const obj = window.localStorage.getItem(KEY);
  obj[key] = value;
  window.localStorage.setItem(KEY, obj);
}
