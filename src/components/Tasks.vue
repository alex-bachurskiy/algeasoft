<template>
    <div class="tasks">
        <div class="container">
            <div class="tasks__container">
                <div class="tasks__title__container">
                    <h2 class="tasks__title">
                        Мы решаем любые бизнес-задачи
                    </h2>
                    <p class="tasks__paragraph">
                        Нужно ли вам арендовать виртуальную машину для решения задач ML/DL, 
                        высокопроизводительных вычислений (HPC), моделирования сложных процессов, 
                        блокчейн-технологий и т.д., нужно ли вам реализовать нестандартное решение вашей 
                        задачи из области ИИ, или вам нужен просто удаленное офисное рабочее место, 
                        хостинг или файловое хранилище, мы всегда сможем вам помочь!
                    </p>
                </div>
                <div class="tasks__components__container">
                    <div class="tasks__components">
                        <div class="task__container">
                            <p class="task">
                                Нужно хранить и обрабатывать большой объем данных?                        
                            </p>
                        </div>
                        <div class="task__container">
                            <p class="task">
                                Нужно моделирование, проектирование или создание графики и анимации?
                            </p>
                        </div>
                        <div class="task__container">
                            <p class="task">
                                Нужен просто удаленный рабочий стол для учебы или работы?
                            </p>
                        </div>
                        <div class="task__container">
                            <p class="task">
                                Нужен сервер для потоковой передачи и обработки данных?
                            </p>
                        </div>
                    </div>
                    <div class="tasks__components">
                        <div class="task__container">
                            <p class="task">
                                Нужны мощности для систем телекоммуникаций, мобильные сетей, сети 5G и т.д.?
                            </p>
                        </div>
                        <div class="task__container">
                            <p class="task">
                                Хотите заказать уникальное ИИ решение?
                            </p>
                        </div>
                        <div class="task__container">
                            <p class="task">
                                Нужна разработка нейросетей или иных алгоритмов машинного обучения 
                                или их инференс на конечных устройствах?
                            </p>
                        </div>
                        <div class="task__container">
                            <p class="task">
                                Нужно простое облачное хранилище или хостинг?
                            </p>
                        </div>
                    </div>
                </div>
                <router-link class="tasks__button" to="">Все бизнес-кейсы</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.tasks {
    
    background-image: url("../assets/pictures/background_3.png");
    background-size: cover;

    &__container {
        margin: 0 auto;
        padding-top: 80px;
        padding-bottom: 30px;
        max-width: 1027px;

        @media screen and (max-width:768px) { 
            padding-right: 50px;
            padding-left: 50px;
        }

        .tasks__title__container {

            .tasks__title {

                font-weight: 500;
                font-size: 45px;
                line-height: 53px;
                color: #FAFAFA;
                margin: 0 auto;
                margin-bottom: 4px;
                max-width: 739px;

                @media screen and (max-width:992px) { 
                    text-align: center;
                }
            }

            .tasks__paragraph {

                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                color: #FAFAFA;
                margin-bottom: 31px;

                @media screen and (max-width:1200px) { 
                    text-align: center;
                }
            }
        }

        .tasks__components__container {
            
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 50px;
            
            @media screen and (max-width:992px) { 
                flex-wrap: unset;
            }

            @media screen and (max-width:556px) { 
                flex-wrap: wrap;
            }

            .tasks__components {
                
                &:nth-child(1) {
                    @media screen and (max-width:992px) { 
                        margin-right: 50px;

                        @media screen and (max-width:556px) { 
                            margin-right: unset;
                            margin-bottom: 25px;
                        }
                    }

                    .task__container {
                        
                        height: 62px;
                        padding: 0 15px;
                        margin-bottom: 25px;

                        @media screen and (max-width:556px) { 
                            height: auto;
                            padding: 15px
                        }

                        &:nth-child(1) {
                            @media screen and (max-width:556px) { 
                                height: auto;
                            }
                        }

                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                }

                &:nth-child(2) {

                    .task__container {
                        
                        height: 62px;
                        padding: 0 15px;
                        margin-bottom: 25px;

                        @media screen and (max-width:556px) { 
                            height: auto;
                            padding: 15px
                        }

                        &:nth-child(even) {
                            height: 42px;

                            @media screen and (max-width:556px) { 
                                height: auto;
                            }
                        }

                        &:nth-child(3) {
                            height: 78px;
                            @media screen and (max-width:556px) { 
                                height: auto;
                            }
                        }

                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                }

                .task__container {
                    display: flex;
                    align-items: center;
                    background: #FAFAFA;
                    border: 2px solid #219653;
                    border-radius: 7px;
                    max-width: 430px;

                    .task {
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 16px;
                        color: #333333;
                    }
                }
            }
            
        }

        .tasks__button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #219653;
            box-shadow: 0px 4px 30px rgba(33, 150, 83, 0.15);
            border-radius: 5px;
            font-weight: 500;
            margin: 0 auto;
            font-size: 16px;
            line-height: 19px;
            transition: all 4s ease-out;
            color: #FFFFFF;
            width: 200px;
            height: 46px;

            &:hover {
                background: #44bd32;
            }
        }
    }
}

</style>
