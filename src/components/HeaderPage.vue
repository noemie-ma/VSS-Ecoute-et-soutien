<template>
  <!-- Page's header -->
  <header>
    <!-- Logo et navigation avec des ancres -->
    <div class="logo">
      <img src="./assets/logo.png" alt="Logo du site Pour Elles" />
    </div>
    <!--<div class="title">
      <h1>Pour Elles</h1>
    </div>-->
    <div class="upheader">
      <nav>
        <ul>
          <li><a href="#vss" class="linknav">Qu'est-ce que les VSS ?</a></li>
          <li><a href="#signaler" class="linknav">Des questions ?</a></li>
        </ul>
      </nav>
      <!-- Lien vers la page récapitulative des contacts utiles -->
      <div class="contact">
        <a href="#vss2">Signaler un cas</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderPage",
};
</script>
