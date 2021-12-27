<template>
    <div class="main__button">
        <div class="container">
            <div class="main__button__container">
                <div class="first__button">
                    <router-link to="">Заказать решение</router-link>
                </div>
                <div class="second__button">
                    <router-link to="">Попробовать бесплатно</router-link>
                    <img src="@/assets/pictures/arrow-right.png" alt="arrow">
                </div> 
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.main__button {
    
    .container {
        @media screen and (max-width:992px) { 
            width: auto;
        }
    }

    &__container {
        display: flex;

        @media screen and (max-width:576px) { 
            flex-wrap: wrap;
            justify-content: center;
        }

        .first__button {
            width: 203px;
            height: 46px;
            background: #219653;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 2s ease-out;
            margin-right: 30px;
            box-shadow: 0px 4px 30px rgba(33, 150, 83, 0.15);
            border-radius: 5px;

            @media screen and (max-width:576px) { 
                margin-right: 0;
                margin-bottom: 30px;
            }

            &:hover {
                background: #136336;
            }

            a {
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                color: #FAFAFA;

                &:hover {
                    color: #e6e6e6;
                }
            }
        }

        .second__button {

            background-color: transparent;
            border: 2px solid #219653;
            box-sizing: border-box;
            filter: drop-shadow(0px 4px 30px rgba(51, 51, 51, 0.1));
            backdrop-filter: blur(10px);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            transition: all 2s ease-out;
            width: 275px;
            height: 46px;

            &:hover {
                border-color: #15d869;
            }

            a {
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                color: #219653;
                margin-right: 18px;
            }

            img {
                margin-top: 2px;
            }
        }
    }
}
</style>