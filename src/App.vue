<template>
    <div id="app">
        <!--        <img alt="Vue logo" src="./assets/logo.png">-->
        <Header />
        <Index/>
        <Footer />
    </div>
</template>

<script>
  import Header from './components/header.vue'
  import Footer from './components/footer.vue'
  // import Portfolio from './components/portfolio.vue'
  // import Link from './components/link.vue'
  // import Contacts from './components/contacts.vue'
  import Index from './components/index.vue'

  export default {
    name: 'App',
    components: {
      'Header': Header,
      'Footer': Footer,
      // 'Portfolio': Portfolio,
      // 'Link': Link,
      // 'Contacts': Contacts
      'Index': Index
    }
  }
</script>

<style>
    #app {
        /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
        /*-webkit-font-smoothing: antialiased;*/
        /*-moz-osx-font-smoothing: grayscale;*/
        /*text-align: center;*/
        /*color: #2c3e50;*/
        /*margin-top: 60px;*/
    }
</style>
