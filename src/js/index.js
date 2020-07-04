import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const projectsWrapper = document.querySelector(".projects__wrapper--js");

fetch("https://api.github.com/users/jprymak/repos")
  .then((resp) => resp.json()) //odpowiedź zamieniamy na JSONa
  .then((resp) => {
    for (let repo of resp) {
      const { name, description, html_url, homepage } = repo;

      ///////// Creating project card /////////////
      const project = document.createElement("div");
      project.setAttribute("class", "project");

      ///////// Creating card top bar /////////////
      const projectTop = document.createElement("div");
      projectTop.setAttribute("class", "project__top");

      ///////// Creating card content /////////////
      const projectInfo = document.createElement("div");
      projectInfo.setAttribute("class", "project__info");

      ///////// Creating content /////////////
      const content = `
<span class="grid-item-1">project:</span><p class="project-name">${name}</p>
<span class="grid-item-2">description:</span><p class="project-description">${description}</p>
<span class="grid-item-3">demo:</span><a href="${homepage}" class="project-demo">&lt;<u class="link">see here</u>&gt;</a>
<span class="grid-item-4">github:</span><a href="${html_url}" class="project-github">&lt;<u class="link">source code</u>&gt;</a>

`;

      project.appendChild(projectTop);
      project.appendChild(projectInfo);
      projectInfo.innerHTML += content;

      projectsWrapper.appendChild(project);
    }
  })
  .catch((error) => {
    console.log(error);
  });
