const button_alert = () => {
  const buttons = [...document.querySelectorAll("#buttons button")];
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("ECMAScript");
    });
  });
};
document.addEventListener("DOMContentLoaded", button_alert);
