<template>
  <section class="contact">
    <h1>Contact</h1>
    <p>Thanks for stopping by! I'm always down to chat about code or golf, so feel free to hit me up. Also check out my <a href="https://github.com/beardedpayton" target="_blank">GitHub</a>, or give me a follow on <a href="https://twitter.com/beardedpayton" target="_blank">Twitter</a>.</p>
    <form
      name="contact" 
      method="POST" 
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div class="group">
        <label for=""><span class="required">*</span> Name</label>
        <input 
          v-model="formData.name"
          type="text" 
          name="name" 
          placeholder="Full Name"
          v-validate="'required|alpha_spaces'"
        >
        <span v-show="errors.has('name')" class="error">{{ errors.first('name')}}</span>
      </div>
      <div class="group">
        <label for=""><span class="required">*</span> Subject</label>
        <input 
          v-model="formData.subject"
          type="text" 
          name="subject" 
          placeholder="Subject"
          v-validate="'required|alpha_spaces'"
        >
        <span v-show="errors.has('subject')" class="error">{{ errors.first('subject')}}</span>
      </div>
      <div class="group">
        <label for=""><span class="required">*</span> Email</label>
        <input 
          v-model="formData.email"
          type="email" 
          name="email" 
          placeholder="johnsnow@got.com"
          v-validate="'required|email'"
        >
        <span v-show="errors.has('email')" class="error">{{ errors.first('email')}}</span>
      </div>
      <div class="group">
        <label for=""><span class="required">*</span> Message</label>
        <textarea 
          v-model="formData.message"
          name="message" 
          cols="30" 
          rows="10"
          placeholder="Write me a message :)"
          v-validate="'required'"
        ></textarea>
        <span v-show="errors.has('message')" class="error">{{ errors.first('message')}}</span>
      </div>
      <div data-netlify-recaptcha></div>
      <input type="hidden" name="form-name" value="contact" />
      <button v-if="errors.items.length === 0 && emptyValueCheck === false" type="submit" class="submit">Send</button>
      <button v-else class="disabled" disabled>Send</button>
      <p class="submit-msg">
        <span class="required">*</span>
        All fields must be completed
      </p>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Contact',

  data() {
    return {
      formData: {
        name: '',
        subject: '',
        email: '',
        message: ''
      }
    }
  },

  computed: {
    emptyValueCheck() {
      return Object.values(this.formData).includes('')
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
    text-transform: uppercase;
  }
}
.group {
  margin-bottom: 30px;
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

.submit {
  background-color: #46BCDE;
  color: #fff;
}

.submit:hover {
  cursor: pointer;
  background-color: #3b9ebb;
}

.disabled {
  background-color: #0a0a0a;
  color: #464646;
}
.error {
  color: #E94F64;
  position: absolute;
}

.required {
  color: #E94F64;
}

.submit-msg {
  font-size: 12px;
}
</style>
