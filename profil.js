document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#profil-form");
  const photoInput = document.querySelector("#photo");
  const photoDisplay = document.querySelector("#photo-display");

  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const account = JSON.parse(localStorage.getItem("user")) || {};

  document.querySelector("#name").value = userData.name || "";
  document.querySelector("#lastname").value = userData.lastname || "";
  document.querySelector("#age").value = userData.age || "";
  document.querySelector("#birthplace").value = userData.birthplace || "";
  document.querySelector("#email").value = account.email || "";
  document.querySelector("#password").value = account.password || "";
  if (userData.photo) {
    photoDisplay.src = userData.photo;
    photoDisplay.style.display = "block";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const updatedData = {
      name: document.querySelector("#name").value,
      lastname: document.querySelector("#lastname").value,
      age: document.querySelector("#age").value,
      birthplace: document.querySelector("#birthplace").value,
      photo: photoDisplay.src
    };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    alert("Profil mis à jour !");
  });

  photoInput.addEventListener("change", () => {
    const file = photoInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        photoDisplay.src = reader.result;
        photoDisplay.style.display = "block";
        const currentData = JSON.parse(localStorage.getItem("userData")) || {};
        localStorage.setItem("userData", JSON.stringify({ ...currentData, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  });
});
