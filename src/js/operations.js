

export function index(array,tbody) {
  tbody.innerHTML = ""
  array.forEach((coder) => {
    tbody.innerHTML += ` 
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase">${coder.email}</td>
        </tr>`
  });
}

 export function create(name,lastName,email,coders){
  const newCoder = {
    id: Date.now(),
    name: name.value,
    lastName: lastName.value,
    email: email.value
  }
  coders.push(newCoder)
}
