<template>
  <nav
      class="navbar is-primary is-radiusless"
      role="navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <a
            href="/"
            class="navbar-item"
        >
          <span class="is-uppercase">BrettButtler</span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <router-link
              class="navbar-item"
              to="/events"
          >
            Events
          </router-link>
          <router-link
              class="navbar-item"
              to="/games"
          >
            Games
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
