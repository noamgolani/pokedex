const KEY = "pokedex";

export function init() {
  const obj = window.localStorage.getItem(KEY);
  if (!obj) window.localStorage.setItem(KEY, "{}");
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
