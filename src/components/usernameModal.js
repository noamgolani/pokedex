import $ from "jquery";

import { handleUsername } from "../handlers/handlers";

export function getUserName() {
  $(".container-md").css("opacity", "0");

  $("body").append(`
  <div class="modal-dialog modal-dialog-centered" tabindex="-1">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Type your User name</h5>
      </div>
      <div class="modal-body">
        <div class="input-group ">
          <input type="text" id="usernameInput" class="form-control" placeholder="Username">
          <button class="btn btn-outline-secondary" type="button" id="sendUsername"> Send </button>
        </div>
      </div>
    </div>
  </div>
  `);

  $("#sendUsername").on("click", handleUsername);
  $("#usernameInput").on("keypress", (e) => {
    if (e.key === "Enter") {
      handleUsername();
    }
  });
}

export function removeUsernameModal() {
  $(".container-md").css("opacity", "1");
  $(".modal-dialog").remove();
}
