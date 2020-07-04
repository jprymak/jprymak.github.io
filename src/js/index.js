import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

fetch('https://api.github.com/users/jprymak/repos')
.then(resp =>resp.json()) //odpowiedź zamieniamy na JSONa
.then(resp =>{
    for(let repo of resp){
        const{name, description, html_url} = repo;
        const projectsTemplate = document.querySelector(".projects__template--js");


        const projectName = document.querySelector(".project-name");
        const projectsDescription = document.querySelector(".project-description");
        const projectsDemo = document.querySelector(".project-demo");
        const projectsGithub = document.querySelector(".project-github");

        


        const projectCard = document.createElement("div");
        projectCard.className = "project__info--js";

        
        
        
        // `<li>
        // ${name} <a href = "${html_url}" title="link do repozytorium ${name}">link do githuba<a/>
        // </li>
        // `
        projectsTemplate.innerHTML += projectCard;
    }
}) 
.catch(error =>{
    console.log(error)
})