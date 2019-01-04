<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Open Sans', sans-serif;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  p {
    color:#bbbbbb;
  }
  li {
    color: #dedede;
  }
  a {
    color: #46BCDE;
  }
}

.light-mode {
  background-color: #fff;
  color: #000;
  li {
    color: #464646;
  }
  li:hover {
    color: #000;
  }
  p {
    color: #000;
  }
  .group {
    input,
    textarea {
      background-color: #eee;
      color: #000;
    }
  }
}

.dark {
  color: #000;
}

p {
  font-weight: 400;
  line-height: 28px;
}

h1,
h2,
h3,
h4 {
  font-weight: 700;
  margin-top: 0;
}

h1 {
  font-size: 32px
}

h2 {
  font-size: 24px;
}

h3 {
  font-size: 18px
}

h4 {
  font-size: 16px
}

main {
  max-width: 1000px;
  margin: 50px auto 100px auto;
  padding: 0 25px;
}

.sidebar {
  grid-area: sidebar;
  padding: 15px;
}

.sidebar ul {
  margin: 0;
  padding: 0;
}

.sidebar li {
  list-style-type: none;
  margin-bottom: 15px;
}

.sidebar li:hover {
  cursor: pointer;
}

.layout {
  display: grid;
  grid-template-columns: minmax(50px, 1fr) 3fr;
  grid-template-rows: auto auto;
  grid-template-areas: 
    "sidebar content" 
    "sidebar content";
}

@media (max-width: 700px) {
  main {
    margin: 0 auto;
  }
  .layout {
    grid-template-areas: 
      "sidebar sidebar"
      "content content";
    justify-items: center;
    justify-content: center;
  }
  .sidebar ul {
    margin-bottom: 25px;
  }
  .sidebar li {
    display: inline;
    padding-right: 10px;
  }
  .sidebar li:last-of-type {
    padding-right: 0;
  }
  .content {
    grid-area: content;
  }
}

@media (max-width: 400px) {
  body {
    font-size: 14px;
  }
  .sidebar {
    padding: 0;
  }
}
</style>
