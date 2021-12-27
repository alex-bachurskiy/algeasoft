<template>
    <div class="server">
        <Header/>
        <Menu/>
        <div class="banner">
            <div class="container">
                <div class="banner__container">
                    <div class="banner__navigation__container">
                        <router-link class="menu-item" to="/">Главная</router-link> 
                        <span> / </span>
                        <router-link class="menu-item" to="/server_placement">
                            Размещение сервера
                        </router-link>
                    </div>
                    <div class="banner__text">
                        <h2 class="banner__title">
                            Размещение сервера
                        </h2>
                        <p class="banner__info">
                            Расположите свое серверное оборудование в современных дата-центрах.
                            Мы создадим все условия: канал связи с высокой пропускной способностью, 
                            бесперебойное питание и микроклимат.
                        </p>
                    </div>
                    <Button/>
                    <div class="benefits__component">
                        <Benefits/>
                    </div>
                </div>
            </div>
        </div>
        <div class="server_placement">
            <div class="container">
                <div class="server_placement__title__container">
                    <h2 class="server_placement__title">
                        Ваш сервер в дата-центре 
                    </h2>
                </div>
                <div class="server_placement__paragraph__container">
                    <p class="server_placement__paragraph__paragraph">
                        Аренда юнитов в современных дата-центрах
                    </p>
                </div>
                <div class="feature_and_benefits__container">
                    <div class="feature_and_benefits__title__container">
                        <h2 class="feature_and_benefits__title">
                            Решите свои задачи
                        </h2>
                    </div>
                    <div class="feature_and_benefits__lists">
                        <div class="list">
                            <p class="list__paragraph">
                                <span>
                                    Контроль над оборудованием
                                </span>
                                Установим ваш сервер в стойку, будем контролировать уровень охлаждения 
                                и температурный режим и проведем диагностику 
                                оборудования по вашему запросу.
                            </p>
                        </div>
                        <div class="list">
                            <p class="list__paragraph">
                                <span>
                                    Надежность и безопасность
                                </span>
                                Более 100 камер видеонаблюдения следят за территорией вокруг здания и его 
                                помещениями. Доступ к оборудованию имеют только инженеры дата-центра. 
                                На серверы подается бесперебойное питание по схеме N+1.
                            </p>
                        </div>
                        <div class="list">
                            <p class="list__paragraph">
                                <span>
                                    Нестандартные размеры серверов
                                </span>
                                Разместим любое оборудование, в том числе серверы в корпусах tower и 
                                майнинговые фермы. Стоимость размещения серверов рассчитывается 
                                индивидуально. 
                            </p>
                        </div>
                    </div>
                    <div class="feature_and_benefits__paragraph__container">
                        <p class="feature_and_benefits__paragraph">
                            Расположите свое серверное оборудование в современных дата-центрах  уровня 
                            Tier III. Мы создадим все условия: канал связи с высокой пропускной 
                            способностью, бесперебойное питание и микроклимат.
                        </p>
                    </div>
                </div>
                <div class="available_configuration__container">
                    <div class="available_configuration__title__container">
                        <h2 class="available_configuration__title">
                            Доступные конфигурации с Intel® Xeon® Gold 5 и 6-ой серии
                        </h2>
                    </div>
                    <div class="basic_configuration__container">
                        <div class="basic_configuration__title__container">
                            <div class="basic_configuration__title">
                                Базовый
                            </div>
                        </div>
                        <div class="basic__container">
                            <div class="basic__information__container">
                                <p class="basic__information__title">
                                    Наименование
                                </p>
                                <p class="basic__information__title">
                                    vCPU
                                </p>
                                <p class="basic__information__title">
                                    ОЗУ, МБ
                                </p>
                                <p class="basic__information__title">
                                    Диск, ГБ
                                </p>
                            </div>
                            <div class="basic__information__container">
                                <div class="basic__information">
                                    <p class="basic__information__paragraph">
                                        cpu.2.2.10
                                    </p>
                                    <p class="basic__information__paragraph">
                                        2
                                    </p>
                                    <p class="basic__information__paragraph">
                                        2048
                                    </p>
                                    <p class="basic__information__paragraph">
                                        10
                                    </p>
                                </div>
                                <div class="basic__button__container">
                                    <router-link to="">Запросить цену</router-link>
                                </div>
                            </div>
                            <div class="basic__information__container">
                                <div class="basic__information">
                                    <p class="basic__information__paragraph">
                                        cpu.2.2.10
                                    </p>
                                    <p class="basic__information__paragraph">
                                        2
                                    </p>
                                    <p class="basic__information__paragraph">
                                        2048
                                    </p>
                                    <p class="basic__information__paragraph">
                                        10
                                    </p>
                                </div>
                                <div class="basic__button__container">
                                    <router-link to="">Запросить цену</router-link>
                                </div>
                            </div>
                            <div class="basic__information__container">
                                <div class="basic__information">
                                    <p class="basic__information__paragraph">
                                        cpu.2.2.10
                                    </p>
                                    <p class="basic__information__paragraph">
                                        2
                                    </p>
                                    <p class="basic__information__paragraph">
                                        2048
                                    </p>
                                    <p class="basic__information__paragraph">
                                        10
                                    </p>
                                </div>
                                <div class="basic__button__container">
                                    <router-link to="">Запросить цену</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="master_configuration__container">
                        <div class="master_configuration__title__container">
                            <div class="master_configuration__title">
                                Мастер
                            </div>
                        </div>
                        <div class="master__container">
                            <div class="master__information__container">
                                <p class="master__information__title">
                                    Наименование
                                </p>
                                <p class="master__information__title">
                                    vCPU
                                </p>
                                <p class="master__information__title">
                                    ОЗУ, МБ
                                </p>
                                <p class="master__information__title">
                                    Диск, ГБ
                                </p>
                            </div>
                            <div class="master__information__container">
                                <div class="master__information">
                                    <p class="master__information__paragraph">
                                        cpu.2.2.10
                                    </p>
                                    <p class="master__information__paragraph">
                                        2
                                    </p>
                                    <p class="master__information__paragraph">
                                        2048
                                    </p>
                                    <p class="master__information__paragraph">
                                        10
                                    </p>
                                </div>
                                <div class="master__button__container">
                                    <router-link to="">Запросить цену</router-link>
                                </div>
                            </div>
                            <div class="master__information__container">
                                <div class="master__information">
                                    <p class="master__information__paragraph">
                                        cpu.2.2.10
                                    </p>
                                    <p class="master__information__paragraph">
                                        2
                                    </p>
                                    <p class="master__information__paragraph">
                                        2048
                                    </p>
                                    <p class="master__information__paragraph">
                                        10
                                    </p>
                                </div>
                                <div class="master__button__container">
                                    <router-link to="">Запросить цену</router-link>
                                </div>
                            </div>
                            <div class="master__information__container">
                                <div class="master__information">
                                    <p class="master__information__paragraph">
                                        cpu.2.2.10
                                    </p>
                                    <p class="master__information__paragraph">
                                        2
                                    </p>
                                    <p class="master__information__paragraph">
                                        2048
                                    </p>
                                    <p class="master__information__paragraph">
                                        10
                                    </p>
                                </div>
                                <div class="master__button__container">
                                    <router-link to="">Запросить цену</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="available_configuration__btn">
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
import Trust from "../components/Trust";
import Partners from "../components/Partners";
import Dark from "../components/Dark";
import Footer from "../components/Footer";

