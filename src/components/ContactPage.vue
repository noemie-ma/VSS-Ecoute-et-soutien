<template>
  <div>
    <section>
      <h1>Contactez-nous</h1>
      <form @submit.prevent="submitForm">
        <label>
          Votre nom :
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            v-model="form.name"
            required
          />
        </label>
        <label>
          Votre email :
          <input
            type="email"
            name="email"
            placeholder="Votre adresse mail"
            v-model="form.email"
            required
          />
        </label>
        <label>
          Votre demande :
          <textarea
            name="message"
            placeholder="Rédigez votre demande ici"
            v-model="form.message"
            required
          ></textarea>
        </label>
        <button type="submit">Envoyer</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    validateForm() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.name || !this.form.email || !this.form.message) {
        this.errorMessage = "Tous les champs sont obligatoires.";
        return false;
      }
      if (!emailPattern.test(this.form.email)) {
        this.errorMessage = "Veuillez entrer une adresse email valide.";
        return false;
      }
      this.errorMessage = "";
      return true;
    },
    sanitizeInput(input) {
      const temp = document.createElement("div");
      temp.textContent = input;
      return temp.innerHTML;
    },
    async submitForm() {
      if (!this.validateForm()) {
        return;
      }
      const sanitizedForm = {
        name: this.sanitizeInput(this.form.name),
        email: this.sanitizeInput(this.form.email),
        message: this.sanitizeInput(this.form.message),
      };
      try {
        const response = await fetch("https://your-api-endpoint.com/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sanitizedForm),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        this.successMessage = "Votre message a été envoyé avec succès.";
        this.form = { name: "", email: "", message: "" };
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        this.errorMessage =
          "Une erreur est survenue lors de l'envoi du message.";
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
.success {
  color: green;
}
</style>