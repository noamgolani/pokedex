import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import $ from "jquery";
import { handleSearchClick } from "./handlers";

$("#search").on("click", handleSearchClick);
