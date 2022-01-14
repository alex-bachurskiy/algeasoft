<template>
    <Slide>
      <router-link class="menu-item" to="/">
        <span>главная</span>
      </router-link>
      <router-link class="menu-item" to="/services">
        <span>услуги</span>
      </router-link>
      <router-link class="menu-item" to="/technical-support">
        <span>поддержка</span>
      </router-link>
      <router-link class="menu-item" to="/cases">
        <span>бизнес-кейсы</span>
      </router-link>
      <router-link class="menu-item" to="/about">
        <span>о компании</span>
      </router-link>
      <router-link class="menu-item" to="/questions_and_answers">
        <span>вопрос-ответ</span>
      </router-link> 
      <router-link class="menu-item" to="/contacts">
        <span>контакты</span>
      </router-link>
    </Slide>
</template>

<script>
import { Slide } from 'vue-burger-menu';
 
export default {
  components: {
    Slide
  }
}
</script>

<style>

	.bm-burger-button {
		display: none;
    position: absolute;
    width: 36px;
		height: 30px;
		left: 20px;
		top: 36px;
		cursor: pointer;
  }

	@media screen and (max-width: 576px) {
		.bm-burger-button {
			display: block;
		}
	}
	
  .bm-burger-bars {
    	background-color: #219653;
  }
  
  .line-style {
		position: absolute;
		height: 20%;
		left: 0;
		right: 0;
  }

  .cross-style {
		position: absolute;
		top: 20px;
		right: 75px;
		cursor: pointer;
  }

  .bm-cross {
    background: #11964b;
  }
  
  .bm-cross-button {
		height: 24px;
		width: 24px;
  }

  .bm-menu {
		height: 100%; /* 100% Full-height */
		width: 0; /* 0 width - change this with JavaScript */
		position: fixed; /* Stay in place */
		z-index: 1000; /* Stay on top */
		top: 0;
		left: 0;
		background-color: rgb(53, 61, 54); /* Black*/
		overflow-x: hidden; /* Disable horizontal scroll */
		padding-top: 50px; /* Place content 60px from the top */
		transition: 0.3s; /*0.5 second transition effect to slide in the sidenav*/
  }
 
  .bm-overlay {
    background: rgba(0, 0, 0, 0);
  }

  .bm-item-list {
		color: #b8b7ad;
		margin-left: 15%;
		font-size: 20px;
  }

  .bm-item-list > * {
		display: flex;
		text-decoration: none;
		padding: 0.7em;
  }

  .bm-item-list > * > span {
		margin-left: 20px;
		font-weight: 700;
		text-transform: uppercase;
		color: #219653;
  }
</style>

