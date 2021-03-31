import Tooltip from "./project/tooltip";
import Dropdown from "./project/dropdown";
import Tabs from "./project/tabs";
import Snackbar from "./project/snackbar";

const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

const snackbar = new Snackbar();
snackbar.init();
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  snackbar.show("you clicked me!");
});
