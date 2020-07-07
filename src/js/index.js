import "../scss/main.scss";

/* place your code below */

const projectsWrapper = document.querySelector(".projects__container--js");

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
      const projectContent = document.createElement("div");
      projectContent.setAttribute("class", "project__content");

      ///////// Creating content /////////////

      const content="";

      if(homepage){
        content = `
        <span class="project__label">project:</span><p class="project__name">${name}</p>
        <span class="project__label">description:</span><p class="project__description">${description}</p>
        <span class="project__label">demo:</span><a href="${homepage}" target="blank" class="project__demo">&lt;<u class="project__link">see here</u>&gt;</a>
        <span class="project__label">github:</span><a href="${html_url}" target="blank" class="project__github">&lt;<u class="project__link">source code</u>&gt;</a>
        `;
        
      }else{
        content = `
        <span class="project__label">project:</span><p class="project__name">${name}</p>
        <span class="project__label">description:</span><p class="project__description">${description}</p>
        <span class="project__label">demo:</span><a href="${homepage}" target="blank" class="project__demo">&lt;<u class="project__link">see here</u>&gt;</a>
        <span class="project__label">github:</span><a href="${html_url}" target="blank" class="project__github">&lt;<u class="project__link">source code</u>&gt;</a>
        `;
        

      }
   
      project.appendChild(projectTop);
      project.appendChild(projectContent);
      projectContent.innerHTML += content;

      projectsWrapper.appendChild(project);
    }
  })
  .catch((error) => {
    console.log(error);
  });
