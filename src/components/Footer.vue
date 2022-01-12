<template>
    <div class="footer">
        <div class="container">
            <div class="footer__container">
               <div class="footer__logo__container">
                   <img src="@/assets/pictures/logo.png" alt="logo">
               </div>
               <div class="footer__menu__container">
                   <div class="footer__menu">
                        <router-link class="menu-item" to="/">главная</router-link>
                        <router-link class="menu-item" to="/services">услуги</router-link>
                        <router-link class="menu-item" to="/technical-support">поддержка</router-link>
                        <router-link class="menu-item" to="/cases">бизнес-кейсы</router-link>
                   </div>
                   <div class="footer__menu">
                        <router-link class="menu-item" to="/about">о компании</router-link>
                        <router-link class="menu-item" to="/questions_and_answers">вопрос-ответ</router-link> 
                        <router-link class="menu-item" to="/contacts">контакты</router-link>
                   </div>
               </div>
               <div class="footer__contact__container">
                    <div class="footer__contact__link">
                        <img src="@/assets/pictures/mail__footer.png" alt="mail" class="ico">
                        <a href="mailto: INFO@GMAIL.COM" class="email">INFO@GMAIL.COM</a>
                    </div>
                    <div class="footer__contact__phone">
                        <img src="@/assets/pictures/phone__footer.png" alt="phone" class="ico">
                        <a href="tel:+38 (000)000 00 00" class="tel">+38 (000)000 00 00</a>
                    </div>
                    <div class="footer__button">
                        <router-link to="/technical-support">
                            Заказать звонок
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.footer {

    background: #000000;

    &__container {

        display: flex;
        justify-content: space-between;
        max-width: 1506px;
        margin: 0 auto;
        padding-top: 40px;
        padding-bottom: 60px;
        padding-left: 60px;
        padding-right: 65px;

        @media screen and (max-width:1200px) { 
            padding: 50px;
        }

        @media screen and (max-width:576px) { 
            flex-direction: column;
            align-items: center;
        }

        .footer__menu__container {

            display: flex;

            @media screen and (max-width:992px) { 
                flex-direction: column;
            }

            
            @media screen and (max-width:576px) { 
                text-align: center;
                margin: 20px 0;
            }

            .footer__menu {

                display: flex;
                flex-direction: column;

                .menu-item {
                    font-size: 14px;
                    line-height: 16px;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                    color: #F2F2F2;
                    cursor: pointer;

                    &:last-child {
                        margin-bottom: 0;
                    }
                }

                &:nth-child(1) {
                    margin-right: 103px;
                    width: 107px;

                    @media screen and (max-width:992px) { 
                        margin-right: 0;
                        margin-bottom: 20px;
                    }
                }
            }
        }

        .footer__contact__container {

            display: flex;
            flex-direction: column;

            .footer__contact__link {
                display: flex;
                align-items: center;
                order: 3;

                .email {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    letter-spacing: 0.03em;
                    margin-left: 12px;
                    color: #F2F2F2;
                }
            }
            
            .footer__contact__phone {
                display: flex;
                align-items: center;
                order: 2;
                margin-bottom: 24px;

                .tel {
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                    letter-spacing: 0.03em;
                    margin-left: 7px;
                    color: #F2F2F2;
                }
            }

            .footer__button {

                width: 190px;
                height: 46px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 2px solid #219653;
                transition: all 2s ease-out;
                box-sizing: border-box;
                filter: drop-shadow(0px 4px 30px rgba(51, 51, 51, 0.1));
                backdrop-filter: blur(10px);
                border-radius: 5px;
                margin-bottom: 57px;

                
                @media screen and (max-width:1200px) { 
                    margin-bottom: 30px;
                }

                &:hover {
                    border-color: #44bd32;
                }

                a {
                    font-weight: 500;
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
}
</style>