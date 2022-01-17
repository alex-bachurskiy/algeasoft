<template>
    <div class="customization">
        <Header/>
        <Menu/>
        <div class="banner">
            <div class="container">
                <div class="banner__container">
                    <div class="banner__navigation__container">
                        <router-link class="menu-item" to="/">Главная</router-link> 
                        <span> / </span>
                        <router-link class="menu-item" to="/sowtware_installation_and_configuration">
                            Установка и настройка ПО
                        </router-link>
                    </div>
                    <div class="banner__text">
                        <h2 class="banner__title">
                            Установка и настройка ПО
                        </h2>
                        <p class="banner__info">
                            Арендуйте программное обеспечение с регулярным обновлением до актуальных версий.
                        </p>
                    </div>
                    <Button/>
                    <div class="benefits__component">
                        <Benefits/>
                    </div>
                </div>
            </div>
        </div>
        <div class="sowtware_installation_and_configuration">
            <div class="container">
                <div class="sowtware__title__container">
                    <h2 class="sofware__title">
                        Установка и настройка ПО 
                    </h2>
                </div>
                <div class="sowtware__paragraph__container">
                    <p class="sowtware__paragraph__paragraph">
                        Арендуйте программное обеспечение с регулярным обновлением до актуальных версий.
                    </p>
                </div>
                <div class="feature_and_benefits__container">
                    <div class="feature_and_benefits__title__container">
                        <h2 class="feature_and_benefits__title">
                            ВОЗМОЖНОСТИ И ПРЕИМУЩЕСТВА
                        </h2>
                    </div>
                    <div class="feature_and_benefits__lists">
                        <div class="list">
                            <p class="list__paragraph">
                                <span>
                                    Посуточный биллинг.
                                </span>
                                Вы можете выбрать удобный способ оплаты в зависимости 
                                от сроков проекта и планируемой нагрузки.
                            </p>
                        </div>
                        <div class="list">
                            <p class="list__paragraph">
                                <span>
                                    Дата-центры.
                                </span>
                                У нас 6 собственных дата-центров уровня Tier III 
                            </p>
                        </div>
                        <div class="list">
                            <p class="list__paragraph">
                                <span>
                                    Единая инфраструктура.
                                </span>
                                Объединяйте выделенные серверы с виртуальными в единую инфраструктуру 
                                для решения сложных задач. 
                            </p>
                        </div>
                    </div>
                    <div class="feature_and_benefits__paragraph__container">
                        <p class="feature_and_benefits__paragraph">
                            Возможность делегировать текущее обслуживание, настройку, тестирование и 
                            восстановление работоспособности размещенного оборудования специалистам 
                            инженерно-технического отдела дата-центра. Услуга позволяет сэкономить время 
                            и человеческие ресурсы на обслуживание серверного оборудования. 
                            Предоставляется на условиях постоплаты.
                        </p>
                    </div>
                </div>
                <div class="delegation__container">
                    <div class="delegation__title__container">
                        <h2 class="delegation__title">
                            Делегируйте текущее обслуживание
                        </h2>
                    </div>
                    <div class="delegation__basic__container">
                        <div class="delegation__basic__title__container">
                            <h2 class="delegation__basic__title">
                                Базовый
                            </h2>
                        </div>
                        <div class="delegation__basic__named__container">
                            <h2 class="delegation__basic__named__title">
                                Наименование
                            </h2>
                        </div>
                        <div class="basic__container">
                            <div class="basic__information">
                                <div class="basic__named__container">
                                    <p class="basic__named__title">
                                        Монтаж или демонтаж оборудования в арендованную стойку
                                    </p>
                                </div>
                                <div class="basic__button__container">
                                    <router-link to="">Запросить цену</router-link>
                                </div>
                            </div>
                            <div class="basic__information">
                                <div class="basic__named__container">
                                    <p class="basic__named__title">
                                        Отчетность о физических условиях внутри дата-центра
                                    </p>
                                </div>
                                <div class="basic__button__container">
                                    <router-link to="">Запросить цену</router-link>
                                </div>
                            </div>
                            <div class="basic__information">
                                <div class="basic__named__container">
                                    <p class="basic__named__title">
                                        Технические консультации по услугам
                                    </p>
                                </div>
                                <div class="basic__button__container">
                                    <router-link to="">Запросить цену</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="delegation__standart__container">
                        <div class="delegation__standart__title__container">
                            <h2 class="delegation__standart__title">
                                Стандарт
                            </h2>
                        </div>
                        <div class="delegation__standart__named__container">
                            <h2 class="delegation__standart__named__title">
                                Наименование
                            </h2>
                        </div>
                        <div class="standart__container">
                            <div class="standart__information">
                                <div class="standart__named__container">
                                    <p class="standart__named__title">
                                        Консоль в серверном помещении
                                    </p>
                                </div>
                                <div class="standart__button__container">
                                    <router-link to="">Запросить цену</router-link>
                                </div>
                            </div>
                            <div class="standart__information">
                                <div class="standart__named__container">
                                    <p class="standart__named__title">
                                        Временное хранение оборудования
                                    </p>
                                </div>
                                <div class="standart__button__container">
                                    <router-link to="">Запросить цену</router-link>
                                </div>
                            </div>
                            <div class="standart__information">
                                <div class="standart__named__container">
                                    <p class="standart__named__title">
                                        Аренда ячейки для хранения комплектующих
                                    </p>
                                </div>
                                <div class="standart__button__container">
                                    <router-link to="">Запросить цену</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="delegation__button__container">
                        <router-link to="">Индивидуальный план</router-link>
                        <img src="@/assets/pictures/arrow-right.png">
                    </div>
                </div>
            </div>
        </div>
        <Trust/>
        <Partners/>
        <Dark/>
        <Footer/>
    </div>
