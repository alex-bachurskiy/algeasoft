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
        width: 1260px;

        .our__projects__publication__title {
            font-weight: 500;
            font-size: 45px;
            line-height: 53px;
            color: #219653;
            margin-bottom: 40px;
        }

        .publications__box {

            display: flex;
            justify-content: space-between;

            .publication {

                display: flex;
                flex-direction: column; 

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
