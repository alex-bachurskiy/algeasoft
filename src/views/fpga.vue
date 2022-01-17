<template>
    <div class="fpga">
        <Header/>
        <Menu/>
        <div class="banner">
            <div class="container">
                <div class="banner__container">
                    <div class="banner__navigation__container">
                        <router-link class="menu-item" to="/">Главная</router-link> 
                        <span> / </span>
                        <router-link class="menu-item" to="/fpga_based_vds">
                            VDS на основе FPGA
                        </router-link>
                    </div>
                    <div class="banner__text">
                        <h2 class="banner__title">
                            VDS на основе FPGA
                        </h2>
                        <p class="banner__info">
                            Появление на рынке FPGA-ускорителей, которые можно перепрограммировать сколь 
                            угодное число раз, причем на языке высокого уровня типа С, стало 
                            настоящим прорывом в нише высокопроизводительных вычислений.
                        </p>
                    </div>
                    <Button/>
                    <div class="benefits__component">
                        <Benefits/>
                    </div>
                </div>
            </div>
        </div>
        <div class="fpga_based_vds">
            <div class="container">
                <div class="about__fpga">
                    <div class="about__fpga__title__container">
                        <h2 class="about__fpga__title">
                            Введение или о чипах FPGA в 3-х абзацах
                        </h2>
                    </div>
                    <div class="about__fpga__information__container">
                        <p class="about__fpga__paragraph">
                            Микросхема FPGA (англ. field-programmable gate array), она же программируемая 
                            пользователем вентильная матрица (ПЛИС), — это микросхема (ИМС), 
                            которую можно реконфигурировать под любые сложные вычислительные задачи. 
                            В индустрии существует потребность в специализированных микросхемах 
                            (ASIC, application-specific integrated circuit, «интегральная схема 
                            специального назначения») — от управления космическими аппаратами и 
                            до расчетов по финансовым моделям.
                        </p>
                        <p class="about__fpga__paragraph">
                            Однако до появления FPGA сильным и одновременно слабым местом специализированных 
                            ИМС была жесткая функциональность, заложенная в микросхему, а также высокая 
                            сложность проектирования и стоимость запуска в производство. Если функционал 
                            затем требовалось потом хоть чуть-чуть изменить, или на этапе проектирования 
                            произошли ошибки, то нужно было создавать по сути новую ИМС.
                        </p>
                        <p class="about__fpga__paragraph">
                            Появление на рынке FPGA-ускорителей, которые можно перепрограммировать сколь 
                            угодное число раз, причем на языке высокого уровня типа С, стало настоящим 
                            прорывом в нише высокопроизводительных вычислений. Это позволило ускорить 
                            время разработки, время выхода продуктов на рынок. Появились совершенно 
                            новые возможности для разработчиков аппаратных средств, в т.ч. работающих 
                            над программированием специализированных интегральных схем типа ASIC.
                        </p>
                    </div>
                </div>
                <div class="fpga__application">
                    <div class="fpga__application__title__container">
                        <h2 class="fpga__application__title">
                            Области применения FPGA
                        </h2>
                    </div>
                    <div class="fpga__application__information__container">
                        <p class="fpga__application__paragraph">
                            С момента своего изобретения и вплоть до сегодняшних дней одним из базовых 
                            направлений применения FPGA было и остается прототипирование микросхем для 
                            мелко- и среднесерийных изделий, когда изготовление микросхем ASIC 
                            экономически нецелесообразно.
                        </p>
                        <p class="fpga__application__paragraph">
                            На начало 2018 года, по сведениям российской компании Алмаз-СП, сферы применения
                            FPGA –ускорителей выглядели примерно следующим образом (цифры могут меняться в 
                            зависимости от запуска крупных проектов в той или иной отрасли):

                        </p>
                        <p class="fpga__application__paragraph">
                            <span class="percent">
                                50% — спецприменения, ВПК,
                            </span>
                            <span class="percent">
                                10% — промышленные применения,
                            </span>
                            <span class="percent">
                                20% — телекоммуникации (оборудование базовых станций GSM и др.),
                            </span>
                            <span class="percent">
                                10% — обработка видеопотоков (видеостудии, видеоаналитика),
                            </span>
                            <span class="percent">
                                10% —прототипирование, прочее (включая применение в науке).
                            </span>
                        </p>
                    </div>
                </div>
                <div class="fpga__blog__container">
                    <div class="fpga__blog__title__container">
                        <h2 class="fpga__blog__title">
                            Блог
                        </h2>
                    </div>
                    <div class="blog__article__container">
                        <div class="blog__article">
                            <img src="@/assets/pictures/blog_1.png">
                            <div class="article__info">
                                <h3 class="blog__article__title">
                                    Заголовок статьи
                                    <span>
                                        01.01.2021
                                    </span>
                                </h3>
                                <p class="blog__article__paragraph">
                                    Использование блокчейн-технологий без покупки 
                                    дорогостоящего оборудования
                                </p>
                                <div class="blog__article__btn">
                                    <router-link to="">Подробнее</router-link>
                                    <img src="@/assets/pictures/arrow-right.png">
                                </div>
                            </div>
                        </div>
                        <div class="blog__article__miniature">
                            <div class="blog__article">
                                <img src="@/assets/pictures/blog_2.png">
                                <div class="article__info">
                                    <router-link to="" class="blog__article__title">
                                        Заголовок статьи
                                        <span>
                                            01.01.2021
                                        </span>
                                    </router-link>
                                    <p class="blog__article__paragraph">
                                        Использование блокчейн-технологий без покупки
                                    </p>
                                </div>
                            </div>
                            <div class="blog__article">
                                <img src="@/assets/pictures/blog_3.png">
                                <div class="article__info">
                                    <router-link to="" class="blog__article__title">
                                        Заголовок статьи
                                        <span>
                                            01.01.2021
                                        </span>
                                    </router-link>
                                    <p class="blog__article__paragraph">
                                        Использование блокчейн-технологий без покупки
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="article__btn__container">
                        <div class="article__btn left__btn">
                            <router-link to=""></router-link>
                            <img src="@/assets/pictures/arrow-left.png">
                        </div>
                        <div class="article__btn right__btn">
                            <router-link to=""></router-link>
                            <img src="@/assets/pictures/arrow-right.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
