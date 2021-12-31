<template>
    <div class="services">
        <div class="container">
            <div class="services__container">
                <div class="services__title__info">
                    <h2 class="services__title">
                        Наши услуги
                    </h2>
                    <p class="services__information">
                        Мы решаем любые бизнес-задачи при помощи облачных технологий и систем ИИ
                    </p>
                </div>
                <div class="service__box">
                    <div class="service">
                        <h2 class="service__title">
                            VDS на основе GPU
                        </h2>
                        <div class="service__image">
                            <img src="@/assets/pictures/service1.png" alt="service">
                        </div>
                        <div class="item__container">
                            <router-link class="item" to="/gpu">Подробнее</router-link>
                            <img src="@/assets/pictures/arrow-right.png">
                        </div>
                    </div>
                    <div class="service">
                        <h2 class="service__title">
                            Установка и настройка ПО
                        </h2>
                        <div class="service__image">
                            <img src="@/assets/pictures/service2.png" alt="service">
                        </div>
                        <div class="item__container">
                            <router-link class="item" to="/sowtware_installation_and_configuration">Подробнее</router-link>
                            <img src="@/assets/pictures/arrow-right.png">
                        </div>
                    </div>
                    <div class="service">
                        <h2 class="service__title">
                            Разработка систем ИИ
                        </h2>
                        <div class="service__image">
                            <img src="@/assets/pictures/service3.png" alt="service">
                        </div>
                        <div class="item__container">
                            <router-link class="item" to="/ai_systems_development">Подробнее</router-link>
                            <img src="@/assets/pictures/arrow-right.png">
                        </div>
                    </div>
                    <div class="service">
                        <h2 class="service__title">
                            VDS на основе CPU
                        </h2>
                        <div class="service__image">
                            <img src="@/assets/pictures/service4.png" alt="service">
                        </div>
                        <div class="item__container">
                            <router-link class="item" to="/cloud_servers_with_cpu">Подробнее</router-link>
                            <img src="@/assets/pictures/arrow-right.png">
                        </div>
                    </div>
                    <div class="service">
                        <h2 class="service__title">
                            VDS на основе FPGA
                        </h2>
                        <div class="service__image">
                            <img src="@/assets/pictures/service5.png" alt="service">
                        </div>
                        <div class="item__container">
                            <router-link class="item" to="/fpga_based_vds">Подробнее</router-link>
                            <img src="@/assets/pictures/arrow-right.png">
                        </div>
                    </div>
                    <div class="service">
                        <h2 class="service__title">
                            Хостинги и файл серверы
                        </h2>
                        <div class="service__image">
                            <img src="@/assets/pictures/service6.png" alt="service">
                        </div>
                        <div class="item__container">
                            <router-link class="item" to="/server_placement">Подробнее</router-link>
                            <img src="@/assets/pictures/arrow-right.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.services {

    margin-bottom: 87px;

    &__container {

        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 1150px;

        @media screen and (max-width:1200px) { 
            align-items: center;
            width: unset;
            max-width: 1150px;
        }

        .services__title__info {

            width: auto;
            @media screen and (max-width:1200px) { 
                text-align: center;
            }

            .services__title {
                font-weight: 500;
                font-size: 45px;
                line-height: 53px;
                color: #219653;
                width: auto;
            }

            .services__information {
                font-size: 16px;
                font-weight: 400;
                line-height: 130%;
                letter-spacing: 0.03em;
                color: #333333;
                margin-top: 5px;
                margin-bottom: 60px;
                width: 400px;

                @media screen and (max-width:576px) { 
                    width: auto;
                }
            }
        }

        .service__box {

            display: flex;
            flex-wrap: wrap;
            width: 1180px;

            @media screen and (max-width:1200px) { 
                justify-content: space-around;
                max-width: 1150px;
                width: auto;
            }

            .service {

                margin-bottom: 50px;
                margin-right: 50px;

                @media screen and (max-width:1200px) { 
                    margin-right: 0;
                }
                
                &:nth-child(4),
                &:nth-child(5), 
                &:nth-child(6) {
                    margin-bottom: 0;

                    @media screen and (max-width:576px) { 
                        margin-bottom: 50px;
                    }
                }

                &:nth-child(6) {
                    @media screen and (max-width:576px) { 
                        margin-bottom: 0;
                    }
                }

                &:nth-child(3), 
                &:nth-child(6) {
                    margin-right: 0;
                }

                &__title {
                    font-weight: 900;
                    font-size: 22px;
                    line-height: 26px;
                    text-align: center;
                    color: #333333;
                    margin-bottom: 10px;
                }

                &__image {
                    
                    display: flex;
                    border: 4px solid transparent;
                    transition: all 1s ease-out;
                    border-radius: 9px;
                    margin-bottom: 20px;

                    &:hover {
                        border: 4px solid #219653;
                    }

                    img {
                        border-radius: 5px;
                        width: 350px;

                        @media screen and (max-width:576px) { 
                            width: 100%;
                        }
                    }
                }

                .item__container {

                    align-items: center;
                    display: flex;
                    @media screen and (max-width:1200px) { 
                        justify-content: center;
                    }
                    .item {
                        font-weight: 900;
                        font-size: 22px;
                        line-height: 26px;
                        color: #219653;
                        margin-right: 13px;
                    }
                }
            }
        }
    }
}
</style>
