<template>
  <div class="landing-page">
    <NuxtRouteAnnouncer />
    <div class="hero">
      <div class="hero-image"></div>
      <div class="overlay"></div>
      <div class="content">
        <h1 class="title">Chambres d'hôtes Nartuby</h1>
        <p class="address">15, Boulevard André Bouis</p>
        <p class="address">83929 La Motte</p>
      </div>
    </div>
  </div>
</template>

<style>
body,
html {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.landing-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/sunset-view.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 2rem;
}

.title {
  font-family: 'Georgia', serif;
  font-size: 4rem;
  font-weight: 300;
  letter-spacing: 3px;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.address {
  font-family: 'Georgia', serif;
  font-size: 1.5rem;
  font-weight: 300;
  font-style: italic;
  opacity: 0.95;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  margin: 0.5rem 0;
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }

  .address {
    font-size: 1.2rem;
  }
}
</style>
