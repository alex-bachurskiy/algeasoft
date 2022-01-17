<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
  body {
    background: #E5E5E5;

    @media screen and (max-width:576px) { 
      background: #e5e5e583;
    }
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  .btn__style {
    border-radius: 4px;
  }

  .color-btn__style a {
    color: #FFFFFF;
  }

  :hover, :active, :focus {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    outline: none;
  }

  input {
    outline:none;
  }

  ul,
  ol {
    padding: 0;
    list-style: none;
  }

  body, h1, h2, h3, h4, h5, h6,
  p, ul, ol, li, figure, figcaption,
  blockquote, dl, dd {
    margin: 0;
  }

  .container {

    margin: 0 auto;
    width: auto;

    @media screen and (max-width:1200px) { 
      width: 960px;
    }

    @media screen and (max-width:992px) { 
      width: 720px;
    }

    @media screen and (max-width:768px) { 
      width: auto;
    }

    @media screen and (max-width:576px) { 
      width: 90%;
    }
  }

</style>
