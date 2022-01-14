<template>
    <div class="cases">
        <Header/>
        <Menu/>
        <div class="banner">
            <div class="container">
                <div class="banner__container">
                    <div class="banner__navigation__container">
                        <router-link class="menu-item" to="/">Главная</router-link> 
                        <span> / </span>
                        <router-link class="menu-item" to="/cases">Бизнес-кейсы</router-link>
                    </div>
                    <div class="banner__text">
                        <h2 class="banner__title">
                            Бизнес-кейсы
                        </h2>
                        <p class="banner__info">
                            Арендуйте программное обеспечение 
                            с регулярным обновлением до актуальных версий.
                        </p>
                    </div>
                    <Button/>
                    <div class="benefits__component">
                        <Benefits/>
                    </div>
                </div>
            </div>
        </div>
        <div class="our__projects__container">
            <h2 class="our__progects__title">
                Наши проекты
            </h2>
            <div class="our__projects">
                <div class="project-box">
                    <div class="project">
                        <div class="project__img">
                            <img src="@/assets/pictures/project.png" alt="project">
                        </div>
                        <div class="project__container">
                            <h2 class="project__title">
                                Описание проекта
                            </h2>
                            <p class="project__paragraph">
                                ТЗ на разработку системы ИИ <br>
                                На основе полученных данных о задаче формируем чёткий список 
                                требований к разработке системы 
                            </p>
                            <div class="project__btn">
                                <router-link to="">
                                    Связаться с нами
                                </router-link>
                                <img src="@/assets/pictures/arrow-right.png">
                            </div>
                        </div>
                    </div>
                    <div class="project">
                        <div class="project__img">
                            <img src="@/assets/pictures/project.png" alt="project">
                        </div>
                        <div class="project__container">
                            <h2 class="project__title">
                                Описание проекта
                            </h2>
                            <p class="project__paragraph">
                                ТЗ на разработку системы ИИ <br>
                                На основе полученных данных о задаче формируем чёткий список 
                                требований к разработке системы 
                            </p>
                            <div class="project__btn">
                                <router-link to="">
                                    Связаться с нами
                                </router-link>
                                <img src="@/assets/pictures/arrow-right.png">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="project-box">
                    <div class="project">
                        <div class="project__img">
                            <img src="@/assets/pictures/project.png" alt="project">
                        </div>
                        <div class="project__container">
                            <h2 class="project__title">
                                Описание проекта
                            </h2>
                            <p class="project__paragraph">
                                ТЗ на разработку системы ИИ <br>
                                На основе полученных данных о задаче формируем чёткий список 
                                требований к разработке системы 
                            </p>
                            <div class="project__btn">
                                <router-link to="">
                                    Связаться с нами
                                </router-link>
                                <img src="@/assets/pictures/arrow-right.png">
                            </div>
                        </div>
                    </div>
                    <div class="project">
                        <div class="project__img">
                            <img src="@/assets/pictures/project.png" alt="project">
                        </div>
                        <div class="project__container">
                            <h2 class="project__title">
                                Описание проекта
                            </h2>
                            <p class="project__paragraph">
                                ТЗ на разработку системы ИИ <br>
                                На основе полученных данных о задаче формируем чёткий список 
                                требований к разработке системы 
                            </p>
                            <div class="project__btn">
                                <router-link to="">
                                    Связаться с нами
                                </router-link>
                                <img src="@/assets/pictures/arrow-right.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="our__projects__btn">
                <router-link to="">
                    Показать еще
                </router-link>
                <img src="@/assets/pictures/arrow-right.png">
            </div>
        </div>  
        <Dark/>
        <div class="publications__component">
            <Publication/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "../components/Header";
import Menu from "../components/Menu";
import Button from "../components/Button";
import Benefits from "../components/Benefits";
import Dark from "../components/Dark";
import Publication from "../components/Publication";
import Footer from "../components/Footer";


