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
          <FontAwesomeIcon
            class="is-size-4 mr-3"
            icon="fa-solid fa-dice"
          />
          <span class="is-uppercase">BrettButtler</span>
        </a>
        <a
          role="button"
          class="navbar-burger"
          data-target="menuItems"
          :class="{ 'is-active': mobileNavOpen }"
          @click="toggleMobileNav"
        >
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>

      <div
        id="menuItems"
        class="navbar-menu"
        :class="{ 'is-active': mobileNavOpen }"
      >
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

<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {ref} from "vue";

const mobileNavOpen = ref<boolean>(false)
const toggleMobileNav = () => {
  mobileNavOpen.value = !mobileNavOpen.value
}
</script>
