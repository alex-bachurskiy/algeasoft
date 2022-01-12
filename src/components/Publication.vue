<template>
    <div class="publication">
        <div class="container">
            <div class="publication__container">
                <h2 class="our__projects__publication__title">
                    Наши публикации
                </h2>
                <div class="publications__box">
                    <div class="publication">
                        <img src="@/assets/pictures/publication1.png" alt="img">
                        <router-link class="publication__title" to="">Название публикации</router-link>
                    </div>
                    <div class="publication">
                        <img src="@/assets/pictures/publication2.png" alt="img">
                        <router-link class="publication__title" to="">Название публикации</router-link> 
                    </div>
                    <div class="publication">
                        <img src="@/assets/pictures/publication3.png" alt="img">
                        <router-link class="publication__title" to="">Название публикации</router-link>
                    </div>
                    <div class="publication">
                        <img src="@/assets/pictures/publication4.png" alt="img">
                        <router-link class="publication__title" to="">Название публикации</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
 
.publication {

    &__container {

        display: flex;
        margin: 0 auto;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 125px;
        margin-bottom: 97px;
        max-width: 1260px;

        @media screen and (max-width:1200px) { 
            margin-right: 50px;
            margin-left: 100px;
        }

        @media screen and (max-width:768px) { 
            margin-left: 50px;
        }

        @media screen and (max-width:576px) {
            margin-top: 60px; 
            margin-right: auto;
            margin-bottom: 60px;
            margin-left: auto;
        }

        .our__projects__publication__title {
            font-weight: 500;
            font-size: 45px;
            line-height: 53px;
            color: #219653;
            margin-bottom: 40px;

            @media screen and (max-width:576px) { 
                text-align: center;
            }
        }

        .publications__box {

            display: flex;
            justify-content: space-between;

            
            @media screen and (max-width:1200px) { 
                flex-wrap: wrap;
            }

            @media screen and (max-width:576px) { 
                justify-content: center;
            }

            .publication {

                display: flex;
                flex-direction: column; 

                
                @media screen and (max-width:1200px) { 
                    margin-bottom: 25px;

                    &:nth-child(3),
                    &:nth-child(4) {
                        margin-bottom: 0;
                    }
                }

                @media screen and (max-width:576px) { 
                    &:nth-child(3) {
                        margin-bottom: 25px;
                    }
                }

                img {
                    width: 100%;
                }

                .publication__title {
                    font-weight: 900;
                    font-size: 22px;
                    line-height: 26px;
                    color: #333333;
                    margin-top: 20px;
                }
            }
        }
    }
}

</style>
