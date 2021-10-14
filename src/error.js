import $ from "jquery";

export function showError(msg) {
  const id = Date.now();

  $(".toast-container").append(`
  <div class="toast bg-danger show" id="${id}">
    <div class="d-flex">
      <div class="toast-body">
        ${msg}
      </div>
      <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>
  `);
  setTimeout(() => {
    $(`#${id}`).remove();
  }, 5000);
}