</template>

<script>
import Header from "../components/Header";
import Menu from "../components/Menu";
import Button from "../components/Button";
import Benefits from "../components/Benefits";
import Partners from "../components/Partners";
import Trust from "../components/Trust";
import Dark from "../components/Dark";
import Footer from "../components/Footer";


export default {
    name: "sowtware_installation_and_configuration",
    components: {
        Header,
        Menu,
        Button,
        Benefits,
        Trust,
        Partners,
        Dark,
        Footer
    }
};
</script>


<style lang="scss">
.customization {

    .banner {
        background: linear-gradient(0deg, #000000, #000000);
        margin-bottom: 160px;

        @media screen and (max-width:576px) { 
            margin-bottom: 60px;
        }

        .container {
            @media screen and (max-width:1200px) { 
                 width: auto;
            }
        }

        .benefits__component {
            position: relative;
            top: 130px;

            @media screen and (max-width:1200px) { 
                top: 75px;
            }
            
            @media screen and (max-width:992px) { 
                top: 50px;
            }
        }

        &__container {
            background-image: url(../assets/pictures/service2_background.png);
            background-repeat: no-repeat;
            background-position: right;
            padding-top: 60px;
            padding-bottom: 100px;
            padding-left: 100px;
            margin: 0 auto;
            height: 568px;
            max-width: 1506px;

            @media screen and (max-width:1200px) { 
                padding-top: 50px;
                padding-bottom: 50px;
                padding-left: 50px;
                height: 565px;
            }

            @media screen and (max-width:992px) { 
                background-position-y: center;
            }

            @media screen and (max-width:768px) { 
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-left: 0;
            }

            @media screen and (max-width:576px) { 
                height: auto;
            }

            .banner__navigation__container {

                color: rgba(255, 255, 255, 0.25);
                margin-bottom: 22px;

                .menu-item {
                    font-weight: 400;
                    color: rgba(255, 255, 255, 0.25);
                    font-size: 16px;
                    line-height: 110%;
                    letter-spacing: 0.03em;
                }
            }

            .banner__text {
                
                margin-bottom: 60px;

                    @media screen and (max-width:1200px) { 
                        max-width: 470px;
                    }

                @media screen and (max-width:768px) { 
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .banner__title {
                    font-weight: 500;
                    font-size: 44px;
                    line-height: 130%;
                    color: #219653;
                    margin-bottom: 10px;
                }

                .banner__info {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 130%;
                    letter-spacing: 0.03em;
                    color: #FFFFFF;
                    max-width: 390px;

                    @media screen and (max-width:556px) { 
                        padding: 0 15px;
                    }
                }
            }
        }
    }

    .sowtware_installation_and_configuration {

        padding-left: 100px;
        padding-right: 90px;
        padding-bottom: 69px;
        margin: 0 auto;
        max-width: 1420px;

        @media screen and (max-width:1200px) { 
            padding-top: 50px;
        }

        @media screen and (max-width:556px) { 
            padding-left: 20px;
            padding-right: 20px;
        }

        .container {
            @media screen and (max-width:1200px) { 
                width: auto;
            }
        }

        .sowtware__title__container {

            background: #219653;
            border-radius: 5px;
            margin-bottom: 10px;

            @media screen and (max-width:768px) { 
                text-align: center;
            }

            .sofware__title {
                margin-left: 20px;
                padding-top: 10px;
                padding-bottom: 10px;
                font-weight: 500;
                font-size: 45px;
                line-height: 53px;
                color: #FFFFFF;

                @media screen and (max-width:556px) { 
                    margin-left: 0;;
                }
            }
        }

        .sowtware__paragraph__container {

            width: 435px;
            margin-bottom: 70px;

            @media screen and (max-width:768px) { 
                text-align: center;
                width: auto;
            }

            .sowtware__paragraph__paragraph {
                font-size: 16px;
                line-height: 130%;
                letter-spacing: 0.03em;
                color: #333333;
            }
        }

        .feature_and_benefits__container {

            display: flex;
            flex-direction: column;

            .feature_and_benefits__title {
                text-align: center;
                font-weight: 500;
                font-size: 18px;
                line-height: 110%;
                letter-spacing: 0.03em;
                color: #219653;
                margin-bottom: 36px;
            }
        }

        .feature_and_benefits__lists {

            display: flex;
            margin-bottom: 60px;
            
            @media screen and (max-width:992px) { 
                flex-direction: column;
            }

            .list {

                display: flex;
                color: #333333;
                font-size: 18px;
                line-height: 110%;
                letter-spacing: 0.03em;
                margin-right: 15px;
                max-width: 415px;
                
                @media screen and (max-width:556px) { 
                    margin-right: 0;
                    margin-bottom: 15px;
                }

                &:nth-child(2) {
                    max-width: 285px;
                }

                &:last-of-type {
                    margin-right: 0;
                    max-width: 440px;

                    @media screen and (max-width:556px) { 
                        margin-bottom: 0;
                    }
                }

                &::before {
                    content: url(../assets/pictures/check.png);
                    margin-right: 15px;
                }

               .list__paragraph {
                   display: flex;
                   flex-direction: column;

                   span {
                        font-weight: 500;
                    }
                }
            }
        }

        .feature_and_benefits__paragraph__container {

            .feature_and_benefits__paragraph {
                font-size: 16px;
                line-height: 130%;
                letter-spacing: 0.03em;
                color: #333333;

                @media screen and (max-width:556px) { 
                    text-align: center;
                }
            }
        }

        .delegation__container {

            margin-top: 84px;
            
            .delegation__title__container {

                margin-bottom: 30px;

                .delegation__title {
                    font-weight: 900;
                    font-size: 22px;
                    line-height: 26px;
                    text-align: center;
                    color: #333333;
                }
            }

            .delegation__basic__container {

                .delegation__basic__title__container {
                    background: rgba(33, 150, 83, 0.5);
                    border-radius: 3px;
                    padding: 5px 0 5px 10px;

                    .delegation__basic__title {

                        font-weight: 500;
                        font-size: 18px;
                        line-height: 110%;
                        letter-spacing: 0.03em;
                        color: #FFFFFF;
                    }
                }

                .delegation__basic__named__container {
                    padding-left: 10px;
                    padding-top: 10px;
                    padding-bottom: 15px;
                    .delegation__basic__named__title {
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 19px;
                        color: #333333;
                    }
                }

                .basic__container {
                    
                    .basic__information {

                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 10px;

                        &:nth-of-type(1) {
                            .basic__named__container {
                                background: #219653;
                                .basic__named__title {
                                    color: #FFFFFF;
                                }
                            }

                            .basic__button__container {
                                background: #219653;
                                a {
                                    color: #FFFFFF;
                                }
                            }
                        }

                        &:nth-of-type(3) {
                            .basic__named__container {
                                background: rgba(33, 150, 83, 0.05);
                                margin-bottom: 0;
                            }
                        }

                        .basic__named__container {
                            border-radius: 5px;
                            padding: 14px 0 8px 10px;
                            width: 1069px;

                            @media screen and (max-width:1200px) { 
                                max-width: 665px;
                            }

                            @media screen and (max-width:992px) { 
                                max-width: 460px;
                            }

                            @media screen and (max-width:768px) { 
                                max-width: 407px;
                            }

                            
                            @media screen and (max-width:556px) { 
                                padding-right: 10px;
                            }

                            .basic__named__title {
                                font-size: 16px;
                                line-height: 130%;
                                letter-spacing: 0.03em;

                                @media screen and (max-width:992px) { 
                                    font-size: 12px;
                                }
                            }
                        }

                        .basic__button__container {
                            display: flex;
                            justify-content: center;
                            padding: 11px 0;
                            border: 2px solid #219653;
                            filter: drop-shadow(0px 4px 30px rgba(51, 51, 51, 0.1));
                            backdrop-filter: blur(10px);
                            margin-left: 10px;
                            border-radius: 5px;
                            max-width: 161px;

                            @media screen and (max-width:1200px) { 
                                padding-right: 15px;
                                padding-left: 15px;
                            }

                            @media screen and (max-width:556px) { 
                                align-items: center;
                                padding: 11px 10px;
                            }

                            a {
                                font-weight: 500;
                                font-size: 14px;
                                line-height: 16px;
                                color: #219653;
                            }
                        }

                    }
                   
                }
            }

            .delegation__standart__container {

                margin-top: 30px;
                
                .delegation__standart__title__container {
                    background: rgba(33, 150, 83, 0.5);
                    border-radius: 3px;
                    padding: 5px 0 5px 10px;

                    .delegation__standart__title {

                        font-weight: 500;
                        font-size: 18px;
                        line-height: 110%;
                        letter-spacing: 0.03em;
                        color: #FFFFFF;
                    }
                }

                .delegation__standart__named__container {
                    padding-left: 10px;
                    padding-top: 10px;
                    padding-bottom: 15px;
                    .delegation__standart__named__title {
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 19px;
                        color: #333333;
                    }
                }

                .standart__container {
                    
                    .standart__information {

                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 10px;

                        &:nth-of-type(1) {
                            .standart__named__container {
                                background: #219653;
                                .standart__named__title {
                                    color: #FFFFFF;
                                }
                            }

                            .standart__button__container {
                                background: #219653;
                                a {
                                    color: #FFFFFF;
                                }
                            }
                        }

                        &:nth-of-type(3) {
                            .standart__named__container {
                                background: rgba(33, 150, 83, 0.05);
                                margin-bottom: 0;
                            }
                        }

                        .standart__named__container {
                            border-radius: 5px;
                            padding: 14px 0 8px 10px;
                            width: 1069px;

                            @media screen and (max-width:1200px) { 
                                max-width: 665px;
                            }

                            @media screen and (max-width:992px) { 
                                max-width: 460px;
                            }

                            @media screen and (max-width:768px) { 
                                max-width: 407px;
                            }

                            @media screen and (max-width:556px) { 
                                padding-right: 10px;
                            }

                            .standart__named__title {

                                font-size: 16px;
                                line-height: 130%;
                                letter-spacing: 0.03em;

                                
                                @media screen and (max-width:992px) { 
                                    font-size: 12px;
                                }
                            }
                        }

                        .standart__button__container {
                            display: flex;
                            justify-content: center;
                            padding: 11px 0;
                            border: 2px solid #219653;
                            filter: drop-shadow(0px 4px 30px rgba(51, 51, 51, 0.1));
                            backdrop-filter: blur(10px);
                            margin-left: 10px;
                            border-radius: 5px;
                            max-width: 161px;

                            @media screen and (max-width:1200px) { 
                                padding-right: 15px;
                                padding-left: 15px;
                            }

                            @media screen and (max-width:556px) { 
                                align-items: center;
                                padding: 5px 10px;
                            }

                            a {
                                font-weight: 500;
                                font-size: 14px;
                                line-height: 16px;
                                color: #219653;
                            }
                        }

                    }
                   
                }
            }

            .delegation__button__container {

                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 69px;
                a {
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                    color: #219653;
                    margin-right: 18px;
                }
            }
        }
    }
}

</style>