<template>
    <div class="ai">
        <Header/>
        <Menu/>
        <div class="banner">
            <div class="container">
                <div class="banner__container">
                    <div class="banner__navigation__container">
                        <router-link class="menu-item" to="/">Главная</router-link> 
                        <span> / </span>
                        <router-link class="menu-item" to="/sowtware_installation_and_configuration">
                            Разработка систем ИИ
                        </router-link>
                    </div>
                    <div class="banner__text">
                        <h2 class="banner__title">
                            Разработка систем ИИ
                        </h2>
                        <p class="banner__info">
                            Арендуйте программное обеспечение регулярным обновлением до актуальных версий.
                        </p>
                    </div>
                    <Button/>
                    <div class="benefits__component">
                        <Benefits/>
                    </div>
                </div>
            </div>
        </div>
        <div class="ai_systems_development">
            <div class="container">
                <div class="ai__projects">
                    <div class="ai__projects__title__container">
                        <h2 class="ai__projects__title">
                            Наши проекты
                        </h2>
                    </div>
                    <div class="ai__projects__container">
                        <div class="ai__project">
                            <div class="ai__project__pictures">
                                <img src="@/assets/pictures/play-video.png" alt="play-video">
                            </div>
                            <div class="ai__project__info">
                                <h2 class="ai__project__title">
                                    Описание проекта
                                </h2>
                                <div class="ai__project__paragraph__container">
                                    <p class="ai__project__paragraph">
                                        ТЗ на разработку системы ИИ
                                        <br> На основе полученных данных о задаче формируем чёткий список требований к разработке системы 
                                    </p>
                                     <p class="ai__project__paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis adipiscing in 
                                        enim tincidunt. Duis auctor sapien ornare eget id morbi a consectetur nec.
                                    </p>
                                </div>
                                <div class="ai__project__btn">
                                    <router-link to="">Заказать решение</router-link>
                                    <img src="@/assets/pictures/arrow-right.png">
                                </div>
                            </div>
                        </div>
                        <div class="ai__project">
                            <div class="ai__project__pictures">
                                <img src="@/assets/pictures/play-video.png" alt="play-video">
                            </div>
                            <div class="ai__project__info">
                                <h2 class="ai__project__title">
                                    Описание проекта
                                </h2>
                                <div class="ai__project__paragraph__container">
                                    <p class="ai__project__paragraph">
                                        ТЗ на разработку системы ИИ
                                        <br> На основе полученных данных о задаче формируем чёткий список требований к разработке системы 
                                    </p>
                                     <p class="ai__project__paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis adipiscing in 
                                        enim tincidunt. Duis auctor sapien ornare eget id morbi a consectetur nec.
                                    </p>
                                </div>
                                <div class="ai__project__btn">
                                    <router-link to="">Заказать решение</router-link>
                                    <img src="@/assets/pictures/arrow-right.png">
                                </div>
                            </div>
                        </div>
                        <div class="ai__projects__btn">
                            <router-link to="">Показать еще</router-link>
                            <img src="@/assets/pictures/arrow-right.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Publication/>

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
import Publication from "../components/Publication";
import Partners from "../components/Partners";

import Dark from "../components/Dark";
import Footer from "../components/Footer";


export default {
    name: "ai",
    components: {
        Header,
        Menu,
        Button,
        Benefits,
        Publication,
        Partners,
        Dark,
        Footer
    }
};
</script>

<style lang="scss">
.ai {

    .banner {
        background: linear-gradient(0deg, #000000, #000000);
        margin-bottom: 160px;

        .container {
            @media screen and (max-width:1200px) { 
                width: auto;
            }
        }

        .benefits__component {
            position: relative;
            top: 110px;
            
                        
            @media screen and (max-width:992px) { 
                top: 90px;
            }

            @media screen and (max-width:768px) { 
                top: 60px;
            }
        }

        &__container {
            background-image: url(../assets/pictures/service3_background.png);
            background-repeat: no-repeat;
            background-position: right;
            background-position-y: top;
            padding-top: 60px;
            padding-bottom: 100px;
            padding-left: 100px;
            margin: 0 auto;
            height: 542px;
            max-width: 1506px;

            @media screen and (max-width:1200px) { 
                padding-top: 50px;
                padding-bottom: 50px;
                padding-left: 50px;
                height: 565px;
            }

            @media screen and (max-width:992px) { 
                height: 525px;
            }

            @media screen and (max-width:768px) { 
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-left: 0;
            }

            @media screen and (max-width:576px) { 
                background-size: cover;
                background-position: center;
                height: 630px;
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
                
                @media screen and (max-width:768px) { 
                    text-align: center;
                }

                @media screen and (max-width:576px) { 
                    margin-right: 20px;
                    margin-left: 20px;
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

                    @media screen and (max-width:768px) { 
                        margin: 0 auto;
                    }
                }
            }
        }
    }

    .ai_systems_development {
        margin: 0 auto;
        max-width: 1420px;
        padding-left: 100px;
        padding-right: 84px;

        @media screen and (max-width:1200px) { 
            padding-right: 50px;
        }

        @media screen and (max-width:768px) { 
            padding-left: 50px;
        }

        @media screen and (max-width:576px) { 
            padding-left: 20px;
            padding-right: 20px;
        }

        .container {
            @media screen and (max-width:1200px) { 
                width: auto;
            }
        }

        .ai__projects {

            .ai__projects__title__container {
                
                background: #219653;
                border-radius: 5px;
                margin-bottom: 40px;
                padding: 10px 0 10px 20px;

                @media screen and (max-width:576px) { 
                    text-align: center;
                    padding-left: 0px;
                }

                .ai__projects__title {

                    font-weight: 500;
                    font-size: 45px;
                    line-height: 53px;
                    color: #FFFFFF;
                }
            }

            .ai__projects__container {

                .ai__project {

                    display: flex;
                    margin-bottom: 44px;

                   
                    @media screen and (max-width:576px) { 
                        flex-wrap: wrap;
                        justify-content: center;
                    }

                    &:last-of-type {
                        margin-bottom: 0;
                    }

                    .ai__project__pictures {

                        min-width: 295px;
                        background-image: url("../assets/pictures/ai-project.png");
                        border-radius: 3.69674px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 20px;
                        padding: 64px 0;

                        @media screen and (max-width:1200px) { 
                            background-size: cover;
                        }

                        @media screen and (max-width:576px) { 
                            min-width: 270px;
                            margin-right: 0;
                            margin-bottom: 20px;
                        }
                    }

                    .ai__project__info {

                        @media screen and (max-width:576px) { 
                            max-width: 295px;
                        }

                        .ai__project__title {
                            font-weight: 900;
                            font-size: 22px;
                            line-height: 26px;
                            margin-bottom: 10px;
                        }

                        .ai__project__paragraph__container {

                            margin-bottom: 30px;
                            .ai__project__paragraph {
                                font-size: 16px;
                                line-height: 130%;
                                letter-spacing: 0.03em;

                                &:nth-of-type(1) {
                                    margin-bottom: 5px;
                                }
                            }
                        }
                    }

                    .ai__project__btn {

                        display: flex;
                        align-items: center;

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

            .ai__projects__btn {
                display: flex;
                align-items: center;
                justify-content: center;

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