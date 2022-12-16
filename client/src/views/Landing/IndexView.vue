<template>
  <div
    class="bg-slate-100 landing min-h-screen w-full flex justify-center items-center flex-col"
  >
    <div class="bg-white w-80 text-center border-gray-50 rounded p-5">
      <h1 class="landing-title text-sky-500 font-bold">
        Welcome to Book Store!
      </h1>
      <p class="landing-text my-4 opacity-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt.
      </p>
      <div class="linkers-box space-x-3">
        <router-link
          to="/register"
          class="bg-sky-500 text-white rounded py-1 px-3 hover:bg-sky-600 transition"
          >Sign Up</router-link
        >
        <router-link
          to="/login"
          class="bg-white-500 border rounded py-1 px-3 hover:bg-gray-600 transition hover:border-gray-600 hover:text-white"
          >Sign In</router-link
        >
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style scoped></style>
