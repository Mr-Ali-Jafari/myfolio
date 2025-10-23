<template>
  <section class="glass p-4 sm:p-6 md:p-8 mt-4 sm:mt-6 md:mt-8">
    <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">{{t('about.title')}}</h2>
    <p class="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed text-slate-300">
      Ali Jafari is a computer science student and backend developer with strong expertise in Python, C#, and JavaScript. He builds scalable backend systems and integrates them with game engines like Unity and Godot for AI-driven gameplay and tools.
    </p>
    
    <h3 class="text-base sm:text-lg font-bold mb-4 text-slate-200">Skills</h3>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      <div class="skill-category">
        <h4 class="skill-category-title">
          <i class="fas fa-code"></i>
          Programming
        </h4>
        <p class="skill-category-content">Python, C#, JavaScript, SQL</p>
      </div>

      <div class="skill-category">
        <h4 class="skill-category-title">
          <i class="fas fa-server"></i>
          Backend
        </h4>
        <p class="skill-category-content">Django, FastAPI, REST APIs, WebSockets</p>
      </div>

      <div class="skill-category">
        <h4 class="skill-category-title">
          <i class="fas fa-database"></i>
          Databases
        </h4>
        <p class="skill-category-content">PostgreSQL, SQLite, MongoDB</p>
      </div>

      <div class="skill-category">
        <h4 class="skill-category-title">
          <i class="fas fa-docker"></i>
          DevOps
        </h4>
        <p class="skill-category-content">Docker, Git, CI/CD, Nginx</p>
      </div>

      <div class="skill-category">
        <h4 class="skill-category-title">
          <i class="fas fa-gamepad"></i>
          Game Dev
        </h4>
        <p class="skill-category-content">Unity, Godot, C# scripting, custom AI systems (vision, hand-tracking, etc.)</p>
      </div>

      <div class="skill-category">
        <h4 class="skill-category-title">
          <i class="fas fa-brain"></i>
          AI / ML
        </h4>
        <p class="skill-category-content">TensorFlow, OpenCV</p>
      </div>

      <div class="skill-category">
        <h4 class="skill-category-title">
          <i class="fas fa-tools"></i>
          Tools
        </h4>
        <p class="skill-category-content">VS Code, Postman, Photoshop</p>
      </div>
    </div>

    <div class="mt-6 sm:mt-8 p-4 sm:p-6 rounded-lg border border-slate-600/30 bg-slate-900/30">
      <p class="text-sm sm:text-base leading-relaxed text-slate-300">
        <i class="fas fa-lightbulb text-slate-500 mr-2"></i>
        Currently focused on combining AI and backend logic in game development, especially in interactive systems, gameplay automation, and intelligent NPC behavior.
      </p>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n';
const { t } = useI18n();
</script> 