function saveName() {
  const name = document.getElementById("nameInput").value;
  localStorage.setItem("nome", name);
  document.getElementById("previousValue").textContent =
    "Nome precedentemente salvato: " + name;
  alert("Nome salvato con successo!");
}

function removeName() {
  localStorage.removeItem("nome");
  document.getElementById("previousValue").textContent = "";
  alert("Nome rimosso con successo!");
  document.getElementById("nameInput").value = "";
}

let count = 0;

if (sessionStorage.getItem("counter")) {
  count = sessionStorage.getItem("counter");
}

function updateCounter() {
  count++;
  document.getElementById("counter").textContent = count;
  sessionStorage.setItem("counter", count);
}

const interval = setInterval(updateCounter, 1000);
