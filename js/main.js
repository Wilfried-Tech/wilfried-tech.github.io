"use strict";

const expertise = [
    {
        selector: "#development",
        items: [
            {
                name: "html5",
                bsIconClass: "fab fa-html5",
                value: 95,
            }, {
                name: "css3",
                bsIconClass: "fab fa-css3",
                value: 90,
                primary: true
            },
            {
              name: "bootstrap",
              bsIconClass: "fab fa-bootstrap",
              value: 45
            },
            {
                name: "js",
                bsIconClass: "fab fa-js",
                value: 80,
                primary: true
            }, {
                name: "php",
                bsIconClass: "fab fa-php",
                value: 75,
                primary: true
            }, {
                name: "python",
                bsIconClass: "fab fa-python",
                value: 80,
                primary: true
            }, {
                name: "java",
                bsIconClass: "fab fa-java",
                value: 75,
                primary: true
            }, {
                name: "C",
                bsIconClass: "",
                value: 40,
            }, {
                name: "c++",
                bsIconClass: "",
                value: 35,
            }, {
                name: "sass",
                bsIconClass: "fab fa-sass",
                value: 40
            }
        ],
    }, {
        selector: "#design",
        items: [{
            name: "photoshop",
            bsIconClass: "",
            value: 45,
            primary: true
        }]
    }
];

for (const section of expertise) {
    let container = document.querySelector(section.selector);
    section.items.filter((value) => value.hasOwnProperty("primary")).forEach(item => {
        container.insertAdjacentHTML("beforeend", createExpertise(item)
        );
    })
    if (section.items.length > 5) container.insertAdjacentHTML("beforeend", createSeeMoreExpertise(section.selector + "-more", section.items))
}

document.querySelector("#contactForm").addEventListener("submit", function (evt) {
    evt.preventDefault();
    const nom = document.getElementById('name');
    const prenom = document.getElementById('firstname');
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
            subject: nom.value + " - Contact On Portfolio",
            message: `\nNom: ${nom.value.trim()}\nPrenom: ${prenom.value.trim()}\nEmail: ${email.value.trim()}\n\n\n${message.value.trim()}
            `
        })
    }).then(function (response) {
        if (response.ok) {
            alert('E-mail envoyé avec succès.')
            // Réinitialiser les champs du formulaire
            nom.value = ''
            prenom.value = ''
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
        showAlert("error", error, 'Erreur lors de la requête ');
    });
})
