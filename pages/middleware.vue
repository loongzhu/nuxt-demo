<script setup lang="ts" name="profile">
definePageMeta({
  middleware: [
    function (to, from) {
      // Custom inline middleware

      console.log("Custom inline middleware");
    },
    "auth",
  ],

  // test auto add route middleware from /plugin/add-route-middleware.ts
  // middleware: ["named-test"],

  // use a defined middleware function
  // middleware: ["auth"],
  // // or middleware: 'auto'
});
</script>

<template>
  <div>
    <h3>middleware Directory</h3>

    <p>
      This page has a custom middleware function and the "auth" middleware
      applied.
    </p>
  </div>
</template>

<style scoped lang="scss"></style>
