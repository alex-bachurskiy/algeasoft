<template>
    <div class="header">
        <div class="container">
            <div class="header__container">
                <BurgerMenu/>
                <div class="header__logo__container">
                    <img src="@/assets/pictures/logo__header.png" alt="Algeasoft">
                </div>
                <div class="header__contact__container">
                    <div class="header__contact__link">
                        <img src="@/assets/pictures/mail.png" alt="mail" class="ico">
                        <a href="mailto: INFO@GMAIL.COM" class="email">INFO@GMAIL.COM</a>
                    </div>
                    <div class="header__contact__phone">
                        <img src="@/assets/pictures/phone.png" alt="phone" class="ico">
                        <a href="tel:+38 (000)000 00 00" class="tel">+38 (000)000 00 00</a>
                    </div>
                </div>
                <div class="header__button" @click="showPopup(true)"> Заказать звонок </div>
                <transition name="fade">
                    <modal-window v-if="isPopup" @showPopup="showPopup"></modal-window>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import BurgerMenu from "../components/Burger";
import ModalWindow from "../components/Call";

export default {
    name: "header",
    components: {
        BurgerMenu,
        ModalWindow
    },
    data () {
        return {
            isPopup: false
        };
    },
    methods: {
        showPopup (event) {
            this.isPopup = event;
        }
    }
};
</script>

<style scoped lang="scss">

.header {

    height: 100px;
    display: flex;
    align-items: center;
    background: #FFFFFF;

    @media screen and (max-width:576px) { 
      height: 250px;
      margin: 15px;
    }

    &__container {

        align-items: center;
        display: flex;
        justify-content: space-between;
        max-width: 1349px;

        @media screen and (max-width:992px) { 
            align-items: flex-start;
        }

        @media screen and (max-width:768px) { 
            padding: 0 50px;
        }

        @media screen and (max-width:576px) { 
            flex-wrap: wrap;
            justify-content: center;
            padding: 0;
        }

        .header__logo__container {
            margin-right: 388px;

            @media screen and (max-width:1200px) { 
                margin-right: 0;
            }

            @media screen and (max-width:992px) { 
                margin-right: 15px;
            }

            @media screen and (max-width:576px) { 
                margin-right: 0;
            }
        }

        .header__logo__container {

            img {
                @media screen and (max-width:992px) { 
                    width: 100%;
                }
            }
        }

        .header__contact__container {
            display: flex;
            height: 30px;
            margin-right: 60px;
            width: max-content;

            @media screen and (max-width:992px) { 
                margin-right: 0;
                flex-wrap: wrap;
                width: 30%;
            }

            @media screen and (max-width:576px) { 
                height: auto;
                width: auto;
                justify-content: center;
                flex-direction: column;
                margin-bottom: 25px;
                margin-top: 25px;
            }

            .header__contact__link {
                display: flex;
                align-items: center;
                margin-right: 60px;

                @media screen and (max-width:992px) { 
                    margin-right: 0;
                }

                @media screen and (max-width:576px) { 
                    margin-bottom: 10px;
                }
            }

            .header__contact__link,
            .header__contact__phone {
                display: flex;
                align-items: center;

                a {
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 19px;
                    letter-spacing: 0.03em;
                    color: #333333;
                    margin-left: 10px;
                }
            }
        }

        .header__button {
            display: flex;
            justify-content: center;
            background: transparent;
            align-items: center;
            border: 2px solid #219653;
            filter: drop-shadow(0px 4px 30px rgba(51, 51, 51, 0.1));
            backdrop-filter: blur(10px);
            border-radius: 5px;
            transition: all 2s ease-out;
            height: 46px;
            width: 190px;

            @media screen and (max-width:992px) { 
                margin-top: 10px;
            }

            &:hover {
                background: #f5f6fa;
                border-color: #44bd32;
            }

            a {
                font-weight: 600;
                font-size: 16px;
                line-height: 19px;
                color: #219653;
                transition: all 2s ease-out;

                &:hover {
                    color: #44bd32;
                }
            }
        }
    }
}
</style>