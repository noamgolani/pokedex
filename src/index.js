import "./styles/styles.css";

import axios from "axios";
import $ from "jquery";

$("#searchValue").on("change", (event) => {
  $(".poke-cont").append(event.target.value);
});
