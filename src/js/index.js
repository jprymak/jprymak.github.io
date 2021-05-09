import "../scss/main.scss";

/* place your code below */

console.log('Hello! I\'m Jakub. I\'m really glad you are here')

const projectsContainer = document.querySelector(".projects__container--js");

fetch("https://api.github.com/users/jprymak/repos")
  .then((resp) => resp.json()) 
  .then((resp) => {
    for (let repo of resp) {
      const { name, description, html_url, homepage } = repo;

      const content = `
        <div class="project">
        <div class="project__top"></div>
        <div class="project__content">
        <span class="project__label">project:</span><p class="project__name">${name}</p>
        <span class="project__label">description:</span><p class="project__description">${description}</p>
        <span class="project__label">demo:</span><a href="${homepage}" target="blank" rel="noopener noreferrer" class="project__demo">&lt;<u class="project__link">see here</u>&gt;</a>
        <span class="project__label">github:</span><a href="${html_url}" target="blank" rel="noopener noreferrer" class="project__github">&lt;<u class="project__link">source code</u>&gt;</a>
        </div>
        </div>
        `;

      if (description && homepage) {
        projectsContainer.innerHTML += content;
      }
    }
  })
  .catch((error) => {
    console.log(error);
  });
