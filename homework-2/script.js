const btn = document.getElementById("btn");
const tbody = document.querySelector("tbody");
const url = "https://swapi.py4e.com/api/planets/?page=";
let page = 1;

function renderPlanets(planets) {
  tbody.innerHTML = "";

  for (const planet of planets) {
    const tr = document.createElement("tr");
    const name = document.createElement("td");
    const population = document.createElement("td");
    const climate = document.createElement("td");
    const gravity = document.createElement("td");

    name.textContent = planet.name;
    population.textContent = planet.population;
    climate.textContent = planet.climate;
    gravity.textContent = planet.gravity;

    tr.append(name, population, climate, gravity);
    tbody.appendChild(tr);
  }
}

function getPlanets(page) {
  return fetch(`${url}${page}`)
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => console.log(error));
}

btn.addEventListener("click", async () => {
  if (page === 1) {
    getPlanets(page).then((planets) => {
      renderPlanets(planets);
    });
    btn.textContent = " show next 10 planets";
    page = 2;
  } else {
    getPlanets(page).then((planets) => {
      renderPlanets(planets);
    });
    btn.textContent = "show previous 10 planets";
    page = 1;
  }
});
