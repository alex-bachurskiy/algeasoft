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

<style scoped lang="scss">

.bm-burger-button {
	position: fixed;
	width: 36px;
	height: 35px;
	left: 15px;
	top: 22px;
	cursor: pointer;
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
	top: 12px;
	right: 2px;
	cursor: pointer;
}

.bm-cross {
	background: #219653;
}

.bm-cross-button {
	height: 24px;
	width: 24px;
}

.bm-menu {
	height: 100%;
	width: 0;
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	background-color: rgb(63, 63, 65);
	overflow-x: hidden;
	padding-top: 60px;
	transition: 0.5s;
}

.bm-item-list {
	color: #b8b7ad;
	margin-left: 10%;
	font-size: 20px;
	& > * {
		display: flex;
		text-decoration: none;
		padding: 0.7em;
		& > span {
			margin-left: 10px;
			font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      text-transform: uppercase;
			color: #219653;
		}
	}
}

</style>