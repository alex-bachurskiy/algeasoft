<template>
    <div class="contacts">
        <Header/>
        <Menu/>
        <div class="container">
            <div class="contacts__container">
                <div class="contacts__navigation__container">
                    <router-link class="menu-item" to="/">Главная</router-link> 
                    <span> / </span>
                    <router-link class="menu-item" to="/contacts">Контакты</router-link>
                </div>
                <div class="contacts__title__container">
                    <h2 class="contacts__title">
                        Контакты
                    </h2>
                </div>
                <div class="contacts__main__container">
                    <div class="contacts__main">
                        <div class="connection">
                            <h2 class="connection__title">
                                Связь с менеджером 
                            </h2>
                            <div class="contact__phone">
                                <img src="@/assets/pictures/phone.png" alt="phone" class="ico">
                                <a href="tel:+38 (000)000 00 00" class="tel">+38 (000)000 00 00</a>
                            </div>
                            <div class="contact__link">
                                <img src="@/assets/pictures/mail.png" alt="mail" class="ico">
                                <a href="mailto: our_mail@gmail.com" class="email">our_mail@gmail.com.com</a>
                            </div>
                        </div>
                        <div class="nerwork">
                            <h2 class="nerwork__title">
                                Мы в социальных сетях
                            </h2>
                            <div class="nerwork__phone">
                                <img src="@/assets/pictures/whats_app.png" alt="whats_app" class="ico">
                                <a href="#" class="tel">+38 (000)000 00 00</a>
                            </div>
                            <div class="nerwork__link">
                                <img src="@/assets/pictures/telega.png" alt="telega" class="ico">
                                <a href="#" class="email">our_mail@gamail.com</a>
                            </div>
                        </div>
                    </div>
                    <div class="contacts__main__information">
                        <h2 class="contacts__main__information__title">
                            Индивидуальный предприниматель Иванов Иван Иванович
                        </h2>
                        <p class="contacts__main__information__paragraph">
                            Банк получателя: АО "СБЕРБАНК"
                        </p>
                        <p class="contacts__main__information__paragraph">
                            МФО: 111111
                        </p>
                        <p class="contacts__main__information__paragraph">
                            ЕГРПОУ: 11111111
                        </p>
                        <p class="contacts__main__information__paragraph">
                            IBAN: UA NN ХХХХХХ 00000 ХХХХХХХХХХХХХХ
                        </p>
                        <p class="contacts__main__information__paragraph">
                            Счет получателя: 11111111111111
                        </p>
                        <p class="contacts__main__information__paragraph">
                            РНУКПН получателя: 1111111111
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";


export default {
  name: "contacts",
  components: {
    Header,
    Menu,
    Footer
  }
};
</script>

<style scoped lang="scss">

.contacts {

    &__container {
        
        margin: 100px 0 129px 100px;

        @media screen and (max-width: 1200px) {
            margin-left: 20px;
        }

        @media screen and (max-width:576px) {
            margin-top: 50px;
            margin-right: 0;
            margin-left: 0;
        }

        .contacts__navigation__container {
            font-size: 16px;
            line-height: 110%;
            letter-spacing: 0.03em;
            color: rgba(0, 0, 0, 0.25);
            margin-bottom: 12px;

            .menu-item {
                color: rgba(0, 0, 0, 0.25);
            }

            @media screen and (max-width:576px) { 
                text-align: center;
            }
        }

        .contacts__title__container {
            margin-bottom: 40px;
            .contacts__title {
                font-weight: 500;
                font-size: 44px;
                line-height: 130%;
                color: #219653;

                @media screen and (max-width:576px) { 
                    text-align: center;
                }
            }
        }

        .contacts__main__container {

            display: flex;

            @media screen and (max-width:576px) { 
                flex-wrap: wrap;
                justify-content: center;
                text-align: center;
            }

            .connection {
                margin-bottom: 25px;
            }
            
            .connection__title,
            .nerwork__title {
                font-weight: 900;
                font-size: 22px;
                line-height: 26px;
                color: #333333;
                margin-bottom: 30px;
            }

            .contact__phone,
            .contact__link,
            .nerwork__phone,
            .nerwork__link {

                display: flex;
                align-items: center;
                font-weight: 500;
                font-size: 18px;
                line-height: 110%;
                letter-spacing: 0.03em;
                color: #333333;
                margin-bottom: 25px; 

                &.contact__link,
                &.nerwork__link {
                    margin-bottom: 0;
                }

                .tel,
                .email {
                    color: #333333;
                    margin-left: 20px;
                }
            }

            .contacts__main__information {
                color: #333333;
                width: 384px;
                margin-left: 267px;

                @media screen and (max-width: 992px) {
                    margin-left: 70px;
                }

                @media screen and (max-width:768px) { 
                    margin-left: 80px;
                }

                @media screen and (max-width:576px) { 
                    margin-top: 40px;
                    margin-left: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                }

                .contacts__main__information__title {
                    font-weight: 900;
                    font-size: 22px;
                    line-height: 26px;
                    margin-bottom: 12px;
                }

                .contacts__main__information__paragraph {

                    margin-bottom: 19px;

                    &:last-of-type {
                        margin-bottom: 0;
                    }
                }
            }

        }
    }
}
</style>