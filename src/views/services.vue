<template>
  <div class="services">
    <Header/>
    <Menu/>
    <div class="container">
      <div class="services__container">
        <div class="services__component">
          <div class="services__navigation__container">
            <router-link class="menu-item" to="/">Главная</router-link> 
            <span> / </span>
            <router-link class="menu-item" to="/services">Услуги</router-link>
          </div>
        </div>
        <Services/>
      </div>
    </div>
    <Trust/>
    <Partners/>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Menu from "../components/Menu";
import Services from "../components/Services";
import Trust from "../components/Trust";
import Partners from "../components/Partners";
import Footer from "../components/Footer";


export default {
  name: "services",
  components: {
    Header,
    Menu,
    Services,
    Trust,
    Partners,
    Footer
  }
};

</script>

<style scoped lang="scss">

.services {

  background-color: #fafafa;

  &__container {
    max-width: 1236px;
    padding-left: 100px;
    padding-top: 100px;

    @media screen and (max-width:1200px) { 
      padding-left: 0;
      padding-top: 50px;
    }

    .services__component {

      .services__navigation__container {
        font-size: 16px;
        line-height: 110%;
        letter-spacing: 0.03em;
        color: rgba(0, 0, 0, 0.25);
        margin-bottom: 22px;

        @media screen and (max-width:1200px) { 
          text-align: center;
        }

        .menu-item {
          color: rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
}
</style>