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
let idToUpdate 

index(coders, tbody);

form.addEventListener("submit", (event) => {
  if (idToUpdate ===undefined) {
    create(name,lastName,email,coders)
    alertSmallSuccess("Save")
  }else{
    coders.forEach(coder => {
      if(coder.id == idToUpdate){
        coder.name = name.value
        coder.lastName = lastName.value
        coder.email = email.value
      }})
      alertSmallSuccess("updated")
      idToUpdate = undefined
    }

  
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

  if (event.target.classList.contains("btn-warning")){
    idToUpdate = event.target.getAttribute("data-id")
    const userFound  = coders.find(coder => coder.id == idToUpdate)
    alertSmallSuccess("le diste click a edit")

    name.value = userFound.name
    lastName.value = userFound.lastName
    email.value = userFound.email
  }

  
})