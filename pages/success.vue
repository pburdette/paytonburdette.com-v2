<template>
  <main>
    <section>
      <div class="success-message">
        <h1>Success!</h1>
        <p>Thank you for getting in touch! I'll get back in touch with you as soon as I can.</p>
        <nuxt-link to="/">Go back to my site</nuxt-link>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Success'
}
</script>

<style lang="scss" scoped>
.success-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  height: 50vh;
  h1 {
    margin-bottom: 0;
  }
}
</style>
