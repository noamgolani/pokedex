import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import $ from "jquery";
import { handleSearchClick } from "./handlers";
import names from "./names";

$("#search").on("click", handleSearchClick);
$("#searchValue").on("keypress", (e) => {
  if (e.key === "Enter") handleSearchClick();
});

console.log(names);
