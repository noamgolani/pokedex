import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import $ from "jquery";
import { handleSearchClick, handleSearchChange } from "./handlers";

$("#search").on("click", handleSearchClick);
$("#searchValue").on("keypress", (e) => {
  if (e.key === "Enter") handleSearchClick();
});
$("#searchValue").on("input", handleSearchChange);