import Dark from "../components/Dark";
import Footer from "../components/Footer";


export default {
  name: "fpga",
  components: {
    Header,
    Menu,
    Button,
    Benefits,
    Partners,
    Dark,
    Footer
  }
};
</script>

<style scoped lang="scss"> 

.fpga {

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
            top: 87px;

            @media screen and (max-width:992px) { 
                top: 105px;
            }

            @media screen and (max-width:768px) { 
                top: 45px;
            }
        }

        &__container {
            background-image: url(../assets/pictures/service5__background.png);
            background-repeat: no-repeat;
            background-position: right;
            padding-top: 60px;
            padding-bottom: 100px;
            padding-left: 100px;
            margin: 0 auto;
            height: 532px;
            max-width: 1506px;

            @media screen and (max-width:1200px) { 
                padding-top: 50px;
                padding-bottom: 50px;
                padding-left: 50px;
                height: 565px;
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

                    @media screen and (max-width:576px) { 
                        width: auto;
                        font-size: 35px;
                        padding: 0 20px;
                    }
                }

                .banner__info {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 130%;
                    letter-spacing: 0.03em;
                    color: #FFFFFF;
                    width: 508px;

                    @media screen and (max-width:768px) { 
                        font-size: 20px;
                    }

                    @media screen and (max-width:576px) { 
                        width: 315px;
                    }
                }
            }
        }
    }

    .fpga_based_vds {
        
        padding: 0 100px;
        max-width: 1444px;
        margin: 0 auto;

        @media screen and (max-width:576px) { 
            padding: 0 20px;
        }

        .container {
            @media screen and (max-width:1200px) { 
                width: auto;
            }

            
            @media screen and (max-width:576px) { 
                text-align: center;
            }
        }

        .about__fpga {

            .about__fpga__title__container {
                background: #219653;
                border-radius: 5px;
                margin-bottom: 30px;

                @media screen and (max-width:1200px) { 
                    padding: 5px 0;
                }

                .about__fpga__title {
                    font-weight: 500;
                    font-size: 45px;
                    line-height: 53px;
                    color: #FFFFFF;
                    margin: 10px 617px 10px 20px;
                    
                    @media screen and (max-width:1200px) { 
                        margin-right: 110px;
                    }

                    @media screen and (max-width:576px) { 
                        margin-right: 20px;
                    }
                }
            }

            .about__fpga__information__container {
                font-size: 16px;
                line-height: 130%;
                letter-spacing: 0.03em;
                color: #333333;

                .about__fpga__paragraph {
                    margin-bottom: 20px;

                    &:nth-child(2) {
                        max-width: 1205px;
                    }

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }
        }

        .fpga__application {
            color: #333333;
            margin-top: 38px;

            .fpga__application__title__container {
                margin-bottom: 24px;

                .fpga__application__title {
                    font-weight: 500;
                    font-size: 45px;
                    line-height: 53px;
                }
            }

            .fpga__application__information__container {

                .fpga__application__paragraph {

                    font-size: 16px;
                    line-height: 130%;
                    letter-spacing: 0.03em;
                    margin-bottom: 20px;

                    &:nth-child(3) {

                        display: flex;
                        flex-direction: column;
                        margin-bottom: 0;

                        .percent {
                            font-weight: 600;
                        }
                    }
                }
            }
        }

        .fpga__blog__container {
            margin-top: 120px;
                                
            @media screen and (max-width:1200px) { 
                position: relative;
            }

            @media screen and (max-width:1200px) { 
                display: none;
            }

            .fpga__blog__title__container {

                .fpga__blog__title {
                    font-weight: 500;
                    font-size: 45px;
                    line-height: 53px;
                    color: #219653;
                }
            }

            .blog__article__container {

                display: flex;
                                                    
                @media screen and (max-width:1200px) { 
                    flex-wrap: wrap;
                }

                .blog__article {

                    color: #000000;
                    display: flex;
                    box-shadow: 0px 4px 30px rgba(51, 51, 51, 0.1);
                    border-radius: 7px;
                    margin-right: 20px;
                    padding-right: 20px;
                    position: relative;
                    height: 300px;
                    max-width: 735px;

                    @media screen and (max-width:1200px) { 
                        margin-bottom: 50px;
                    }

                    .article__info {

                        margin-left: 20px;
                        .blog__article__title {

                            font-weight: 900;
                            font-size: 22px;
                            line-height: 26px;
                            display: flex;
                            flex-direction: column;
                            margin-top: 20px;
                            margin-bottom: 20px;

                            span {
                                font-weight: 300;
                                font-size: 14px;
                                line-height: 16px;
                                color: rgba(0, 0, 0, 0.6);
                            }
                        }

                        .blog__article__paragraph {

                            font-size: 16px;
                            line-height: 130%;
                            letter-spacing: 0.03em;
                        }

                        .blog__article__btn {

                            display: flex;
                            align-items: center;
                            margin-top: 100px;
                            margin-left: 80px;
                            position: absolute;
                            margin-right: 10px;
                            bottom: 20px;
                            right: 10px;


                            a {
                                font-weight: 500;
                                font-size: 16px;
                                line-height: 19px;
                                color: #219653;
                                transition: all 3s ease-out;
                                margin-right: 18px;

                                &:hover {
                                    font-weight: 600;
                                    color: #0cad52;
                                }
                            }
                        }
                    }
                }
                
                .blog__article__miniature {

                    .blog__article {

                        margin-right: 0;
                        margin-bottom: 10px;
                        height: 145px;
                        width: 485px;

                        &:last-of-type {
                            margin-bottom: 0;
                        }

                        .article__info {

                            margin-left: 10px;

                            .blog__article__title {
                                margin-top: 10px;
                            }

                            
                            a {
                                font-weight: 500;
                                font-size: 18px;
                                line-height: 110%;
                                letter-spacing: 0.03em;
                                color: #000000;
                            }

                            .blog__article__paragraph {
                                width: 205px;
                            }
                        }
                    }
                }
            }

            .article__btn__container {
                margin-top: 50px;
                display: flex;
                
                                                                    
                @media screen and (max-width:1200px) { 
                    position: absolute;
                    top: 315px;
                }

                .article__btn {
                    display: flex;
                    align-items: center;
                    border-radius: 5px;
                    height: 25px;
                    cursor: pointer;
                    transition: all 3s ease-out;
                    background-color: transparent;
                }
                .left__btn{
                    width: 50px;
                    border: 1px solid #333333;
                    margin-right: 34px;
                    padding-left: 14px;
                    &:hover {
                        border-color: #1f1f1f;
                        background-color: #dad8d8 ;
                    }
                }
                .right__btn {
                    width: 73px;
                    border: 1px solid #219653;
                    justify-content: right;
                    padding-right: 7px;
                    &:hover {
                        border-color: #186d3d;
                        background-color: #c3ffcd ;
                    }
                }
            }

        }
    }

}


</style>
