<template>
  <div
    class="bg-slate-100 landing min-h-screen w-full flex justify-center items-center flex-col"
  >
    <div class="bg-white w-80 text-center border-gray-50 rounded p-5 shadow">
      <h1 class="landing-title text-sky-500 font-bold text-start">Login</h1>
      <form class="py-2 space-y-3">
        <input
          type="text"
          name=""
          id=""
          class="w-full border text-start p-2 focus:outline-none"
          placeholder="Username"
        />
        <input
          type="password"
          name=""
          id=""
          class="w-full border text-start p-2 focus:outline-none"
          placeholder="Password"
        />
      </form>
      <router-link
        to="/register"
        class="bg-sky-500 text-white rounded block p-1 hover:bg-sky-600 transition"
        >Sign In</router-link
      >
    </div>
    <div class="bottom-box flex flex-row space-x-2 items-center">
      <small class="p-0 m-0">Dou you have not an account yet?</small>
      <router-link to="/register" class="text-sky-500"
        ><small>Sign up</small></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style scoped></style>
