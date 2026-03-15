<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <SectionBlock id="pricing" :tagline="t('pricing.title')" :title="t('pricing.title')">
    <div class="pricing-table-wrapper">
      <table class="pricing-table">
        <thead>
          <tr>
            <th />
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
  </SectionBlock>
</template>

<style scoped>
.pricing-table-wrapper {
  overflow-x: auto;
  max-width: 580px;
}

.pricing-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

.pricing-table th,
.pricing-table td {
  padding: 0.8rem 1rem;
  text-align: left;
  border-bottom: 1px solid #eae7e2;
}

.pricing-table th {
  font-weight: 400;
  color: #2c2c2c;
  background: #faf8f5;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.pricing-table td {
  color: #666;
}

.pricing-table td:first-child {
  color: #2c2c2c;
  font-weight: 400;
}

.pricing-table td:not(:first-child),
.pricing-table th:not(:first-child) {
  text-align: center;
}

.pricing-info {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.8;
  max-width: 580px;
}

.pricing-info-block h3 {
  font-size: 0.95rem;
  font-weight: 400;
  color: #2c2c2c;
  margin-bottom: 0.4rem;
  letter-spacing: 0.5px;
}

.pricing-info-block ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1.2rem;
}

.pricing-info-block li {
  padding: 0.15rem 0;
}

.pricing-info-block li::before {
  content: "\25B8\00a0";
  color: #bbb;
}

.breakfast-times {
  font-style: italic;
  color: #888;
}

@media (max-width: 768px) {
  .pricing-table {
    font-size: 0.85rem;
  }

  .pricing-table th,
  .pricing-table td {
    padding: 0.6rem 0.5rem;
  }
}
</style>
