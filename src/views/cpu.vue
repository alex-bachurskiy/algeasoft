<template>
    <div class="cpu">
        <Header/>
        <Menu/>
        <div class="banner">
            <div class="container">
                <div class="banner__container">
                    <div class="banner__navigation__container">
                        <router-link class="menu-item" to="/">Главная</router-link> 
                        <span> / </span>
                        <router-link class="menu-item" to="/cloud_servers_with_cpu">
                            Облачные серверы с CPU
                        </router-link>
                    </div>
                    <div class="banner__text">
                        <h2 class="banner__title">
                            Облачные серверы с CPU
                        </h2>
                        <p class="banner__info">
                            Новый уровень производительности с процессорами Intel® Xeon® Gold Scalable второго поколения
                        </p>
                    </div>
                    <Button/>
                    <div class="benefits__component">
                        <Benefits/>
                    </div>
                </div>
            </div>
        </div>
        <div class="intel_xeon_scalable">
            <div class="container">
                <div class="intel_xeon_scalable__header">
                    <div class="intel_xeon_scalable__header__title__container">
                        <h2 class="intel_xeon_scalable__header__title">
                            Сервера на базе новейших процессоров 
                            Intel Xeon Scalable (Cascade Lake) 2-го поколения
                        </h2>
                    </div>
                    <div class="intel_xeon_scalable__header__paragraph__container">
                        <p class="intel_xeon_scalable__header__paragraph">
                            Новый уровень производительности с процессорами Intel® Xeon® Gold Scalable второго поколения
                        </p>
                    </div>
                    <div class="intel_xeon_scalable__header__perfomance__container">
                        <img src="@/assets/pictures/horn1.png" alt="horn">
                        <p class="intel_xeon_scalable__header__perfomance__paragraph">
                            СНИЖЕНИЕ РАСХОДОВ НА ИНФРАСТРУКТУРУ ДАТА-ЦЕНТРА. 
                            ПОВЫШЕНИЕ ПРОИЗВОДИТЕЛЬНОСТИ.
                        </p>
                    </div>
                </div>
                <div class="intel_xeon_scable__baner">
                    <div class="intel_xeon_scable__baner__container">
                        <div class="intel_xeon_scable__baner__info">
                            <h2 class="intel_xeon_scable__baner__title">
                                ВОЗМОЖНОСТИ И ПРЕИМУЩЕСТВА
                            </h2>
                            <div class="intel_xeon_scable__baner__paragraph">
                                <p class="baner__paragraph">
                                    Ядра процессора будут доступны на 100% процессорного времени
                                </p>
                                <p class="baner__paragraph">
                                    Выбранный графический ускоритель будет зарезервирован только за вашим сервером
                                </p>
                                <p class="baner__paragraph">
                                    Вы получите высокую производительность при работе с системой хранения
                                </p>
                                <p class="baner__paragraph">
                                    Ядра процессора будут доступны на 100% процессорного времени
                                </p>
                                <p class="baner__paragraph">
                                    Выбранный графический ускоритель будет зарезервирован только за вашим сервером
                                </p>
                                <p class="baner__paragraph">
                                    Вы получите высокую производительность при работе с системой хранения
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="intel_xeon_scalable__paragraph__container">
                    <p class="intel_xeon_scalable__paragraph">
                        Все CPU-серверы построены на базе центральных процессоров Intel® Xeon® Scalable 
                        (Cascade Lake) второго поколения и содержат до 96 виртуальных процессоров и до 
                        512 ГБ оперативной памяти DDR4 ECC Reg 2400—2933 МГц. Каждый процессор содержит 
                        два блока Intel® AVX-512. Инструкции данного набора до четырех раз 
                        ускоряют операции умножения и сложения с пониженной точностью, которые 
                        используются в любом программном обеспечении. Локальное хранилище организовано 
                        на твердотельных накопителях Intel®, разработанных специально для дата-центров 
                        и имеющих емкость до 1,92 ТБ.
                    </p>
                </div>
                <div class="intel_xeon_scalable_available_configuration__container">
                    <div class="intel_xeon_scalable_available_configuration__title__container">
                        <h2 class="intel_xeon_scalable_available_configuration__title">
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
                    <div class="standart_configuration__container">
                        <div class="standart_configuration__title__container">
                            <div class="standart_configuration__title">
                                Стандарт
                            </div>
                        </div>
                        <div class="standart__container">
                            <div class="standart__information__container">
                                <p class="standart__information__title">
                                    Наименование
                                </p>
                                <p class="standart__information__title">
                                    vCPU
                                </p>
                                <p class="standart__information__title">
                                    ОЗУ, МБ
                                </p>
                                <p class="standart__information__title">
                                    Диск, ГБ
                                </p>
                            </div>
                            <div class="standart__information__container">
                                <div class="standart__information">
                                    <p class="standart__information__paragraph">
                                        cpu.2.2.10
                                    </p>
                                    <p class="standart__information__paragraph">
                                        2
                                    </p>
                                    <p class="standart__information__paragraph">
                                        2048
                                    </p>
                                    <p class="standart__information__paragraph">
                                        10
                                    </p>
                                </div>
                                <div class="standart__button__container">
                                    <router-link to="">Запросить цену</router-link>
                                </div>
                            </div>
                            <div class="standart__information__container">
                                <div class="standart__information">
                                    <p class="standart__information__paragraph">
                                        cpu.2.2.10
                                    </p>
                                    <p class="standart__information__paragraph">
                                        2
                                    </p>
                                    <p class="standart__information__paragraph">
                                        2048
                                    </p>
                                    <p class="standart__information__paragraph">
                                        10
                                    </p>
                                </div>
                                <div class="standart__button__container">
                                    <router-link to="">Запросить цену</router-link>
                                </div>
                            </div>
                            <div class="standart__information__container">
                                <div class="standart__information">
                                    <p class="standart__information__paragraph">
                                        cpu.2.2.10
                                    </p>
                                    <p class="standart__information__paragraph">
                                        2
                                    </p>
                                    <p class="standart__information__paragraph">
                                        2048
                                    </p>
                                    <p class="standart__information__paragraph">
                                        10
                                    </p>
                                </div>
                                <div class="standart__button__container">
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
                    <div class="intel_xeon_scalable_available_configuration__btn">
                        <router-link to="">Индивидуальный план</router-link>
                        <img src="@/assets/pictures/arrow-right.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="amd_epyc">
            <div class="container">
                <div class="amd_epyc__header">
                    <div class="amd_epyc__header__title__container">
                        <h2 class="amd_epyc__header__title">
                            Мощные вычислительные серверы на базе CPU AMD EPYC 7002 2-го поколения
                        </h2>
                    </div>
                    <div class="amd_epyc__header__paragraph__container">
                        <p class="amd_epyc__header__paragraph">
                            Новый уровень производительности с процессорами Intel® Xeon® Gold Scalable второго поколения
                        </p>
                    </div>
                    <div class="amd_epyc__header__perfomance__container">
                        <img src="@/assets/pictures/horn1.png" alt="horn">
                        <p class="amd_epyc__header__perfomance__paragraph">
                            СНИЖЕНИЕ РАСХОДОВ НА ИНФРАСТРУКТУРУ ДАТА-ЦЕНТРА. 
                            ПОВЫШЕНИЕ ПРОИЗВОДИТЕЛЬНОСТИ.
                        </p>
                    </div>
                </div>
                <div class="amd_epyc__baner">
                    <div class="amd_epyc__baner__container">
                        <div class="amd_epyc__baner__info">
                            <h2 class="amd_epyc__baner__title">
                                ВОЗМОЖНОСТИ И ПРЕИМУЩЕСТВА
                            </h2>
                            <div class="amd_epyc__baner__paragraph">
                                <p class="baner__paragraph">
                                    Ядра процессора будут доступны на 100% процессорного времени
                                </p>
                                <p class="baner__paragraph">
                                    Выбранный графический ускоритель будет зарезервирован только за вашим сервером
                                </p>
                                <p class="baner__paragraph">
                                    Вы получите высокую производительность при работе с системой хранения
                                </p>
                                <p class="baner__paragraph">
                                    Ядра процессора будут доступны на 100% процессорного времени
                                </p>
                                <p class="baner__paragraph">
                                    Выбранный графический ускоритель будет зарезервирован только за вашим сервером
                                </p>
                                <p class="baner__paragraph">
                                    Вы получите высокую производительность при работе с системой хранения
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="amd_epyc__paragraph__container">
                    <p class="amd_epyc__paragraph">
                        Все CPU-серверы построены на базе центральных процессоров Intel® Xeon® Scalable 
                        (Cascade Lake) второго поколения и содержат до 96 виртуальных процессоров и до 
                        512 ГБ оперативной памяти DDR4 ECC Reg 2400—2933 МГц. Каждый процессор содержит 
                        два блока Intel® AVX-512. Инструкции данного набора до четырех раз 
                        ускоряют операции умножения и сложения с пониженной точностью, которые 
                        используются в любом программном обеспечении. Локальное хранилище организовано 
                        на твердотельных накопителях Intel®, разработанных специально для дата-центров 
                        и имеющих емкость до 1,92 ТБ.
                    </p>
                </div>
                <IntelXeon/>
                <div class="cpu_amd_epyc">
                    <div class="container">
                        <div class="cpu_amd_epyc__header">
                            <div class="cpu_amd_epyc__header__title__container">
                                <h2 class="cpu_amd_epyc__header__title">
                                    Мощные вычислительные серверы на базе CPU AMD EPYC 7002 2-го поколения
                                </h2>
                            </div>
                            <div class="cpu_amd_epyc__header__paragraph__container">
                                <p class="cpu_amd_epyc__header__paragraph">
                                    Новый уровень производительности с процессорами Intel® Xeon® Gold Scalable второго поколения
                                </p>
                            </div>
                            <div class="cpu_amd_epyc__header__perfomance__container">
                                <img src="@/assets/pictures/horn1.png" alt="horn">
                                <p class="cpu_amd_epyc__header__perfomance__paragraph">
                                    СНИЖЕНИЕ РАСХОДОВ НА ИНФРАСТРУКТУРУ ДАТА-ЦЕНТРА. 
                                    ПОВЫШЕНИЕ ПРОИЗВОДИТЕЛЬНОСТИ.
                                </p>
                            </div>
                        </div>
                        <div class="cpu_amd_epyc__features__container">
                            <h2 class="cpu_amd_epyc__feature__title">
                                ВОЗМОЖНОСТИ И ПРЕИМУЩЕСТВА
                            </h2>
                            <div class="cpu_amd_epyc__features">
                                <div class="cpu_amd_epyc__features__left-container">
                                    <p class="feature">
                                        Ядра процессора будут доступны на 100% процессорного времени
                                    </p>
                                    <p class="feature">
                                        Выбранный графический ускоритель будет зарезервирован только за вашим сервером
                                    </p>
                                    <p class="feature">
                                        Вы получите высокую производительность при работе с системой хранения
                                    </p>
                                </div>
                                <div class="cpu_amd_epyc__features__right-container">
                                    <p class="feature">
                                        Ядра процессора будут доступны на 100% процессорного времени
                                    </p>
                                    <p class="feature">
                                        Выбранный графический ускоритель будет зарезервирован только за вашим сервером
                                    </p>
                                    <p class="feature">
                                        Вы получите высокую производительность при работе с системой хранения
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="cpu_amd_epyc__paragraph__container">
                            <p class="cpu_amd_epyc__paragraph">
                                Все CPU-серверы построены на базе центральных процессоров Intel® Xeon® Scalable 
                                (Cascade Lake) второго поколения и содержат до 96 виртуальных процессоров и до 
                                512 ГБ оперативной памяти DDR4 ECC Reg 2400—2933 МГц. Каждый процессор содержит 
                                два блока Intel® AVX-512. Инструкции данного набора до четырех раз 
                                ускоряют операции умножения и сложения с пониженной точностью, которые 
                                используются в любом программном обеспечении. Локальное хранилище организовано 
                                на твердотельных накопителях Intel®, разработанных специально для дата-центров 
                                и имеющих емкость до 1,92 ТБ.
                            </p>
                        </div>
                        <IntelXeon/>
                    </div>
                </div>
            </div>
        </div>
        <Trust/>
        <Reviews/>
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
import IntelXeon from "../components/Intel-Xeon";
import Trust from "../components/Trust"
import Partners from "../components/Partners";
import Reviews from "../components/Reviews";
import Dark from "../components/Dark";
import Footer from "../components/Footer";


