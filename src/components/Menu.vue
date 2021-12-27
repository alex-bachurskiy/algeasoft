<template>
<div class="menu">
  <div class="container">
    <div class="menu__container">
      <router-link class="menu-item" to="/" exact>главная</router-link>
      <router-link class="menu-item" to="/services">услуги</router-link>
      <router-link class="menu-item" to="/technical-support">поддержка</router-link>
      <router-link class="menu-item" to="/cases">бизнес-кейсы</router-link>
      <router-link class="menu-item" to="/about">о компании</router-link>
      <router-link class="menu-item" to="/questions_and_answers">вопрос-ответ</router-link> 
      <router-link class="menu-item" to="/contacts">контакты</router-link>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">

.menu {
  
  background: #333333;
  padding-top: 18px;
  padding-bottom: 16px;

  @media screen and (max-width:576px) { 
    display: none;
  }
   
  &__container {
    
    display: flex;
    justify-content: space-around;
    max-width: 1506px;
    margin: 0 auto;

    @media screen and (max-width:768px) { 
      padding: 0 50px;
    }

    a.router-link-active, li.router-link-active>a {
      display: block;
      font-weight: 700;
      color: #10ac84;
    }

    .menu-item {
      font-size: 14px;
      line-height: 16px;
      text-transform: uppercase;
      color: #219653;
      transition: all 2s ease-out;

      &:hover {
        color: #1dd1a1;
      }
      
      &:first-child {
        padding-left: 50px;

        @media screen and (max-width:1200px) { 
          padding-left: 0;
        }
      }

      &:last-child {
        padding-right: 50px;

        @media screen and (max-width:1200px) { 
          padding-right: 0;
        }
      }
    }
  }
}
</style>