const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

const correctUsername = "Gregoire"; // Remplacez ceci par votre nom d'utilisateur
const correctPassword = "Greg_yt567"; // Remplacez ceci par votre mot de passe

const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");

const moreInfoButton = document.getElementById("more-info-button");
const moreInfoContent = document.getElementById("more-info-content");

// Ajoutez un gestionnaire d'événements pour la touche "Entrée" sur le champ de mot de passe
passwordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        // Empêche le comportement par défaut du formulaire
        event.preventDefault();

        // Appelle la fonction de gestion de la soumission
        submitForm();
    }
});

// Ajoutez un gestionnaire d'événements pour le bouton de soumission
submitButton.addEventListener("click", function () {
    submitForm();
});

function submitForm() {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        // Redirige vers la page secrète et empêche la navigation en arrière
        window.location.replace("Untitled-2.html");
    } else {
        // Gestion des erreurs ici
        if (enteredUsername !== correctUsername) {
            usernameError.textContent = "Nom d'utilisateur incorrect.";
        } else {
            usernameError.textContent = "";
        }

        if (enteredPassword !== correctPassword) {
            passwordError.textContent = "Mot de passe incorrect.";
        } else {
            passwordError.textContent = "";
        }

        usernameInput.value = ""; // Efface le champ du nom d'utilisateur
        passwordInput.value = ""; // Efface le champ du mot de passe
    }
}

moreInfoButton.addEventListener("click", function () {
    if (moreInfoContent.style.display === "none" || moreInfoContent.style.display === "") {
        moreInfoContent.style.display = "block";
    } else {
        moreInfoContent.style.display = "none";
    }
});