export default {
    name: "server_placement",
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

<style lang="scss" scoped>
.server {

    .banner {
        background: linear-gradient(0deg, #000000, #000000);
        margin-bottom: 160px;

        .benefits__component {
            position: relative;
            top: 87px;
        }

        &__container {
            background-image: url(../assets/pictures/service6__background.png);
            background-repeat: no-repeat;
            background-position: right;
            background-position-y: top;
            padding-top: 60px;
            padding-bottom: 100px;
            padding-left: 100px;
            margin: 0 auto;
            height: 544px;
            max-width: 1506px;

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
                    width: 446px;
                }
            }
        }
    }

    .server_placement {

        padding-left: 100px;
        padding-right: 90px;
        padding-bottom: 69px;
        margin: 0 auto;
        max-width: 1420px;
        .server_placement__title__container {

            background: #219653;
            border-radius: 5px;
            margin-bottom: 10px;

            .server_placement__title {
                
                margin-left: 20px;
                padding-top: 10px;
                padding-bottom: 10px;
                font-weight: 500;
                font-size: 45px;
                line-height: 53px;
                color: #FFFFFF;
            }
        }

        .server_placement__paragraph__container {

            width: 435px;
            margin-bottom: 70px;
            .server_placement__paragraph__paragraph {

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
                font-weight: 900;
                font-size: 22px;
                line-height: 26px;
                color: #219653;
                margin-bottom: 36px;
            }
        }

        .feature_and_benefits__lists {

            display: flex;
            margin-bottom: 60px;

            .list {

                display: flex;
                color: #333333;
                font-size: 18px;
                line-height: 110%;
                letter-spacing: 0.03em;
                margin-right: 15px;
                max-width: 400px;
                

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

            width: 727px;
            .feature_and_benefits__paragraph {
                font-size: 16px;
                line-height: 130%;
                letter-spacing: 0.03em;
                color: #333333;
            }
        }
    }

    .available_configuration__container {
        margin-top: 70px;

        .available_configuration__title__container {
            display: flex;
            flex-direction: column;

            .available_configuration__title {
                text-align: center;
                font-weight: 900;
                font-size: 22px;
                line-height: 26px;
                color: #333333;
            }
        }

        .basic_configuration__container,
        .master_configuration__container {
            margin-top: 30px;
            margin-bottom: 51px;

            .basic_configuration__title__container,
            .master_configuration__title__container {
                background: rgba(33, 150, 83, 0.5);
                border-radius: 3px;
                padding: 5px 0 5px 10px;

                .basic_configuration__title,
                .master_configuration__title {
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 110%;
                    letter-spacing: 0.03em;
                    color: #FFFFFF;
                }
            }

            .basic__information__container,
            .master__information__container {
                display: flex;
                margin: 10px 0;

                &:nth-child(2) {
                    .basic__button__container,
                    .master__button__container {
                        background: #219653; 
                        a {
                            color: #FFFFFF;
                        }
                    }

                    .basic__information,
                    .master__information {
                        background: #219653;
                        color: #FFFFFF;
                        border-radius: 5px;
                    }
                }

                &:last-child {
                    margin-bottom: 0;
                    .basic__information,
                    .master__information {
                        background: rgba(33, 150, 83, 0.05);
                        border-radius: 5px;
                    }
                }

                .basic__information,
                .master__information {
                    display: flex;
                    color: #333333;
                    padding-top: 13px;
                    width: 1069px;

                }
                
                .basic__information__title,
                .master__information__title {
                    margin-right: 217px;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;

                    &:first-child {
                        margin-left: 10px;
                    }

                    &:last-child {

                        margin-right: 50px;
                    }
                }

                .basic__information__paragraph,
                .master__information__paragraph {

                    &:first-child {
                        margin-left: 26px;
                        margin-right: 260px;
                    }

                    &:nth-child(2) {
                        margin-right: 240px;
                    }

                    &:nth-child(3) {
                        margin-right: 251px;
                    }

                    &:nth-child(4) {
                        margin-right: 73px;
                    }
                }

                .basic__button__container,
                .master__button__container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 39.09px;
                    width: 161px;
                    border: 2px solid #219653;
                    box-sizing: border-box;
                    filter: drop-shadow(0px 4px 30px rgba(51, 51, 51, 0.1));
                    backdrop-filter: blur(10px);
                    border-radius: 5px;
                    margin-left: 10px; 

                    a {
                        color: #219653;
                    }
                }
            }
        }

        .master_configuration__container {
            margin: 0;
        }

        .available_configuration__btn {

            display: flex;
            align-items: center; 
            justify-content: center;
            margin-top: 19px;

            a {
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                color: #219653;
            }
        }
    }
}
</style>