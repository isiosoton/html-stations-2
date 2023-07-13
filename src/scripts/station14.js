const button_alert = () => {
  const buttons = [...document.querySelectorAll("#buttons button")];
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("アラートを表示");
    });
  });
};
document.addEventListener("DOMContentLoaded", button_alert);
