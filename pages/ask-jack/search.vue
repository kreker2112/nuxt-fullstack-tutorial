<template>
  <div
    class="min-h-full theme-mode bg-gradient-to-b from-white to-indigo-200 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-600"
  >
    <div class="h-32 flex justify-center">
      <div class="flex m-5">
        <img
          class="mx-auto h-24 w-auto"
          src="/img/logo_clear_fsj.png"
          alt="full stack jack logo"
        />
        <h1
          class="py-9 text-center text-5xl font-extrabold text-gray-900 dark:text-gray-400 ml-4"
        >
          Ask Jack
        </h1>
      </div>
    </div>
    <div class="md:flex min-h-full">
      <ElementsAskJackSidebar />
      <div class="md:w-1/3 z-1 flex justify-right relative"></div>
      <ElementsQuestionBoard />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
</script>

<style scoped lang="scss"></style>
