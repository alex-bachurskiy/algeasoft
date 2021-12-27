<template>
<div class="benefits">
    <div class="container">
        <div class="benefits__container">
        <div class="benefit">
            <img src="@/assets/pictures/home-alt.png" alt="home">
            <h2 class="benefit__title">
                Локальное хранилище данных
            </h2>
            <p class="benefit__info">
                на твердотельных накопителях Intel®, имеющих емкость до 1,92 ТБ.
            </p>
        </div>
        <div class="benefit">
            <img src="@/assets/pictures/vector.png" alt="home">
            <h2 class="benefit__title">
                Центральные процессоры Intel® Xeon® Scalable
            </h2>
            <p class="benefit__info">
                содержат до 96 виртуальных процессоров и до 512 ГБ оперативной памяти.
            </p>
        </div>
        <div class="benefit">
            <img src="@/assets/pictures/eye.png" alt="home">
            <h2 class="benefit__title">
                Бесплатное тестирование
            </h2>
            <p class="benefit__info">
                от двух дней до недели в зависимости от конфигурации
            </p>
        </div>
        <div class="benefit">
            <img src="@/assets/pictures/circle-ok.png" alt="home">
            <h2 class="benefit__title">
                100% производительности
            </h2>
            <p class="benefit__info">
                закрепляем физические ядра процессора и графические адаптеры за 1 клиентом.
            </p>
        </div>
        </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.benefits {

    margin-right: 100px;

    @media screen and (max-width:1200px) { 
        margin-right: 50px;
    }

    @media screen and (max-width:768px) {
        margin: 0 auto;   
    }

    @media screen and (max-width:576px) {
        display: none;
    }

    .container {
        @media screen and (max-width:1200px) { 
            width: auto;
        }
    }

    &__container {

        display: flex;
        justify-content: space-between;
        position: relative;

        .benefit {
            background: #FFFFFF;
            border: 2px solid #219653;
            border-radius: 10px;
            padding: 20px 20px 0 20px;
            display: flex;
            flex-direction: column;
            cursor: pointer;
            transition: all 1s ease-out;
            align-items: center;
            text-align: center;
            height: 185px;
            width: 250px;

            @media screen and (max-width:1200px) { 
                height: auto;
                max-width: 200px;
                padding: 15px;
            }

            @media screen and (max-width:992px) { 
                max-width: 170px;
            }

            @media screen and (max-width:768px) { 
                max-width: 150px;
                margin-right: 30px;

                &:nth-of-type(4) {
                    margin-right: 0;
                }
            }

            &:hover {
                background: #94e9a2;
                border-color: #00500b60;
            }

            &:nth-of-type(3) {
                padding-right: 45px ;
                padding-left: 45px;

                @media screen and (max-width:1200px) {
                    padding-right: 15px;
                    padding-left: 15px;
                }
            }

            &__title {
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                color: #333333;
                margin: 5px 0;
            }

            &__info {
                font-weight: 300;
                font-size: 14px;
                line-height: 16px;
                color: #828282;
                transition: all 1s ease-out;

                &:hover {
                    color: #303952;
                }

            }

        }
    }
}
</style>