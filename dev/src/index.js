 import React from "jsx-dom";
import expertise from './expertise'
import {Expertise, Project, SeeMoreExpertiseButton} from "./components.jsx";
import {showAlert} from "./utils";
import projects from "./projects";

for (const section of expertise) {
    let container = document.querySelector(section.selector);
    section.items.filter((value) => value.hasOwnProperty("primary")).sort((a, b) => b.value - a.value).forEach(item => {
        container.appendChild(<Expertise data={item}/>);
    })
    if (section.items.length > 5) {
        container.appendChild(<SeeMoreExpertiseButton id={section.selector + "-more"} items={section.items}/>)
    }
}

const projectsContainer = document.querySelector("#portfolio-project")

for (const project of projects) {
    projectsContainer.appendChild(<Project data={project}/>)
}

document.querySelector("#contactForm").addEventListener("submit", function (evt) {
    evt.preventDefault();
    const name = document.getElementById('name');
    const surname = document.getElementById('firstname');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const error = document.getElementById("formError")

    fetch('https://codingmailer.onrender.com/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            to: "wilfriedtech.dev@gmail.com",
            subject: name.value + " - Contact On Portfolio",
            message: `\nNom: ${name.value.trim()}\nPrenom: ${surname.value.trim()}\nEmail: ${email.value.trim()}\n\n\n${message.value.trim()}
            `
        })
    }).then(function (response) {
        if (response.ok) {
            alert('E-mail envoyé avec succès.')
            // Réinitialiser les champs du formulaire
            name.value = ''
            surname.value = ''
            email.value = ''
            message.value = ''
            showAlert("success", error, "Envoyée avec success")
        } else {
            response.json().then(function (data) {
                showAlert("warning", error,
                    data && data.message ? data.message : 'Erreur lors de l\'envoi de l\'e-mail.');
            });
        }
    }).catch(function (_error) {
        console.log('Erreur lors de la requête :', _error)
        showAlert("error", error, 'Erreur de connexion');
    });
})

