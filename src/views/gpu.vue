<template>
    <div class="gpu">
        <Header/>
        <Menu/>
        <div class="gpu__baner">
            <div class="container">
                <div class="gpu__baner__container">
                    <div class="banner__navigation__container">
                        <router-link class="menu-item" to="/">Главная</router-link> 
                        <span> / </span>
                        <router-link class="menu-item" to="/gpu">Облачные серверы с GPU</router-link>
                    </div>
                    <div class="gpu__banner__text">
                        <h2 class="gpu__banner__title">
                            Облачные серверы с GPU
                        </h2>
                        <p class="gpu__banner__info">
                            Оставь заявку и работай на суперкомпьютере с любым установленным софтом удаленно.
                        </p>
                    </div>
                    <Button/>
                    <div class="benefits__component">
                        <Benefits/>
                    </div>
                </div>
            </div>
        </div>
        <div class="tesla-K80">
            <div class="container">
                <div class="tesla-K80__container">
                    <div class="tesla-K80__baner">
                        <img class="tesla-K80__pictures" src="@/assets/pictures/gpu-tesla-k80.png">
                        <div class="tesla-K80__information">
                            <h2 class="tesla-K80__title">
                                Виртуальные машины 
                                на базе GPU TESLA K80
                                <span>
                                    Самый широко используемый в мире GPU
                                </span>
                            </h2>
                            <div class="tesla-K80__paragraph__container">
                                <img class="horn" src="@/assets/pictures/horn1.png" alt="horn">
                                <p class="tesla-K80__paragraph">
                                    СНИЖЕНИЕ РАСХОДОВ НА ИНФРАСТРУКТУРУ ДАТА-ЦЕНТРА. 
                                    ПОВЫШЕНИЕ ПРОИЗВОДИТЕЛЬНОСТИ.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="tesla-K80__features__container">
                        <h2 class="tesla-K80__feature__title">
                            ВОЗМОЖНОСТИ И ПРЕИМУЩЕСТВА
                        </h2>
                        <div class="tesla-K80__features">
                            <div class="tesla-K80__features__left-container">
                                <p class="feature">
                                    4992 ядра CUDA на карте с двумя GPU
                                </p>
                                <p class="feature">
                                    Производительность в операциях 
                                    с двойной точностью до 2,91 терафлопс 
                                    благодаря технологии NVIDIA GPU Boost
                                </p>
                                <p class="feature">
                                    Производительность в операциях 
                                    с одинарной точностью до 8,73 терафлопс 
                                    благодаря технологии NVIDIA GPU Boost
                                </p>
                            </div>
                            <div class="tesla-K80__features__right-container">
                                <p class="feature">
                                    24 ГБ памяти GDDR5
                                </p>
                                <p class="feature">
                                    Средняя пропускная способность памяти 480 ГБ/с
                                </p>
                                <p class="feature">
                                    Защита ECC для повышенной надежности
                                </p>
                                <p class="feature">
                                    Оптимизация для серверов для обеспечения лучшей производительности в дата-центре
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="tesla-K80__about__container">
                        <p class="tesla-K80__about__information">
                            Ускоритель NVIDIA® Tesla® K80 значительно сокращает расходы на инфраструктуру дата-центра, обеспечивая 
                            исключительную производительность за счет меньшего числа более мощных серверов. Он спроектирован для 
                            повышения скорости работы приложений в 5-10 раз и снижения расходов на инфраструктуру дата-центра 
                            до 50% по сравнению с системой на базе CPU. Подобный прирост производительности означает ускорение 
                            научных исследований и улучшение пользовательских возможностей в веб-сервисах, требующих онлайновых 
                            расчетов или обработки сложной числовой информации
                        </p>
                    </div>
                    <div class="tesla-K80__gpu-instances">
                        <Instances/>
                    </div>
                </div>
            </div>
        </div>
        <div class="nvidia">
            <div class="container">
                <div class="nvidia__container">
                    <div class="nvidia__baner">
                        <img class="nvidia__pictures" src="@/assets/pictures/nvidia.png">
                        <div class="nvidia__information">
                            <h2 class="nvidia__title">
                                Виртуальные машины на базе GPU TESLA A100
                                <span>
                                    Масштабируемое ускорение
                                </span>
                            </h2>
                            <div class="nvidia__paragraph__container">
                                <img class="horn" src="@/assets/pictures/horn1.png" alt="horn">
                                <p class="nvidia__paragraph">
                                    СНИЖЕНИЕ РАСХОДОВ НА ИНФРАСТРУКТУРУ ДАТА-ЦЕНТРА. 
                                    ПОВЫШЕНИЕ ПРОИЗВОДИТЕЛЬНОСТИ.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="nvidia__features__container">
                        <h2 class="nvidia__feature__title">
                            ВОЗМОЖНОСТИ И ПРЕИМУЩЕСТВА
                        </h2>
                        <div class="nvidia__features">
                            <div class="nvidia__features__left-container">
                                <p class="feature">
                                    Самая производительная комплексная платформа для ИИ и HPC в дата-центре
                                </p>
                                <p class="feature">
                                   Тренировка алгоритмов глубокого обучения
                                </p>
                                <p class="feature">
                                    Инференс глубогоко обучения
                                </p>
                            </div>
                            <div class="nvidia__features__right-container">
                                <p class="feature">
                                    24 ГБ памяти GDDR5
                                </p>
                                <p class="feature">
                                    Повышение производительности инференса ИИ до 249 раз по сравнению с процессором
                                </p>
                                <p class="feature">
                                    До 1,25 раз более высокая производительность инференса ИИ по сравнению с A100 40GB
                                </p>
                                <p class="feature">
                                    Высокопроизводительные вычисления
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="nvidia__about__container">
                        <p class="nvidia__about__information">
                            GPU NVIDIA A100 с тензорными ядрами обеспечивает непревзойденное ускорение 
                            для ИИ, анализа данных и HPC для решения самых сложных вычислительных задач. 
                            A100 на базе архитектуры NVIDIA Ampere — это ядро дата-центра NVIDIA. 
                            A100 повышает производительность до 20 раз по сравнению с предыдущими 
                            решениями. Каждый GPU A100 можно разделить на семь инстансов для быстрой 
                            адаптации к постоянно меняющимся запросам. A100 доступен в двух конфигурациях: 
                            на 40 ГБ и 80 ГБ. A100 80GB обладает самой быстрой в мире пропускной 
                            способностью памяти более 2 ТБ/с, что позволяет работать с крупными моделями 
                            и наборами данных.
                        </p>
                    </div>
                    <div class="nvidia__gpu-instances">
                        <Instances/>
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
import Instances from "../components/Instances";
import Trust from "../components/Trust";
import Partners from "../components/Partners";
import Dark from "../components/Dark";
import Footer from "../components/Footer";


