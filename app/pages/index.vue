<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="landing-page">
    <div class="hero">
      <div class="hero-image"/>
      <div class="overlay"/>
      <div class="content">
        <h1 class="title">{{ t("title") }}</h1>
        <p class="address">{{ t("address1") }}</p>
        <p class="address">{{ t("address2") }}</p>
        <p class="website">{{ t("website") }}</p>
        <a :href="`mailto:${t('email')}`" class="email">{{ t("email") }}</a>
        <div class="rooms-link-wrapper">
          <NuxtLink to="/rooms" class="rooms-link">
            {{ t("rooms.discover") }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <section class="pricing-section">
      <h2 class="pricing-title">{{ t("pricing.title") }}</h2>

      <div class="pricing-table-wrapper">
        <table class="pricing-table">
          <thead>
            <tr>
              <th></th>
              <th>{{ t("pricing.normalSeason") }}</th>
              <th>{{ t("pricing.holidaySeason") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ t("pricing.perPersonPerNight") }}</td>
              <td>59 &euro;</td>
              <td>89 &euro;</td>
            </tr>
            <tr>
              <td>{{ t("pricing.secondPerson") }}</td>
              <td>+ 20 &euro;</td>
              <td>+ 30 &euro;</td>
            </tr>
            <tr>
              <td>{{ t("pricing.breakfast") }}</td>
              <td>7 &euro;</td>
              <td>10 &euro;</td>
            </tr>
            <tr>
              <td>{{ t("pricing.touristTax") }}</td>
              <td colspan="2">1,40 &euro; {{ t("pricing.touristTaxNote") }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pricing-info">
        <div class="pricing-info-block">
          <h3>{{ t("pricing.holidayPeriods") }}</h3>
          <ul>
            <li>{{ t("pricing.holidayPeriod1") }}</li>
            <li>{{ t("pricing.holidayPeriod2") }}</li>
            <li>{{ t("pricing.holidayPeriod3") }}</li>
            <li>{{ t("pricing.holidayPeriod4") }}</li>
          </ul>
        </div>
        <p class="breakfast-times">{{ t("pricing.breakfastTimes") }}</p>
      </div>
    </section>

  </div>
</template>

<style>
body,
html {
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.landing-page {
  width: 100%;
  min-height: 100vh;
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
  background-image: url("/hero-background.jpg");
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

.content a {
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.title {
  font-family: "Georgia", serif;
  font-size: 4rem;
  font-weight: 300;
  letter-spacing: 3px;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.address {
  font-family: "Georgia", serif;
  font-size: 1.5rem;
  font-weight: 300;
  font-style: italic;
  opacity: 0.95;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  margin: 0.5rem 0;
}

.website {
  font-family: "Georgia", serif;
  font-size: 1.5rem;
  font-weight: 300;
  font-style: italic;
  opacity: 0.95;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  margin: 0.5rem 0;
}

.email {
  font-family: "Georgia", serif;
  font-size: 1.5rem;
  font-weight: 300;
  font-style: italic;
  opacity: 0.95;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  margin: 0.5rem 0;
  color: white;
  text-decoration: none;
  display: inline-block;
  position: relative;
  transition: all 0.3s ease;
  padding: 0.2rem 0.5rem;
}

.email::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.email:hover {
  opacity: 1;
  transform: translateY(-2px);
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
}

.email:hover::after {
  width: 100%;
}

.rooms-link-wrapper {
  margin-top: 2.5rem;
}

.rooms-link {
  font-family: "Georgia", serif;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  display: inline-block;
  max-width: 90vw;
  text-align: center;
}

.rooms-link:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: white;
  transform: translateY(-2px);
}

/* Pricing Section */
.pricing-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.pricing-title {
  font-family: "Georgia", serif;
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 2px;
  color: #2c2c2c;
  text-align: center;
  margin-bottom: 2.5rem;
}

.pricing-table-wrapper {
  overflow-x: auto;
}

.pricing-table {
  width: 100%;
  border-collapse: collapse;
  font-family: "Georgia", serif;
  font-size: 1rem;
  margin-bottom: 2.5rem;
}

.pricing-table th,
.pricing-table td {
  padding: 0.9rem 1.2rem;
  text-align: left;
  border-bottom: 1px solid #e8e4df;
}

.pricing-table th {
  font-weight: 400;
  color: #2c2c2c;
  background: #faf8f5;
  font-size: 1.05rem;
}

.pricing-table td {
  color: #555;
}

.pricing-table td:first-child {
  color: #2c2c2c;
  font-weight: 400;
}

.pricing-table td:not(:first-child) {
  text-align: center;
}

.pricing-table th:not(:first-child) {
  text-align: center;
}

.pricing-info {
  color: #555;
  font-family: "Georgia", serif;
  font-size: 0.95rem;
  line-height: 1.8;
}

.pricing-info-block h3 {
  font-family: "Georgia", serif;
  font-size: 1.05rem;
  font-weight: 400;
  color: #2c2c2c;
  margin-bottom: 0.5rem;
}

.pricing-info-block ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
}

.pricing-info-block li {
  padding: 0.2rem 0;
}

.pricing-info-block li::before {
  content: "\25B8\00a0";
  color: #999;
}

.breakfast-times {
  font-style: italic;
  color: #666;
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }

  .address {
    font-size: 1.2rem;
  }

  .website {
    font-size: 1.2rem;
  }

  .email {
    font-size: 1.2rem;
  }

  .rooms-link {
    font-size: 1rem;
    padding: 0.6rem 1.5rem;
  }

  .pricing-section {
    padding: 3rem 1rem;
  }

  .pricing-title {
    font-size: 2rem;
  }

  .pricing-table {
    font-size: 0.9rem;
  }

  .pricing-table th,
  .pricing-table td {
    padding: 0.7rem 0.6rem;
  }
}
</style>
