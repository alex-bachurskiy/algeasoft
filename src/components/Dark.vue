<template>
    <div class="consultation">
        <div class="container">
            <div class="consultation__container">
                <div class="consultation__title__container">
                    <h2 class="consultation__title">
                        Нужна консультация?
                    </h2>
                    <img class="consultation__img" src="@/assets/pictures/horn.png" alt="horn">
                </div>
                <div class="consultation__dark__container">
                    <p class="consultation__dark__paragraph">
                        Подробно расскажем о наших услугах, <br>
                        видах работ и типовых проектах, рассчитаем стоимость 
                        и подготовим индивидуальное предложение!
                    </p>
                    <div class="consultation__dark__btn">
                        <router-link to="">
                            Связаться с нами
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped lang="scss">

.consultation {

    @media screen and (max-width:576px) { 
        display: none;
    }

    .container {
        
        @media screen and (max-width:1200px) { 
            width: auto;
        }
    }

    &__container {
        background: #219653;
        display: flex;
        height: 150px;
        justify-content: space-between;
        max-width: 1520px;
        margin: 0 auto;

        .consultation__title__container {

            .consultation__title {
                font-weight: 500;
                font-size: 45px;
                line-height: 53px;
                color: #FFFFFF;
                position: relative;
                left: 156px;
                top: 52px;
                max-width: 465px;

                
                @media screen and (max-width:1200px) { 
                    top: 25px;
                    left: 125px;
                }

                @media screen and (max-width:992px) { 
                    max-width: 400px;
                    left: 155px;
                }
            }

            .consultation__img {
                position: relative;
                bottom: 50px;

                @media screen and (max-width:1200px) { 
                    bottom: 70px;
                    right: 15px;
                }

                @media screen and (max-width:992px) { 
                    bottom: 80px;
                    right: 0px;
                }
            }
        }

        .consultation__dark__container {
            background-image: url("../assets/pictures/dark.png");
            background-size: cover;
            display: flex;
            align-items: center;
            padding-left: 85px;
            display: flex;
            padding-right: 65px;
            padding-left: 100px;
            max-width: 764px;

            
            @media screen and (max-width:1200px) { 
                max-width: 630px;
                padding-right: 50px;
            }

            @media screen and (max-width:992px) { 
                padding-left: 150px;
            }

            @media screen and (max-width:768px) { 
                padding-left: 115px;
            }

            .consultation__dark__paragraph {

                width: 465px;
                font-size: 16px;
                font-weight: 400;
                margin-right: 15px;
                line-height: 130%;
                letter-spacing: 0.03em;
                color: #fff;

                @media screen and (max-width:992px) { 
                    display: none;
                }
            }

            .consultation__dark__btn {

                width: 174px;
                height: 39px;
                background: #219653;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0px 4px 30px rgba(51, 51, 51, 0.1);
                backdrop-filter: blur(10px);
                border-radius: 5px;
                transition: all 2s ease-out;

                            
                @media screen and (max-width:1200px) { 
                    padding: 0 15px;
                }

                &:hover {
                    background: #44bd32;
                }

                a {
                    width: 118px;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    color: #FFFFFF;
                }
            }
        }
    }
}
</style>