<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from './composables/useI18n';

const { locale, t, setLocale } = useI18n();

const navRoutes = [
  { path: '/', label: 'nav.home' },
  { path: '/about', label: 'nav.about' },
  { path: '/projects', label: 'nav.projects' },
  { path: '/contact', label: 'nav.contact' },
];

function toggleLang() {
  setLocale(locale.value === 'en' ? 'ja' : 'en');
}

function sparkleStyle(n) {
  // Randomize position and animation delay for each sparkle
  const top = Math.random() * 90 + 2;
  const left = Math.random() * 90 + 2;
  const delay = Math.random() * 6;
  return {
    top: `${top}%`,
    left: `${left}%`,
    animationDelay: `${delay}s`,
  };
}

onMounted(() => {
  document.documentElement.classList.add('dark');
});
</script>

<template>
  <div class="dark min-h-screen bg-navy transition-colors duration-300">
    <div class="sparkle-overlay z-0">
      <span v-for="n in 12" :key="n" class="sparkle" :style="sparkleStyle(n)"></span>
    </div>
    <nav class="glass flex flex-col sm:flex-row items-center justify-between px-3 sm:px-6 py-3 sm:py-4 mb-4 sm:mb-8 sticky top-0 z-50 gap-2 sm:gap-0">
      <div class="flex items-center gap-2 sm:gap-4">
        <span class="font-bold text-lg sm:text-xl tracking-wide">Ali Jafari</span>
      </div>
      <ul class="flex flex-wrap gap-3 sm:gap-6 items-center justify-center">
        <li v-for="route in navRoutes" :key="route.path">
          <router-link :to="route.path" class="hover:text-pastelBlue focus:outline-none focus:ring-2 focus:ring-pastelBlue px-1 sm:px-2 py-1 rounded transition text-sm sm:text-base">
            {{ t(route.label) }}
          </router-link>
        </li>
        <li>
          <button @click="toggleLang" class="hover:text-pastelPurple focus:outline-none focus:ring-2 focus:ring-pastelPurple px-1 sm:px-2 py-1 rounded transition text-sm sm:text-base" :aria-label="t('nav.lang')">
            {{ t('nav.lang') }}
          </button>
        </li>
      </ul>
    </nav>
    <main class="max-w-full sm:max-w-4xl mx-auto px-2 sm:px-4 w-full">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" v-if="Component" />
          <div v-else class="text-center py-8 text-pastelBlue">Loading...</div>
        </transition>
      </router-view>
    </main>
    <footer class="glass mt-8 sm:mt-12 mb-2 mx-auto max-w-full sm:max-w-4xl px-3 sm:px-6 py-4 sm:py-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-4 border-t-4 border-gradient-to-r from-pastelBlue via-pastelPurple to-navy shadow-lg animate-fadeIn text-xs sm:text-base">
      <div class="flex items-center gap-2 sm:gap-3">
        <span class="font-bold text-base sm:text-lg tracking-wide text-pastelBlue">Ali Jafari</span>
        <span class="text-xs text-pastelPurple">&copy; {{ new Date().getFullYear() }}</span>
      </div>
      <div class="flex gap-2 sm:gap-4 text-lg sm:text-xl">
        <a href="https://github.com/alijafari" target="_blank" aria-label="GitHub" class="hover:text-pastelBlue transition"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/mr-ali-jafari/" target="_blank" aria-label="LinkedIn" class="hover:text-pastelPurple transition"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:riptt89@gmail.com" aria-label="Email" class="hover:text-pastelBlue transition"><i class="fas fa-envelope"></i></a>
      </div>
      <div class="text-xs text-slate-300 italic text-center md:text-right">I will immigrate to Japan soon ✨</div>
    </footer>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4,0,0.2,1);
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
