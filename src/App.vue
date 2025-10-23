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

const kanjiChars = ['知能', '遊戯', '論理', '開発', '未来', '電脳', '幻想', '夢想', '創造', '革命', '進化', '技術', '魔法', '神秘', '光速', '量子'];

function toggleLang() {
  setLocale(locale.value === 'en' ? 'ja' : 'en');
}

function getRandomKanji() {
  return kanjiChars[Math.floor(Math.random() * kanjiChars.length)];
}

function kanjiColumnStyle(n) {
  const left = Math.random() * 95 + '%';
  const duration = 6 + Math.random() * 1; // 2-3 seconds
  const delay = Math.floor(n / 4) * 3 + (Math.random() * 0.5); // every 3 seconds, 4 kanji
  return {
    left: left,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  };
}

onMounted(() => {
  document.documentElement.classList.add('dark');
});
</script>

<template>
  <div class="dark min-h-screen bg-navy transition-colors duration-300">
    <!-- Kanji Rain Background -->
    <div class="kanji-rain">
      <div v-for="n in 4" :key="n" class="kanji-column" :style="kanjiColumnStyle(n)">
        <span class="kanji-char">{{ getRandomKanji() }}</span>
      </div>
    </div>
    
    <nav class="glass flex flex-col sm:flex-row items-center justify-between px-3 sm:px-6 py-3 sm:py-4 mb-4 sm:mb-8 sticky top-0 z-50 gap-2 sm:gap-0">
      <div class="flex items-center gap-2 sm:gap-4">
        <span class="font-bold text-lg sm:text-xl tracking-wide text-cyan-400" style="text-shadow: 0 0 10px rgba(0, 255, 255, 0.5); font-family: 'Orbitron', sans-serif;">Ali Jafari</span>
      </div>
      <ul class="flex flex-wrap gap-3 sm:gap-6 items-center justify-center">
        <li v-for="route in navRoutes" :key="route.path">
          <router-link :to="route.path" class="text-cyan-400 hover:text-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 px-1 sm:px-2 py-1 rounded transition text-sm sm:text-base font-medium" style="text-shadow: 0 0 5px rgba(0, 255, 255, 0.3);">
            {{ t(route.label) }}
          </router-link>
        </li>
        <li>
          <button @click="toggleLang" class="text-cyan-400 hover:text-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 px-1 sm:px-2 py-1 rounded transition text-sm sm:text-base font-medium" style="text-shadow: 0 0 5px rgba(0, 255, 255, 0.3);" :aria-label="t('nav.lang')">
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
    <footer class="glass mt-8 sm:mt-12 mb-2 mx-auto max-w-full sm:max-w-4xl px-3 sm:px-6 py-4 sm:py-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-4 text-xs sm:text-base">
      <div class="flex items-center gap-2 sm:gap-3">
        <span class="font-bold text-base sm:text-lg tracking-wide text-cyan-400" style="text-shadow: 0 0 8px rgba(0, 255, 255, 0.4); font-family: 'Orbitron', sans-serif;">Ali Jafari</span>
        <span class="text-xs text-fuchsia-300">&copy; {{ new Date().getFullYear() }}</span>
      </div>
      <div class="flex gap-2 sm:gap-4 text-lg sm:text-xl">
        <a href="https://github.com/alijafari" target="_blank" aria-label="GitHub" class="text-cyan-400 hover:text-fuchsia-400 transition" style="filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.3));"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/mr-ali-jafari/" target="_blank" aria-label="LinkedIn" class="text-cyan-400 hover:text-fuchsia-400 transition" style="filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.3));"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:riptt89@gmail.com" aria-label="Email" class="text-cyan-400 hover:text-fuchsia-400 transition" style="filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.3));"><i class="fas fa-envelope"></i></a>
      </div>
      <div class="text-xs text-cyan-300 text-center md:text-right font-japanese" style="text-shadow: 0 0 5px rgba(0, 255, 255, 0.3);">日本に移住する予定です</div>
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
