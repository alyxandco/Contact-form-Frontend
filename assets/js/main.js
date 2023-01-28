document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  //   Gestion du formulaire

  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      //   console.log("submit");

      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#sujet").value,
        message: document.querySelector("#message").value,
      };

      //   console.log(data);

      const response = await axios.post("http://localhost:3000/form", data);
      console.log("reponse >> ", response);
    });
});
