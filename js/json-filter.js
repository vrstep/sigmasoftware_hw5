async function loadData() {
  const response = await fetch("../json/services.json");
  const data = await response.json();
  return data;
}

console.log(loadData());

async function main() {
  const data = await loadData();

  const allButton = document.querySelector("#all");
  const interiorDesignButton = document.querySelector("#interior-design");
  const architectureButton = document.querySelector("#architecture");
  const planningButton = document.querySelector("#planning");
  const contentContainer = document.querySelector("#content-container");

  function renderContent(category) {
    contentContainer.innerHTML = "";

    if (category === "All") {
      for (let key in data) {
        const item = data[key][0];
        const containerElement = document.createElement("div");
        containerElement.className = "item-container";
        const titleElement = document.createElement("h2");
        titleElement.textContent = item.title;
        const contentElement = document.createElement("p");
        contentElement.textContent = item.content;
        containerElement.appendChild(titleElement);
        containerElement.appendChild(contentElement);
        contentContainer.appendChild(containerElement);
      }
    } else {
      data[category].forEach((item) => {
        const containerElement = document.createElement("div");
        containerElement.className = "item-container";
        const titleElement = document.createElement("h2");
        titleElement.textContent = item.title;
        const contentElement = document.createElement("p");
        contentElement.textContent = item.content;
        containerElement.appendChild(titleElement);
        containerElement.appendChild(contentElement);
        contentContainer.appendChild(containerElement);
      });
    }
  }

  allButton.classList.add('active');

  allButton.addEventListener("click", () => {
    allButton.classList.add('active');
    interiorDesignButton.classList.remove('active');
    architectureButton.classList.remove('active');
    planningButton.classList.remove('active');
    renderContent('All');
  });
  interiorDesignButton.addEventListener("click", () => {
    allButton.classList.remove('active');
    interiorDesignButton.classList.add('active');
    architectureButton.classList.remove('active');
    planningButton.classList.remove('active');
    renderContent('Interior Design');
  });
  architectureButton.addEventListener("click", () => {
    allButton.classList.remove('active');
    interiorDesignButton.classList.remove('active');
    architectureButton.classList.add('active');
    planningButton.classList.remove('active');
    renderContent('Architecture');
  });
  planningButton.addEventListener("click", () => {
    allButton.classList.remove('active');
    interiorDesignButton.classList.remove('active');
    architectureButton.classList.remove('active');
    planningButton.classList.add('active');
    renderContent('Planning');
  });  

  renderContent("All");
}

main();