export default {
  name: "gpu",
  components: {
    Header,
    Menu,
    Button,
    Benefits,
    Instances,
    Trust,
    Partners,
    Dark,
    Footer
  }
};
</script>

<style scoped lang="scss"> 

.gpu {

    &__baner {

        background: linear-gradient(0deg, #000000, #000000);
        
        
        .container {
            @media screen and (max-width:1200px) { 
                width: auto;
            }
        }

        &__container {
            background-image: url(../assets/pictures/service1__background.png);
            background-position: right;
            background-repeat: no-repeat;
            padding-top: 60px;
            padding-bottom: 60px;
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
                height: 525px;
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
            
            .benefits__component {
                position: relative;
                top: 130px;
            }

            @media screen and (max-width:992px) { 
                top: 60px;
            }

            .banner__navigation__container {

                color: rgba(255, 255, 255, 0.25);

                .menu-item{
                    color: rgba(255, 255, 255, 0.25);
                    font-size: 16px;
                    line-height: 110%;
                    letter-spacing: 0.03em;
                }
            }

            .gpu__banner__text {

                @media screen and (max-width:768px) { 
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .gpu__banner__title {

                    font-weight: 500;
                    font-size: 44px;
                    line-height: 130%;
                    color: #219653;
                    margin-top: 30px;
                    margin-bottom: 20px;
                    max-width: 800px;

                    @media screen and (max-width:576px) { 
                        width: auto;
                        font-size: 35px;
                        padding: 0 20px;
                    }
                }

                .gpu__banner__info {
                    font-size: 16px;
                    line-height: 130%;
                    letter-spacing: 0.03em;
                    color: #FAFAFA;
                    margin-bottom: 50px;
                    width: 351px;

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

   .tesla-K80 {
        margin-top: 232px;

        @media screen and (max-width:576px) { 
            margin-top: 100px;
        }

        .container {
            @media screen and (max-width:1200px) { 
                width: auto;
            }
        }

       &__container {
           padding-bottom: 113px;

           
            @media screen and (max-width:1200px) { 
                padding-bottom: 0;
            }

           .tesla-K80__baner {
                align-items: center;
                display: flex;
                margin-bottom: 100px;
                max-width: 1506px;
                margin: 0 auto;

                @media screen and (max-width:1200px) { 
                    margin-bottom: 25px;
                }

                .tesla-K80__pictures {
                    width: 100%;
                    margin-right: 47px;

                    
                    @media screen and (max-width:576px) { 
                        display: none;
                    }
                }
                

               .tesla-K80__information {

                   .tesla-K80__title {
                        font-weight: 500;
                        font-size: 45px;
                        line-height: 53px;
                        color: #FFFFFF;

                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        max-width: 715px;
                        background: #219653;
                        padding: 10px 205px 10px 10px;
                        margin-bottom: 34px;
                        border-radius: 5px;

                        @media screen and (max-width:1200px) { 
                            padding-right: 100px;
                        }

                        @media screen and (max-width:576px) { 
                            text-align: center;
                            display: flex;
                            align-items: center;
                            padding-right: 10px;
                            padding-left: 10px;
                        }

                        span {
                            font-size: 16px;
                            line-height: 130%;
                            letter-spacing: 0.03em;
                        }
                   }

                   .tesla-K80__paragraph__container {
                        display: flex;
                        align-items: center;

                        @media screen and (max-width:576px) { 
                            margin: 0 auto;
                            padding: 0 10px;
                        }

                        .horn {
                            margin-right: 10px;
                        }

                        .tesla-K80__paragraph {
                            max-width: 558px;
                            font-weight: 500;
                            font-size: 18px;
                            line-height: 110%;
                            letter-spacing: 0.03em;
                            color: #333333;

                            @media screen and (max-width:576px) { 
                                max-width: 275px;
                            }
                        }
                   }
               }
           }

           .tesla-K80__features__container {
                display: flex;
                flex-direction: column;
                align-items: center;
                max-width: 1506px;
                margin: 0 auto;
                margin-bottom: 77px;

                @media screen and (max-width:992px) { 
                    padding: 0 40px;
                }

                
                @media screen and (max-width:992px) { 
                    margin-bottom: 50px;
                }

               .tesla-K80__feature__title {

                    font-weight: 900;
                    font-size: 25px;
                    line-height: 29px;
                    color: #219653;
                    margin-bottom: 45px;

                    @media screen and (max-width:992px) { 
                        text-align: center;
                    }
                }

               .tesla-K80__features {
                    font-size: 16px;
                    line-height: 130%;
                    letter-spacing: 0.03em;
                    color: #333333;
                    font-weight: 400;
                    display: flex;

                    @media screen and (max-width:576px) { 
                        flex-direction: column;
                    }
                    
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

                    &__left-container {

                        margin-right: 105px;
                        max-width: 390px;

                        @media screen and (max-width:992px) { 
                            margin-right: 45px;
                        }

                        
                        @media screen and (max-width:576px) { 
                            margin-right: 0;
                            margin-bottom: 24px;
                        }

                        .feature {

                            &:nth-child(1) {
                                margin-bottom: 24px;
                            }

                            &:nth-child(2) {
                                margin-bottom: 15px;
                            }
                        }
                    }

                    &__right-container {

                        max-width: 450px;

                        .feature {

                            margin-bottom: 24px;

                            &:last-child {
                                margin-bottom: 0;
                            }
                        }
                    }
               }
           }

           .tesla-K80__about__container {
                margin: 0 auto;
                max-width: 1340px;
                margin-bottom: 60px; 
                padding-left: 50px;
                padding-right: 30px;

               .tesla-K80__about__information {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 130%;
                    letter-spacing: 0.03em;
                    color: #333333;
               }
           }
        }
    }

    .nvidia {

        .container {
            @media screen and (max-width:1200px) { 
                width: auto;
            }
        }

        &__container {
            padding-bottom: 130px;

            @media screen and (max-width:1200px) { 
                padding-bottom: 0;
            }
            .nvidia__baner {
                background: #000000;
                color: #FFFFFF;
                display: flex;
                align-items: center;
                height: 437px; 
                padding-right: 96px;
                margin-bottom: 45px;

                
                @media screen and (max-width:576px) { 
                    padding: 0 10px;
                    margin-bottom: 20px;
                }

                .nvidia__pictures {
                    position: relative;
                    top: 70px;

                    @media screen and (max-width:992px) { 
                        max-width: 70%;
                    }

                    @media screen and (max-width:576px) { 
                        display: none;
                    }
                }

                .nvidia__information {

                    .nvidia__title {
                        display: flex;
                        flex-direction: column;
                        font-weight: 500;
                        font-size: 45px;
                        line-height: 53px;
                        max-width: 522px;

                        @media screen and (max-width:556px) { 
                            text-align: center;
                        }

                        span {
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 130%;
                            letter-spacing: 0.03em;
                        }
                    }

                    .nvidia__paragraph__container {
                        display: flex;
                        align-items: center;
                        margin-top: 54px;

                        @media screen and (max-width:556px) { 
                            padding: 0 10px;
                        }

                        .horn {
                            margin-right: 10px;
                        }

                        .tesla-K80__paragraph {
                            max-width: 558px;
                            font-weight: 500;
                            font-size: 18px;
                            line-height: 110%;
                            letter-spacing: 0.03em;
                        }
                    }
                }
            }

            .nvidia__features__container {
                display: flex;
                flex-direction: column;
                align-items: center;
                max-width: 1110px;
                margin: 0 auto;
                margin-bottom: 54px;

                @media screen and (max-width:1200px) { 
                    margin-top: 100px;
                }
                
                @media screen and (max-width:992px) { 
                    padding: 0 40px;
                }
          
                @media screen and (max-width:556px) { 
                    margin-top: 50px;
                }

               .nvidia__feature__title {
                    font-weight: 900;
                    font-size: 25px;
                    line-height: 29px;
                    color: #219653;
                    margin-bottom: 45px;

                    @media screen and (max-width:556px) { 
                        text-align: center;
                    }
                }

               .nvidia__features {
                    font-size: 16px;
                    line-height: 130%;
                    letter-spacing: 0.03em;
                    color: #333333;
                    font-weight: 400;
                    display: flex;

                    @media screen and (max-width:576px) { 
                        flex-direction: column;
                    }
                    
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

                    &__left-container {

                        margin-right: 105px;
                        max-width: 450px;

                        @media screen and (max-width:1200px) { 
                            margin-right: 50px;
                        }

                        @media screen and (max-width:992px) { 
                            margin-right: 45px;
                        }

                        @media screen and (max-width:576px) { 
                            margin-right: 0;
                            margin-bottom: 24px;
                        }

                        .feature {

                            &:nth-child(1) {
                                margin-bottom: 20px;
                            }

                            &:nth-child(2) {
                                margin-bottom: 24px;
                            }
                        }
                    }

                    &__right-container {

                        max-width: 455px;

                        .feature {

                            margin-bottom: 20px;

                            &:first-child {
                                margin-bottom: 24px;
                            }

                            &:last-child {
                                margin-bottom: 0;
                            }
                        }
                    }
               }
           }

           .nvidia__about__container {
                margin: 0 auto;
                max-width: 1340px;
                margin-bottom: 60px; 
                padding-left: 50px;
                padding-right: 30px;

               .nvidia__about__information {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 130%;
                    letter-spacing: 0.03em;
                    color: #333333;
               }
           }
        }
    }
}


</style>
