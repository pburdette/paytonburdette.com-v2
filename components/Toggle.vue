<template>
  <div class="toggle">
    <div v-if="mode === 'Dark'" class="toggle-group">
      <span>Light</span>
      <button @click="changeMode('Light')" class="light"></button>
    </div>
    <div v-else class="toggle-group">
      <span>Dark</span>
      <button @click="changeMode('Dark')" class="dark"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toggle',
  data() {
    return {
      mode: 'Dark'
    }
  },
  methods: {
    changeMode(mode) {
      this.mode = mode

      if(mode === 'Light') {
        document.body.classList.add('light-mode')
      } else {
        document.body.classList.remove('light-mode')
      }
    }
  }
}
</script>

<style lang="scss">
.toggle {
  text-align: right;
  text-transform: uppercase;
  margin-bottom: 50px;
  padding-right: 25px;
}

.toggle button {
  margin: 0;
  padding: 0;
  outline: 0;
  cursor: pointer;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: none;
  margin-left: 10px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

@media (max-width: 700px) {
  .toggle {
    margin-bottom: 25px;
  }
}
</style>
