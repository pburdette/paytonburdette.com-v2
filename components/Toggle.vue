<template>
  <div class="toggle">
    <div v-if="mode === 'Dark'" class="toggle-group">
      <span>Light</span>
      <span @click="changeMode('Light')" class="light circle"></span>
    </div>
    <div v-else class="toggle-group">
      <span>Dark</span>
      <span @click="changeMode('Dark')" class="dark circle"></span>
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

.toggle .circle:before {
  content: ' \25CF';
  font-size: 22px;
}


.toggle .circle {
  padding-left: 5px;
  cursor: pointer;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

@media (max-width: 700px) {
  .toggle {
    margin-bottom: 25px;
  }
}
</style>
