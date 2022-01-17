<template>
    <div class="trusts">
        <div class="container">
            <div class="trusts__container">
                <div class="trusts__info__container">
                    <h2 class="trusts__title">
                        Узнайте почему клиенты доверяют нам
                    </h2>
                    <p class="trusts__paragraph">
                        Мы подбираем максимально подходящую для каждого клиента конфигурацию 
                        аппаратных ресурсов и ПО с возможностью гибкой реконфигурации в процессе работы
                    </p>
                </div>
                <div class="trusts__box">
                    <div class="trust">
                        <p class="trust__paragraph">
                            Десятки готовых образов на основе ОС Linux и Windows разных дистрибутивов
                        </p>
                        <div class="item__container">
                            <router-link class="item" to="">Подробнее</router-link>
                            <img src="@/assets/pictures/arrow-right.png">
                        </div>
                    </div>
                    <div class="trust">
                        <p class="trust__paragraph">
                            Использование блокчейн-тезнологий без покупки дорогостоящего оборудования
                        </p>
                        <div class="item__container">
                            <router-link class="item" to="">Подробнее</router-link>
                            <img src="@/assets/pictures/arrow-right.png">
                        </div>
                    </div>
                    <div class="trust">
                        <p class="trust__paragraph">
                            Аренда недорогих хостингов и инстансов, оптимизированных 
                            под файловые хранилища
                        </p>
                        <div class="item__container">
                            <router-link class="item" to="">Подробнее</router-link>
                            <img src="@/assets/pictures/arrow-right.png">
                        </div>
                    </div>
                    <div class="trust">
                        <p class="trust__paragraph">
                            Быстрая разработка систем искусственного интелекта (AI)
                        </p>
                        <div class="item__container">
                            <router-link class="item" to="">Подробнее</router-link>
                            <img src="@/assets/pictures/arrow-right.png">
                        </div>
                    </div>
                    <div class="trust">
                        <p class="trust__paragraph">
                            Множество решений для задач с высокопроизводительными вычислениями
                        </p>
                        <div class="item__container">
                            <router-link class="item" to="">Подробнее</router-link>
                            <img src="@/assets/pictures/arrow-right.png">
                        </div>
                    </div>
                    <div class="trust">
                        <p class="trust__paragraph">
                            Оплата только за фактическое время обучения моделей ML/DL
                        </p>
                        <div class="item__container">
                            <router-link class="item" to="">Подробнее</router-link>
                            <img src="@/assets/pictures/arrow-right.png">
                        </div>
                    </div>
                </div>
                <div class="trusts__foot">
                    <h2 class="trusts__foot__title">
                        Наша главная особенность - бесплатная установка и настройка ПО
                    </h2>
                    <p class="trusts__foot__paragraph">
                        При заказе дорогих серверов с GPU или CPU или при длительной аренде машины 
                        (от 20 дней). И далее краткое описание наших услуг по установке и настройке ПО 
                        для большинства бизнес-задач под ОС Windows и Linux разных видов и версий
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.trusts {
    background-image: url("../assets/pictures/background_2.png");
    background-size: cover;
    background-color: #644032;

    &__container {

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px;

        @media screen and (max-width:1200px) { 
            padding: 50px;
        }

        @media screen and (max-width:576px) { 
            padding-right: 20px;
            padding-left: 20px;
        }

        .trusts__info__container {

            margin-bottom: 60px;

            @media screen and (max-width:1200px) { 
                text-align: center;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }

            .trusts__title {
                font-weight: 500;
                font-size: 45px;
                line-height: 53px;
                color: #FFFFFF;
                max-width: 855px;
                margin: 0 auto;

                @media screen and (max-width:1200px) { 
                    max-width: 750px;
                    margin-bottom: 30px;
                }

                @media screen and (max-width:576px) { 
                    font-size: 44px;
                }
            }
                        
            .trusts__paragraph {
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                color: #FFFFFF;
                max-width: 1063px;

                
                @media screen and (max-width:1200px) { 
                    font-size: 20px;
                    max-width: 750px;
                }
            }
        }

        .trusts__box {
            
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 60px;
            max-width: 1063px;

            
            @media screen and (max-width:576px) { 
                justify-content: center;
                margin-bottom: 30px;
            }

            .trust {
                max-width: 325px;
                padding-bottom: 15px;
                padding-top: 15px;
                padding-left: 15px;
                background: rgba(255, 255, 255, 0.7);
                box-shadow: 0px 4px 30px rgba(33, 150, 83, 0.15);
                margin-bottom: 44px;
                border-radius: 5px;

                @media screen and (max-width:992px) { 
                    max-width: 250px;
                    padding-right: 15px;
                }

                &:nth-of-type(4),
                &:nth-of-type(5),
                &:nth-of-type(6) {
                    margin-bottom: 0;

                    @media screen and (max-width:1200px) { 
                        margin-bottom: 44px;
                    }
                }

                .trust__paragraph{
                    font-size: 16px;
                    line-height: 130%;
                    letter-spacing: 0.03em;
                    color: #333333;
                    margin-bottom: 10px;
                    height: 63px;
                    max-width: 295px;

                     @media screen and (max-width:992px) { 
                        margin-bottom: 30px;
                    }
                }

                .item__container {

                    display: flex;
                    align-items: center;

                    .item {
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 19px;
                        margin-right: 18px;
                        transition: all 3s ease-out;
                        color: #219653;

                        &:hover {
                            color: #44bd32;
                        }
                    }
                }
            }
        }

        .trusts__foot {

            @media screen and (max-width:1200px) { 
                text-align: center;
            }

            .trusts__foot__title {

                font-weight: 900;
                font-size: 30px;
                line-height: 35px;
                color: #FFFFFF;
                margin: 0 auto;
                margin-bottom: 10px;
                max-width: 961px;
            }

            .trusts__foot__paragraph {

                font-size: 16px;
                line-height: 130%;
                letter-spacing: 0.03em;
                font-weight: 400;
                color: #FFFFFF;
                max-width: 1063px;
            }
        }
    }

}

</style>
