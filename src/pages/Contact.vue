<template>
  <section class="glass p-4 sm:p-6 md:p-8 mt-4 sm:mt-6 md:mt-8">
    <h2 class="text-lg sm:text-2xl font-bold mb-2 sm:mb-6">{{t('contact.title')}}</h2>
    <form class="space-y-3 sm:space-y-4 max-w-full sm:max-w-md mx-auto" @submit.prevent="submitForm" autocomplete="off">
      <div>
        <label for="name" class="block mb-1 font-medium text-xs sm:text-base">{{t('contact.name')}}</label>
        <input id="name" v-model="form.name" type="text" required class="w-full p-2 rounded bg-slate-900/60 border border-white/20 focus:ring-2 focus:ring-pastelBlue outline-none text-xs sm:text-base" />
      </div>
      <div>
        <label for="email" class="block mb-1 font-medium text-xs sm:text-base">{{t('contact.email')}}</label>
        <input id="email" v-model="form.email" type="email" required class="w-full p-2 rounded bg-slate-900/60 border border-white/20 focus:ring-2 focus:ring-pastelBlue outline-none text-xs sm:text-base" />
      </div>
      <div>
        <label for="message" class="block mb-1 font-medium text-xs sm:text-base">{{t('contact.message')}}</label>
        <textarea id="message" v-model="form.message" required rows="4" class="w-full p-2 rounded bg-slate-900/60 border border-white/20 focus:ring-2 focus:ring-pastelBlue outline-none text-xs sm:text-base"></textarea>
      </div>
      <button type="submit" class="w-full py-2 rounded bg-pastelBlue text-navy font-semibold hover:bg-pastelPurple transition text-xs sm:text-base">{{t('contact.submit')}}</button>
    </form>
    <div class="mt-6 sm:mt-8 text-center">
      <div class="mb-1 sm:mb-2 text-xs sm:text-base">
        <strong>{{t('contact.phone')}}:</strong> <a href="tel:+989336472907" class="underline hover:text-pastelPurple">+98 933 647 2907</a>
      </div>
      <div class="mb-1 sm:mb-2 text-xs sm:text-base">
        <strong>{{t('contact.email')}}:</strong> <a href="mailto:riptt89@gmail.com" class="underline hover:text-pastelPurple">riptt89@gmail.com</a>
      </div>
      <div class="flex flex-wrap justify-center gap-3 sm:gap-6 mt-2">
        <a href="https://github.com/Mr-Ali-Jafari" target="_blank" aria-label="GitHub" class="hover:text-pastelBlue text-lg sm:text-2xl">GitHub</a>
        <a href="https://www.linkedin.com/in/mr-ali-jafari/" target="_blank" aria-label="LinkedIn" class="hover:text-pastelPurple text-lg sm:text-2xl">LinkedIn</a>
        <a href="mailto:riptt89@gmail.com" aria-label="Email" class="hover:text-pastelBlue text-lg sm:text-2xl">Email</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from '../composables/useI18n';
const { t } = useI18n();
const form = ref({ name: '', email: '', message: '' });
function submitForm() {
  alert('Message sent! (Demo only)');
  form.value = { name: '', email: '', message: '' };
}
</script> 