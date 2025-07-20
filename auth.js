// auth.js
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login-form");
  const logoutBtn = document.querySelector("#logout-btn");

  // LOGIN
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;

      const savedUser = JSON.parse(localStorage.getItem("user")) || {};
      if (email === savedUser.email && password === savedUser.password) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Connexion réussie !");
        window.location.href = "index.html";
      } else {
        alert("Identifiants incorrects.");
      }
    });
  }

  // LOGOUT
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.setItem("isLoggedIn", "false");
      alert("Vous avez été déconnecté.");
      window.location.href = "login.html";
    });
  }

  // REDIRECTION auto si pas connecté
  const protectedPages = ["index.html", "budget.html", "education.html", "profil.html", "tickets.html"];
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const currentPage = window.location.pathname.split("/").pop();

  if (protectedPages.includes(currentPage) && !isLoggedIn) {
    window.location.href = "login.html";
  }
});
