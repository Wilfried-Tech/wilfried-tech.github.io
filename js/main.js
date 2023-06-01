"use strict";

const expertise = [
    {
        selector: "#development",
        items: [
            {
                name: "html5",
                bsIconClass: "fab fa-html5",
                value: 75,
            }, {
                name: "css3",
                bsIconClass: "fab fa-css3",
                value: 75,
                primary: true
            }, {
                name: "js",
                bsIconClass: "fab fa-js",
                value: 75,
                primary: true
            }, {
                name: "php",
                bsIconClass: "fab fa-php",
                value: 75,
                primary: true
            }, {
                name: "python",
                bsIconClass: "fab fa-python",
                value: 75,
                primary: true
            }, {
                name: "java",
                bsIconClass: "fab fa-java",
                value: 75,
                primary: true
            }, {
                name: "C",
                bsIconClass: "",
                value: 75,
            }, {
                name: "c++",
                bsIconClass: "",
                value: 75,
            }, {
                name: "sass",
                bsIconClass: "fab fa-sass",
                value: 20
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
