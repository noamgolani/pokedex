import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import $ from "jquery";
import { handleSearchClick, handleSearchChange } from "./handlers/handlers";
import { getUserName } from "./components/usernameModal";
import { init } from "./libs/localStorage";
init();

$("#search").on("click", handleSearchClick);
$("#searchValue").on("keypress", (e) => {
  if (e.key === "Enter") handleSearchClick();
});
$("#searchValue").on("input", handleSearchChange);

const username = getUserName();