export default {
    name: "cases",
    components: {
        Header,
        Menu,
        Button,
        Benefits,
        Dark,
        Publication,
        Footer
    }
};
</script>

<style lang="scss">
.cases {

    .banner {
        background: linear-gradient(0deg, #000000, #000000);
        margin-bottom: 160px;

        @media screen and (max-width:768px) { 
            margin-bottom: 200px;
        }

        @media screen and (max-width:576px) { 
            margin-bottom: 60px;
        }

        .benefits__component {
            position: relative;
            top: 133px;

            @media screen and (max-width:1200px) { 
                top: 150px;
            }
            
                        
            @media screen and (max-width:992px) { 
                top: 100px;
            }

            @media screen and (max-width:768px) { 
                top: 90px;
            }
        }

        .container {
            @media screen and (max-width:1200px) { 
                width: auto;
            }
        }

        &__container {
            background-image: url(../assets/pictures/pc__background.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: right;
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
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                @media screen and (max-width:576px) { 
                    padding: 0 20px;
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
                    max-width: 423px;
                }
            }
        }
    }

    .our__projects__container {

        margin: 0 auto;
        margin-bottom: 43px;
        max-width: 1506px;
        padding: 0 100px;
        
        @media screen and (max-width:1200px) { 
            padding: 0 50px;
        }

        @media screen and (max-width:576px) { 
            padding-right: 20px;
            padding-left: 20px;
        }

        .our__progects__title {
            width: auto;
            background: #219653;
            border-radius: 5px;
            font-weight: 500;
            font-size: 45px;
            line-height: 53px;
            color: #FFFFFF;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 20px;
            margin-bottom: 38px;

            @media screen and (max-width:576px) { 
                text-align: center;
                padding-left: 0;
            }
        }

        .our__projects {

            display: flex;
            justify-content: space-between;
            margin-bottom: 50px;

            @media screen and (max-width:1200px) { 
                justify-content: space-evenly;
            }

            @media screen and (max-width:576px) { 
                flex-direction: column;
            }

            .project-box {
                
                @media screen and (max-width:576px) { 
                    margin-bottom: 40px;

                    &:last-of-type {
                        margin-bottom: 0;
                    }
                }

                .project {
                    display: flex;
                    margin-bottom: 40px;
                            
                    @media screen and (max-width:1200px) { 
                        flex-direction: column;
                    }

                    &:last-child {
                        margin-bottom: 0;
                    }

                    .project__img {
                        margin-right: 20px;
                        
                        @media screen and (max-width:576px) { 
                            margin-right: 0;
                        }

                        img {
                            max-width: 100%;
                        }
                    }

                    .project__container {

                        max-width: 297px;
                        .project__title {
                            font-weight: 900;
                            font-size: 22px;
                            line-height: 26px;
                            color: #333333;
                            margin-bottom: 10px;
                            width: 190px
                        }

                        .project__paragraph {
                            font-size: 16px;
                            line-height: 130%;
                            letter-spacing: 0.03em;
                            margin-bottom: 40px;
                            width: auto
                        }

                        .project__btn {

                            display: flex;
                            align-items: center; 
                            filter: drop-shadow(0px 4px 30px rgba(51, 51, 51, 0.1));
                            backdrop-filter: blur(10px);
                            border-radius: 5px;

                            a {
                                font-weight: 500;
                                font-size: 16px;
                                line-height: 19px;
                                color: #219653;
                            }

                            img {
                                margin-left: 18px;
                            }
                        }

                    }
                }
            }

        }

        .our__projects__btn {

            display: flex;
            align-items: center; 
            filter: drop-shadow(0px 4px 30px rgba(51, 51, 51, 0.1));
            backdrop-filter: blur(10px);
            border-radius: 5px;
            margin: 0 auto;
            width: 150px;

            a {
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                color: #219653;
            }

            img {
                margin-left: 18px;
            }
        }
    }
}

</style>