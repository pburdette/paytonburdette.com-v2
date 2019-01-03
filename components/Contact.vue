<template>
  <section class="contact">
    <h1>Contact</h1>
    <p>Thanks for stopping by! I'm always down to chat about code or golf, so feel free to hit me up. Also check out my <a href="https://github.com/beardedpayton" target="_blank">GitHub</a>, or give me a follow on <a href="https://twitter.com/beardedpayton" target="_blank">Twitter</a>.</p>
    <form
      name="contact" 
      method="POST" 
      data-netlify-honeypot="bot-field"
      netlify
      @submit.prevent="validateBeforeSumbit()"
    >
      <div class="group">
        <label for="">Name</label>
        <input 
          type="text" 
          name="name" 
          placeholder="Full Name"
          v-validate="'required|alpha'"
        >
        <span v-show="errors.has('name')" class="error">{{ errors.first('name')}}</span>
      </div>
      <div class="group">
        <label for="">Subject</label>
        <input 
          type="text" 
          name="subject" 
          placeholder="Subject"
          v-validate="'required|alpha'"
        >
        <span v-show="errors.has('subject')" class="error">{{ errors.first('subject')}}</span>
      </div>
      <div class="group">
        <label for="">Email</label>
        <input 
          type="email" 
          name="email" 
          placeholder="johnsnow@got.com"
          v-validate="'required|email'"
        >
        <span v-show="errors.has('email')" class="error">{{ errors.first('email')}}</span>
      </div>
      <div class="group">
        <label for="">Message</label>
        <textarea 
          name="message" 
          cols="30" 
          rows="10"
          placeholder="Write me a message :)"
          v-validate="'required'"
        ></textarea>
        <span v-show="errors.has('message')" class="error">{{ errors.first('message')}}</span>
      </div>
      <div data-netlify-recaptcha></div>
      <button type="submit">Send</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
    validateBeforeSumbit() {
      this.$validator.validateAll()
    }
  }
}
</script>

<style lang="scss">
form {
  max-width: 320px;
  button {
    padding: 10px 25px;
    border-radius: .25rem;
    border: 1px solid transparent;
    background-color: #46BCDE;
    color: #fff;
    text-transform: uppercase;
  }
  button:hover {
    cursor: pointer;
    background-color: #3b9ebb;
  }
}
.group {
  margin-bottom: 25px;
  label {
    margin-bottom: 10px;
  }
  input,
  textarea {
    box-sizing:border-box;
    width: 100%;
    padding: 8px;
    background-color: #2d2d33;
    border: 1px solid transparent;
    border-radius: .25rem;
    color: #fff;
    font-size: 16px;
  }
  textarea {
    resize: none;
  }
  label,
  input {
    display: block
  }
}

.error {
  color: #E94F64;
  display: block;
}
</style>
