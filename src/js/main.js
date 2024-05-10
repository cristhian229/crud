import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import { coders } from "./database";
import { create, index, coderToDelete } from "./operations";
import {alertSmallSuccess} from "./alert";

const table = document.querySelector("table")
const tbody = document.querySelector("tbody");
const name = document.querySelector("#name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const form = document.querySelector("form");

index(coders, tbody);

form.addEventListener("submit", (event) => {
  
  create(name,lastName,email,coders)
  alertSmallSuccess("Save")
  
  index(coders,tbody)
  form.reset()
  event.preventDefault()
});

table.addEventListener("click", (event) =>{
  if (event.target.classList.contains("btn-danger")) {
    const toDelete = event.target.getAttribute("data-id")
    console.log(toDelete)
    coderToDelete(toDelete,coders)


    alertSmallSuccess("coder eliminado")
    index(coders,tbody)
  }else{
    alertSmallSuccess("le diste click a la tabla")
  }
  
  
  

  
})