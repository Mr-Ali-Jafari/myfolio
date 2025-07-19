<template>
  <section class="glass p-4 sm:p-6 md:p-8 mt-4 sm:mt-6 md:mt-8">
    <h2 class="text-lg sm:text-2xl font-bold mb-2 sm:mb-6">{{t('projects.title')}}</h2>
    <div class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
      <div v-for="project in projects" :key="project.name" class="glass p-4 sm:p-6 shadow-glass hover:scale-105 hover:shadow-xl transition-transform duration-300">
        <h3 class="text-base sm:text-xl font-semibold mb-1 sm:mb-2">{{ project.name }}</h3>
        <p class="mb-1 sm:mb-2 text-xs sm:text-base">{{ project.desc() }}</p>
        <div class="mb-1 sm:mb-2 text-xs sm:text-sm text-pastelBlue">{{ project.tech }}</div>
        <a :href="project.github" target="_blank" class="text-pastelPurple underline hover:text-pastelBlue text-xs sm:text-base">{{t('projects.seeGithub')}}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n';
const { locale, t } = useI18n();

const projects = [
  {
    name: 'BuyTicket-Project',
    desc: () => locale.value === 'ja' ? 'Djangoを使ったオンラインチケットシステム' : 'Online ticketing system with Django',
    tech: 'Django, Python, PostgreSQL',
    github: 'https://github.com/Mr-Ali-Jafari/BuyTicket-Project',
  },
  {
    name: 'fastapi-blog',
    desc: () => locale.value === 'ja' ? 'FastAPIによるブログプラットフォーム' : 'Blog platform using FastAPI',
    tech: 'FastAPI, Python',
    github: 'https://github.com/Mr-Ali-Jafari/fastapi-blog',
  },
  {
    name: 'kharazmi-backend',
    desc: () => locale.value === 'ja' ? '学校向けSNS（バックエンド）' : 'School social network backend (like Telegram)',
    tech: 'FastAPI, Python, postgresql',
    github: 'https://github.com/Mr-Ali-Jafari/kharazmi-backend',
  },
  {
    name: 'kharazmi-frontend',
    desc: () => locale.value === 'ja' ? '学校向けSNS（フロントエンド）' : 'School social network frontend (like Telegram)',
    tech: 'React.js, TailwindCSS',
    github: 'https://github.com/Mr-Ali-Jafari/kharazmi-frontend',
  },
  {
    name: 'AI-Manager',
    desc: () => locale.value === 'ja' ? 'AIプロジェクト管理と画像処理' : 'AI project manager and image processing',
    tech: 'Python, requests',
    github: 'https://github.com/Mr-Ali-Jafari/AI_Manager',
  },
  {
    name: 'News Fetcher',
    desc: () => locale.value === 'ja' ? 'ニュース集約・フィルタリング機能' : 'News aggregator with filtering features',
    tech: 'Python',
    github: 'https://github.com/Mr-Ali-Jafari/news-fetcher',
  },
  {
    name: 'Graphical Interpreter',
    desc: () => locale.value === 'ja' ? 'グラフィカルコマンドインタプリタ' : 'Graphical command interpreter',
    tech: 'Python, Fastapi',
    github: 'https://github.com/Mr-Ali-Jafari/graphical-interpreter',
  },
  {
    name: 'Authentication System',
    desc: () => locale.value === 'ja' ? 'FastAPI + MongoDB JWT認証' : 'FastAPI + MongoDB JWT auth',
    tech: 'FastAPI, MongoDB, JWT',
    github: 'https://github.com/Mr-Ali-Jafari/authentication-system',
  },
    {
    name: 'Kharazmi IDE',
    desc: () => locale.value === 'ja' ? 'グラフィカルIDE' : 'Graphical IDE',
    tech: 'Pyqt5,Requests',
    github: 'https://github.com/Mr-Ali-Jafari/kharazmi',
  },
      {
    name: 'Article System',
    desc: () => locale.value === 'ja' ? '記事システム' : 'Article System',
    tech: 'Fastapi,Python,sqlite3',
    github: 'https://github.com/Mr-Ali-Jafari/aticle-system',
  },
];
</script> 