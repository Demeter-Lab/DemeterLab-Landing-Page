//get the form with ID

const { response } = require("express");

if (typeof window !== 'undefined') {
    //here `window` is available, so `window.document` (or simply `document`) is available too
    const form = document.getElementById("contactForm");

const eventForm = form.addEventListener("submit", (event) => {
    event.preventDefault();

    let mail = new FormData(form);

    sendMail(mail);
})

const sendMail = (mail) => {
    fetch("/send", {
        method: "post",
        body: mail,
    }).then((response) => {
        return response.json();
    });
};

}