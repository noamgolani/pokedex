import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import $ from "jquery";
import {
  handleSearchClick,
  handleSearchChange,
  changeUsername,
  handleUsername,
} from "./handlers/handlers";
import { getState, init } from "./libs/localStorage";
import { getUserName } from "./components/usernameModal";
init();

$("#search").on("click", handleSearchClick);
$("#searchValue").on("keypress", (e) => {
  if (e.key === "Enter") handleSearchClick();
});
$("#searchValue").on("input", handleSearchChange);

if (!getState("username")) getUserName();
else handleUsername(getState("username"));

$("#changeUsername").on("click", () => {
  getUserName();
});
