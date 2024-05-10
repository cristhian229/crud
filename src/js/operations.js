export function index(array, tbody) {
  tbody.innerHTML = "";
  array.forEach((coder) => {
    tbody.innerHTML += ` 
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase">${coder.email}</td>
            <td class="text-center align-middle">
              <button type="button" data-id=${coder.id} class="btn btn-primary me-2">Details</button>
              <button type="button" data-id=${coder.id} class="btn btn-warning mx-2">Edit</button>
              <button type="button" data-id=${coder.id} class="btn btn-danger ms-2">Delete</button>
            </td>
        </tr>`;
  });
}

export function create(name, lastName, email, coders) {
  const newCoder = {
    id: Date.now(),
    name: name.value,
    lastName: lastName.value,
    email: email.value,
  };
  coders.push(newCoder);
}

export function coderToDelete(idToDelete, coders){
  coders.forEach((coder, index) => {
    if (coder.id == idToDelete) {
      coders.splice(index, 1)
    }
  })
}
