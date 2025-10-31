<template>
  <div>
    <section
      class="glass p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8"
    >
      <div class="flex flex-col items-center w-full md:w-auto">
        <img
          src="../assets/avatar/avatar.jpg"
          alt="Ali Jafari portrait"
          class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 object-cover mb-2 sm:mb-4 md:mb-0"
          style="border-color: #00ffff; box-shadow: 0 0 20px rgba(0, 255, 255, 0.4), 0 0 40px rgba(255, 0, 255, 0.2);"
        />
        <img
          src="../assets/gif/cat.gif"
          alt="Cute cat gif"
          class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl mt-2 sm:mt-4 object-cover border-2"
          style="border-color: #ff00ff; box-shadow: 0 0 15px rgba(255, 0, 255, 0.4);"
        />
      </div>
      <div class="flex-1 w-full">
        <h1 class="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
          Ali Jafari
        </h1>
        <p class="mb-1 sm:mb-2 text-sm sm:text-base" style="color: #a0d8ff;">
          {{ t("home.welcome") }}
        </p>
        <ul class="mb-2 sm:mb-4 space-y-1 text-xs sm:text-sm">
          <li>
            <strong>{{ t("home.dob") }}:</strong> 2009-09-04
          </li>
          <li>
            <strong>{{ t("home.email") }}:</strong>
            <a
              href="mailto:riptt89@gmail.com"
              class="underline hover:text-slate-300"
              >riptt89@gmail.com</a
            >
          </li>
        </ul>
        <div class="flex flex-wrap gap-2 sm:gap-4 mt-1 sm:mt-2">
          <a
            href="https://github.com/Mr-Ali-Jafari"
            target="_blank"
            aria-label="GitHub"
            class="text-lg sm:text-2xl transition-colors"
            style="color: #00ffff; filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.3));"
            onmouseover="this.style.color='#ff00ff'; this.style.filter='drop-shadow(0 0 8px rgba(255, 0, 255, 0.5))'"
            onmouseout="this.style.color='#00ffff'; this.style.filter='drop-shadow(0 0 5px rgba(0, 255, 255, 0.3))'"
          >
            <i class="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mr-ali-jafari/"
            target="_blank"
            aria-label="LinkedIn"
            class="text-lg sm:text-2xl transition-colors"
            style="color: #00ffff; filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.3));"
            onmouseover="this.style.color='#ff00ff'; this.style.filter='drop-shadow(0 0 8px rgba(255, 0, 255, 0.5))'"
            onmouseout="this.style.color='#00ffff'; this.style.filter='drop-shadow(0 0 5px rgba(0, 255, 255, 0.3))'"
          >
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="mailto:riptt89@gmail.com"
            aria-label="Email"
            class="text-lg sm:text-2xl transition-colors"
            style="color: #00ffff; filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.3));"
            onmouseover="this.style.color='#ff00ff'; this.style.filter='drop-shadow(0 0 8px rgba(255, 0, 255, 0.5))'"
            onmouseout="this.style.color='#00ffff'; this.style.filter='drop-shadow(0 0 5px rgba(0, 255, 255, 0.3))'"
          >
            <i class="fas fa-envelope"></i> Email
          </a>
        </div>
      </div>
    </section>
    <section class="glass p-4 sm:p-6 md:p-8 mt-4 sm:mt-6 md:mt-8">
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">
        {{ t("home.achievements") }}
      </h2>
      <ul
        class="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-base"
      >
        <li>kharazmi festival (project)</li>
        <li>researching festival (project)</li>
        <li>python bootcamp</li>
        <li>japanese n5</li>
        <li>
          <a
            href="https://github.com/Mr-Ali-Jafari/myfolio/blob/main/src/assets/cert/EnglishCertificate.pdf"
            target="_blank"
            class="underline transition-colors"
            style="color: #00ffff;"
            onmouseover="this.style.color='#ff00ff'"
            onmouseout="this.style.color='#00ffff'"
            download
          >
            english level b2
          </a>
        </li>
      </ul>
    </section>
    <section class="glass p-4 sm:p-6 md:p-8 mt-4 sm:mt-6 md:mt-8">
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">
        {{ t("home.interests") }}
      </h2>
      <ul
        class="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-base"
      >
        <li>Language Learning (Japanese, English)</li>
        <li>Reading Tech Blogs & Research Papers</li>
        <li>Playing Chess & Puzzle Games</li>
      </ul>
    </section>
    <section class="glass p-4 sm:p-6 md:p-8 mt-4 sm:mt-6 md:mt-8">
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">
        {{ t("home.skillChart") }}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <div 
          v-for="skill in skills" 
          :key="skill.name"
          class="skill-card group"
        >
          <div class="skill-icon">
            <i class="fas fa-code"></i>
          </div>
          <div class="skill-content">
            <span class="skill-name">{{ skill.name }}</span>
            <div class="skill-bar-container">
              <div 
                class="skill-bar"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="text-xs text-slate-300 italic text-center mt-4 sm:mt-8">
      {{ t("home.designed") }}
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "../composables/useI18n";
const { t } = useI18n();

const skills = [
  { name: "Python", level: 80 },
  { name: "HTML/CSS", level: 70 },
  { name: "BootStrap 5.0", level: 70 },
  { name: "SQL", level: 55 },
  { name: "FastAPI", level: 70 },
  { name: "Docker", level: 40 },
  { name: "Git/Github", level: 50 },
];
</script>
