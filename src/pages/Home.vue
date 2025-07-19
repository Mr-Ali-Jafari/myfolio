<template>
  <div>
    <section class="glass p-8 flex flex-col md:flex-row items-center gap-8 mt-8">
      <div class="flex flex-col items-center">
        <img
          src="../assets/avatar/avatar.jpg"
          alt="Ali Jafari portrait"
          class="w-32 h-32 rounded-full border-4 border-pastelBlue shadow-lg object-cover mb-4 md:mb-0"
        />
        <img
          src="../assets/gif/cat.gif"
          alt="Cute cat gif"
          class="w-32 h-32 rounded-xl mt-4 object-cover border-2 border-pastelPurple shadow"
        />
      </div>
      <div class="flex-1">
        <h1 class="text-3xl font-bold mb-2">Ali Jafari</h1>
        <p class="mb-2 text-pastelBlue">{{t('home.welcome')}}</p>
        <ul class="mb-4 space-y-1">
          <li><strong>{{t('home.dob')}}:</strong> 2009-09-04</li>
          <li><strong>{{t('home.phone')}}:</strong> <a href="tel:+989336472907" class="underline hover:text-pastelPurple">+98 933 647 2907</a></li>
          <li><strong>{{t('home.email')}}:</strong> <a href="mailto:riptt89@gmail.com" class="underline hover:text-pastelPurple">riptt89@gmail.com</a></li>
        </ul>
        <div class="flex gap-4 mt-2">
          <a href="https://github.com/Mr-Ali-Jafari" target="_blank" aria-label="GitHub" class="hover:text-pastelBlue text-2xl">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/mr-ali-jafari/" target="_blank" aria-label="LinkedIn" class="hover:text-pastelPurple text-2xl">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="mailto:riptt89@gmail.com" aria-label="Email" class="hover:text-pastelBlue text-2xl">
            <i class="fas fa-envelope"></i> Email
          </a>
        </div>
      </div>
    </section>
    <section class="glass p-8 mt-8">
      <h2 class="text-xl font-bold mb-4">{{t('home.achievements')}}</h2>
      <ul class="list-disc list-inside space-y-2">
        <li>kharazmi festival (project)</li>
        <li>researching festival (project)</li>
        <li>python bootcamp</li>
        <li>japanese n1</li>
        <li>english level b2</li>
      </ul>
    </section>
    <section class="glass p-8 mt-8">
      <h2 class="text-xl font-bold mb-4">{{t('home.interests')}}</h2>
      <ul class="list-disc list-inside space-y-2">
        <li>Artificial Intelligence & Machine Learning</li>
        <li>Web Development & UI/UX Design</li>
        <li>Competitive Programming</li>
        <li>Open Source Contribution</li>
        <li>Language Learning (Japanese, English)</li>
        <li>Reading Tech Blogs & Research Papers</li>
        <li>Playing Chess & Puzzle Games</li>
        <li>Watching Anime & Cat Videos</li>
      </ul>
    </section>
    <section class="glass p-8 mt-8">
      <h2 class="text-xl font-bold mb-4">{{t('home.skillChart')}}</h2>
      <div class="space-y-4">
        <div v-for="skill in skills" :key="skill.name">
          <div class="flex justify-between mb-1">
            <span class="font-medium">{{ skill.name }}</span>
            <span class="text-sm text-pastelBlue">{{ skill.level }}%</span>
          </div>
          <div class="w-full bg-slate-900/40 rounded-full h-4">
            <div
              class="h-4 rounded-full bg-gradient-to-r from-pastelBlue to-pastelPurple transition-all duration-700"
              :style="{ width: skill.level + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </section>
    <div class="text-xs text-slate-300 italic text-center mt-8">{{t('home.designed')}}</div>
  </div>
</template>

<script setup>
import { useI18n } from '../composables/useI18n';
const { t } = useI18n();

const skills = [
  { name: 'Python', level: 80 },
  { name: 'JavaScript', level: 60 },
  { name: 'C#', level: 50 },
  { name: 'HTML/CSS', level: 70 },
  { name: 'SQL', level: 65 },
  { name: 'Django', level: 75 },
  { name: 'FastAPI', level: 70 },
  { name: 'React.js', level: 60 },
  { name: 'PostgreSQL', level: 65 },
  { name: 'MongoDB', level: 60 },
  { name: 'Docker', level: 60 },
  { name: 'TensorFlow', level: 55 },
];
</script> 