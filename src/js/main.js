import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import { coders } from "./database";
import { create, index } from "./operations";
import {alertSmallSuccess} from "./alert";


const tbody = document.querySelector("tbody");

index(coders, tbody);

const name = document.querySelector("#name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  
  create(name,lastName,email,coders)
  alertSmallSuccess("Save")
  
  index(coders,tbody)
  form.reset()
  event.preventDefault()
});
