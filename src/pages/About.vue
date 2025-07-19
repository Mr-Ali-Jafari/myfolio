<template>
  <section class="glass p-4 sm:p-6 md:p-8 mt-4 sm:mt-6 md:mt-8">
    <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">{{t('about.title')}}</h2>
    <p class="mb-2 sm:mb-4 text-xs sm:text-base">
      Ali Jafari is a highly skilled and motivated computer science student with deep proficiency in Python and backend web development. His expertise spans a wide range of modern technologies and tools, including:
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
      <div>
        <h3 class="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Programming Languages</h3>
        <ul class="mb-2 sm:mb-4 list-disc list-inside text-xs sm:text-base">
          <li>Python (Advanced)</li>
          <li>JavaScript (Intermediate)</li>
          <li>C#</li>
          <li>Visual Basic</li>
          <li>HTML/CSS</li>
          <li>SQL</li>
        </ul>
        <h3 class="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Web Development</h3>
        <ul class="mb-2 sm:mb-4 list-disc list-inside text-xs sm:text-base">
          <li>Django, Django REST Framework, FastAPI, Flask</li>
          <li>SQLAlchemy, Alembic</li>
          <li>React.js, TailwindCSS, Bootstrap</li>
        </ul>
        <h3 class="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Database Systems</h3>
        <ul class="mb-2 sm:mb-4 list-disc list-inside text-xs sm:text-base">
          <li>PostgreSQL</li>
          <li>SQLite</li>
          <li>MongoDB</li>
          <li>Redis</li>
        </ul>
        <h3 class="font-semibold text-base sm:text-lg mb-1 sm:mb-2">API Development</h3>
        <ul class="mb-2 sm:mb-4 list-disc list-inside text-xs sm:text-base">
          <li>RESTful APIs</li>
          <li>WebSockets</li>
          <li>JWT Authentication</li>
          <li>OAuth2</li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-base sm:text-lg mb-1 sm:mb-2">DevOps & Deployment</h3>
        <ul class="mb-2 sm:mb-4 list-disc list-inside text-xs sm:text-base">
          <li>Docker</li>
          <li>Git & GitHub</li>
          <li>CI/CD Pipelines</li>
          <li>Nginx</li>
          <li>RabbitMQ</li>
        </ul>
        <h3 class="font-semibold text-base sm:text-lg mb-1 sm:mb-2">AI & Machine Learning</h3>
        <ul class="mb-2 sm:mb-4 list-disc list-inside text-xs sm:text-base">
          <li>TensorFlow (ML)</li>
          <li>OpenCV (Computer Vision)</li>
          <li>Custom AI applications (hand-tracking, face detection, etc.)</li>
        </ul>
        <h3 class="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Design & Tools</h3>
        <ul class="mb-2 sm:mb-4 list-disc list-inside text-xs sm:text-base">
          <li>Adobe Photoshop & Illustrator</li>
          <li>VS Code</li>
          <li>Postman</li>
          <li>npm, pip</li>
        </ul>
      </div>
    </div>
    <div class="mt-4 sm:mt-8 text-xs sm:text-base">
      <p>
        Ali is passionate about building scalable, secure, and innovative software solutions and is constantly learning new technologies to improve his craft. His current focus is on AI research, backend systems, and full-stack web development.
      </p>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n';
const { t } = useI18n();
</script> 