export default {
    name: "cpu",
    components: {
        Header,
        Menu,
        Button,
        Benefits,
        IntelXeon,
        Trust,
        Partners,
        Reviews,
        Dark,
        Footer
    }
};
</script>

<style lang="scss" scoped>
.cpu {
    .banner {
        background: linear-gradient(0deg, #000000, #000000);
        margin-bottom: 160px;

        .benefits__component {
            position: relative;
            top: 110px;
        }


        &__container {
            background-image: url(../assets/pictures/service4_background.png);
            background-repeat: no-repeat;
            background-position: right;
            background-position-y: top;
            padding-top: 60px;
            padding-bottom: 100px;
            padding-left: 100px;
            margin: 0 auto;
            height: 542px;
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
                    width: 390px;
                }
            }
        }
    }

    .intel_xeon_scalable {

        .intel_xeon_scalable__header {
            margin: 0 auto;
            max-width: 1420px;
            padding-left: 100px;
            padding-right: 100px;
            margin-bottom: 50px;

            .intel_xeon_scalable__header__title__container {
                background: #219653;
                box-shadow: 0px 4px 30px rgba(33, 150, 83, 0.15);
                border-radius: 5px;

                .intel_xeon_scalable__header__title {
                    font-weight: 500;
                    font-size: 45px;
                    line-height: 53px;
                    color: #FFFFFF;
                    margin: 10px 0 10px 20px;
                }
            }

            .intel_xeon_scalable__header__paragraph__container {

                .intel_xeon_scalable__header__paragraph {

                    font-size: 16px;
                    line-height: 130%;
                    letter-spacing: 0.03em;
                    color: #333333;
                    margin-bottom: 55px;
                    width: 435px;
                }
            }

            .intel_xeon_scalable__header__perfomance__container {
                display: flex;
                align-items: center;
                width: 600px;

                img {
                    transform: rotate(-20.13deg);
                    margin-right: 10px;
                }

                .intel_xeon_scalable__header__perfomance__paragraph {
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 110%;
                    letter-spacing: 0.03em;
                    color: #333333;
                }
            }
        }

        .intel_xeon_scable__baner {
            background-color: #000;
            margin-bottom: 40px;

            &__container {

            background-image: url("../assets/pictures/intel_xeon__background.png");
            background-repeat: no-repeat;
            height: 509px;
            padding-top: 48px;
            padding-right: 50px;
            padding-bottom: 44px;
            display: flex;
            justify-content: right;
            max-width: 1506px;
            margin: 0 auto;

            .intel_xeon_scable__baner__info {

                .intel_xeon_scable__baner__title {
                    width: 324px;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 110%;
                    letter-spacing: 0.03em;
                    color: #219653;
                    margin-bottom: 45px;
                }

                .intel_xeon_scable__baner__paragraph {

                    .baner__paragraph {

                        font-size: 16px;
                        line-height: 130%;
                        letter-spacing: 0.03em;
                        color: #FFFFFF;
                        max-width: 465px;
                        margin-bottom: 20px;
                        display: flex;

                        &::before {
                            content: url("../assets/pictures/check.png");
                            margin-right: 15px;
                            position: relative;
                            top: 5px;
                        }

                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                }
            }
            }
        }

        .intel_xeon_scalable__paragraph__container {
            max-width: 1420px;
            padding-left: 100px;
            padding-right: 100px;
            margin: 0 auto;
            margin-bottom: 61px;
            display: flex;
            justify-content: center;

            .intel_xeon_scalable__paragraph {
                font-size: 16px;
                line-height: 130%;
                letter-spacing: 0.03em;
                color: #333333;
            }
        }

        .intel_xeon_scalable_available_configuration__container {
            margin: 0 auto;
            max-width: 1420px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 100px;

            .intel_xeon_scalable_available_configuration__title__container {
                display: flex;
                flex-direction: column;

                .intel_xeon_scalable_available_configuration__title {
                    text-align: center;
                    font-weight: 900;
                    font-size: 22px;
                    line-height: 26px;
                    color: #333333;
                }
            }

            .basic_configuration__container,
            .master_configuration__container,
            .standart_configuration__container {
                margin-bottom: 31px;

                .basic_configuration__title__container,
                .master_configuration__title__container,
                .standart_configuration__title__container {
                    background: rgba(33, 150, 83, 0.5);
                    border-radius: 3px;
                    padding: 5px 0 5px 10px;

                    .basic_configuration__title,
                    .master_configuration__title,
                    .standart_configuration__title {
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 110%;
                        letter-spacing: 0.03em;
                        color: #FFFFFF;
                    }
                }

                .basic__information__container,
                .master__information__container,
                .standart__information__container {
                    display: flex;
                    margin: 10px 0;

                    &:nth-child(2) {
                        .basic__button__container,
                        .master__button__container,
                        .standart__button__container {
                            background: #219653; 
                            a {
                                color: #FFFFFF;
                            }
                        }

                        .basic__information,
                        .master__information,
                        .standart__information {
                            background: #219653;
                            color: #FFFFFF;
                            border-radius: 5px;
                        }
                    }

                    &:last-child {
                        margin-bottom: 0;
                        .basic__information,
                        .master__information,
                        .standart__information {
                            background: rgba(33, 150, 83, 0.05);
                            border-radius: 5px;
                        }
                    }

                    .basic__information,
                    .master__information,
                    .standart__information {
                        display: flex;
                        color: #333333;
                        padding-top: 13px;
                        width: 1069px;

                    }
                    
                    .basic__information__title,
                    .master__information__title,
                    .standart__information__title {
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
                    .master__information__paragraph,
                    .standart__information__paragraph {

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
                    .master__button__container,
                    .standart__button__container {
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

            .intel_xeon_scalable_available_configuration__btn {

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

    .amd_epyc {

        .amd_epyc__header {
            margin: 0 auto;
            max-width: 1420px;
            padding-left: 100px;
            padding-right: 100px;
            margin-bottom: 50px;

            .amd_epyc__header__title__container {
                background: #219653;
                box-shadow: 0px 4px 30px rgba(33, 150, 83, 0.15);
                border-radius: 5px;

                .amd_epyc__header__title {
                    font-weight: 500;
                    font-size: 45px;
                    line-height: 53px;
                    color: #FFFFFF;
                    margin: 10px 0 10px 20px;
                }
            }

            .amd_epyc__header__paragraph__container {

                .amd_epyc__header__paragraph {

                    font-size: 16px;
                    line-height: 130%;
                    letter-spacing: 0.03em;
                    color: #333333;
                    margin-bottom: 55px;
                    width: 435px;
                }
            }

            .amd_epyc__header__perfomance__container {
                display: flex;
                align-items: center;
                width: 600px;

                img {
                    transform: rotate(-20.13deg);
                    margin-right: 10px;
                }

                .amd_epyc__header__perfomance__paragraph {
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 110%;
                    letter-spacing: 0.03em;
                    color: #333333;
                }
            }
        }

        .amd_epyc__baner {
            background-color: #000;
            margin-bottom: 40px;

            &__container {

            background-image: url("../assets/pictures/amd_epyc.png");
            background-repeat: no-repeat;
            height: 509px;
            padding-top: 48px;
            padding-right: 50px;
            padding-bottom: 44px;
            display: flex;
            justify-content: right;
            max-width: 1506px;
            margin: 0 auto;

            .amd_epyc__baner__info {

                .amd_epyc__baner__title {
                    width: 324px;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 110%;
                    letter-spacing: 0.03em;
                    color: #219653;
                    margin-bottom: 45px;
                }

                .amd_epyc__baner__paragraph {

                    .baner__paragraph {

                        font-size: 16px;
                        line-height: 130%;
                        letter-spacing: 0.03em;
                        color: #FFFFFF;
                        max-width: 465px;
                        margin-bottom: 20px;
                        display: flex;

                        &::before {
                            content: url("../assets/pictures/check.png");
                            margin-right: 15px;
                            position: relative;
                            top: 5px;
                        }

                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                }
            }
            }
        }

        .amd_epyc__paragraph__container {
            max-width: 1420px;
            padding-left: 100px;
            padding-right: 100px;
            margin: 0 auto;
            margin-bottom: 61px;
            display: flex;
            justify-content: center;

            .amd_epyc__paragraph {
                font-size: 16px;
                line-height: 130%;
                letter-spacing: 0.03em;
                color: #333333;
            }
        }
    }

    .cpu_amd_epyc {
        margin-top: 114px;
        margin-bottom: 39px;
        .cpu_amd_epyc__header {
            margin: 0 auto;
            max-width: 1420px;
            padding-left: 100px;
            padding-right: 100px;
            margin-bottom: 50px;

            .cpu_amd_epyc__header__title__container {
                background: #219653;
                box-shadow: 0px 4px 30px rgba(33, 150, 83, 0.15);
                border-radius: 5px;

                .cpu_amd_epyc__header__title {
                    font-weight: 500;
                    font-size: 45px;
                    line-height: 53px;
                    color: #FFFFFF;
                    margin: 10px 0 10px 20px;
                }
            }

            .cpu_amd_epyc__header__paragraph__container {

                .cpu_amd_epyc__header__paragraph {

                    font-size: 16px;
                    line-height: 130%;
                    letter-spacing: 0.03em;
                    color: #333333;
                    margin-bottom: 55px;
                    width: 435px;
                }
            }

            .cpu_amd_epyc__header__perfomance__container {
                display: flex;
                align-items: center;
                width: 600px;

                img {
                    transform: rotate(-20.13deg);
                    margin-right: 10px;
                }

                .cpu_amd_epyc__header__perfomance__paragraph {
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 110%;
                    letter-spacing: 0.03em;
                    color: #333333;
                }
            }
        }

        .cpu_amd_epyc__features__container {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 1506px;
            margin: 0 auto;
            margin-bottom: 60px;
            padding-left: 100px;

            .cpu_amd_epyc__feature__title {

                font-weight: 900;
                font-size: 25px;
                line-height: 29px;
                color: #219653;
                margin-bottom: 45px;
            }

            .cpu_amd_epyc__features {
                font-size: 16px;
                line-height: 130%;
                letter-spacing: 0.03em;
                color: #333333;
                font-weight: 400;
                display: flex;
                    
                .feature {

                    display: flex;

                    &::before {
                        display: block;
                        content: url("..//assets/pictures/check.png");
                        margin-right: 8px;
                        position: relative;
                        top: 5px;
                    }
                }

                &__left-container,
                &__right-container {

                    margin-right: 105px;
                    width: 505px;

                    .feature {
                            
                        margin-bottom: 24px;
                        
                        &:last-of-type {
                            margin-bottom: 0;
                        }
                    }
                }
           }
       }

        .cpu_amd_epyc__paragraph__container {
            max-width: 1420px;
            padding-left: 100px;
            padding-right: 100px;
            margin: 0 auto;
            margin-bottom: 81px;
            display: flex;
            justify-content: center;

            .cpu_amd_epyc__paragraph {
                font-size: 16px;
                line-height: 130%;
                letter-spacing: 0.03em;
                color: #333333;
            }
        }
    }
}
</style>