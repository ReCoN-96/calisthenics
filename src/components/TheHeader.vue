<template>
  <header class="header">
    <div class="content-container">
      <div class="header__content">
        <router-link
          class="header__link"
          active-class="header__link--active"
          to="/"
          exact
        >
          <span>Routine</span>
        </router-link>
        <router-link
          class="header__link"
          to="/movement"
          active-class="header__link--active"
        >
          <span>mouvement</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>
