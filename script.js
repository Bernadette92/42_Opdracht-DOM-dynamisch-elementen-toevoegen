
document.querySelectorAll(".big-five-button").forEach(item => {
    item.addEventListener('click', event => {
    const addAnimal = document.createElement("li");
    const spottedAnimals = document.getElementById("spotted-animals-list");
    const animalType = event.target.textContent;
    spottedAnimals.appendChild(addAnimal);
    addAnimal.appendChild(document.createTextNode(animalType));
    })
  })

  document.getElementById("remove-first-item-button").addEventListener('click', event => {
    const parent = document.getElementById("spotted-animals-list");
    const child = parent.getElementsByTagName("li")[0];
    parent.removeChild(child)
  });

  document.getElementById("remove-all-button").addEventListener('click', event => {
    const parent = document.getElementById("spotted-animals-list");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
  }});