//TODO make it a toast
import $ from "jquery";
export function showError(msg) {
  clearError();
  $("#error").append(msg);
}

export function clearError() {
  $("#error").empty();
}
