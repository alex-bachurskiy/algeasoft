<template>
    <div class="partners">
        <div class="container">
            <div class="partners__container">
                <h1 class="partners__title">
                    Наши партнеры
                </h1>
                <div class="partner__logo__container">
                    <div class="partner__logo">
                        <img src="@/assets/pictures/sbrf.png" alt="sbrf">
                    </div>
                    <div class="partner__logo">
                        <img src="@/assets/pictures/alfa.png" alt="alfa">
                    </div>
                    <div class="partner__logo">
                        <img src="@/assets/pictures/bitrix.png" alt="bitrix">
                    </div>
                    <div class="partner__logo">
                        <img src="@/assets/pictures/bitrix24.png" alt="bitrix24">
                    </div>
                    <div class="partner__logo">
                        <img src="@/assets/pictures/qiwi.png" alt="qiwi">
                    </div>
                </div>            
            </div>
        
        </div>
    </div>
</template>

<style scoped lang="scss">

.partners {

    &__container {

        padding-top: 50px;
        padding-bottom: 80px;

        @media screen and (max-width:1200px) { 
            padding-bottom: 50px;
        }

        .partners__title {
            font-weight: 500;
            font-size: 45px;
            line-height: 53px;
            color: #219653;
            max-width: 339px;
            margin: 0 auto;

            @media screen and (max-width:576px) { 
                text-align: center;
            }
        }

        .partner__logo__container {

            display: flex;
            justify-content: center;
            margin: 50px 40px 0;

            @media screen and (max-width:1200px) { 
                flex-wrap: wrap;
            }
            
            .partner__logo {
                background: #FFFFFF;
                border-radius: 7px;
                width: 240px;
                height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 40px;

                &:last-child {
                    margin-right: 0;
                }

                @media screen and (max-width:1200px) { 
                    margin-bottom: 40px;

                    &:nth-child(4),
                    &:nth-child(5) {
                        margin-bottom: 0;
                    }
                }

                @media screen and (max-width:556px) { 
                    margin-right: 0;

                    &:nth-child(4) {
                        margin-bottom: 40px;
                    }
                }
            }

        }
    }
}
</style>