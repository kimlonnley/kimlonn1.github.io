// Define variable
const message =
  "Merci pour votre papyrus. L'équipage de l'Argo va vous répondre prochainement.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
