<template>
    <div class="home">
        <Header/>
        <Menu/>
        <div class="banner">
            <div class="container">
                <div class="banner__container">
                    <div class="banner__text">
                        <h2 class="banner__title">
                            <span>
                                Предоставление облачных услуг 
                            </span> и создание решений <br> в области ИИ под ключ
                        </h2>
                        <p class="banner__info">
                            Оставь заявку и работай на суперкомпьютере с любым установленным софтом удаленно
                        </p>
                    </div>
                    <Button/>
                    <div class="benefits__component">
                        <Benefits/>
                    </div>
                </div>
            </div>
        </div>
        <Services/>
        <Trust/>
        <Tasks/>
        <Partners/>
        <Light/>
        <Footer/>
    </div>
</template>

<script>
import Header from "../components/Header";
import Menu from "../components/Menu";
import Button from "../components/Button";
import Benefits from "../components/Benefits";
import Services from "../components/Services";
import Trust from "../components/Trust"
import Tasks from "../components/Tasks";
import Reviews from "../components/Reviews";
import Partners from "../components/Partners";
import Light from "../components/Light";
import Footer from "../components/Footer";


export default {
    name: "home",
    components: {
        Header,
        Menu,
        Button,
        Benefits,
        Services,
        Trust,
        Tasks,
        Reviews,
        Partners,
        Light,
        Footer
    }
};
</script>

<style lang="scss" scoped>

.home {
    .banner {
        background: linear-gradient(0deg, #000000, #000000);
        margin-bottom: 160px;

        @media screen and (max-width:768px) { 
            margin-bottom: 200px;
        }

        @media screen and (max-width:576px) { 
            margin-bottom: 50px;
        }

        .benefits__component {
            position: relative;
            top: 150px;

            @media screen and (max-width:1200px) { 
                top: 90px;
            }

            @media screen and (max-width:992px) { 
                top: 50px;
            }
        }

        .container {
            @media screen and (max-width:1200px) { 
                width: auto;
            }
        }

        &__container {
            background-image: url(../assets/pictures/brain.png);
            background-repeat: no-repeat;
            background-position: right;
            padding-top: 109px;
            padding-bottom: 100px;
            padding-left: 100px;
            margin: 0 auto;
            height: 678px;
            max-width: 1506px;

            @media screen and (max-width:1200px) { 
                padding-top: 50px;
                padding-bottom: 50px;
                padding-left: 50px;
                background-position-x: 182px;
                background-position-y: top;
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
                height: 630px;
            }

            .banner__text {

                @media screen and (max-width:768px) { 
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .banner__title {

                    span {
                        font-weight: 500;
                        color: #219653;
                    }
                    
                    font-weight: 300;
                    font-size: 44px;
                    line-height: 130%;
                    color: #FAFAFA;
                    margin-bottom: 26px;
                    width: 720px;

                    @media screen and (max-width:1200px) { 
                        width: 710px;
                    }

                    @media screen and (max-width:576px) { 
                        width: auto;
                        font-size: 35px;
                        padding: 0 20px;

                        br {
                            display: none;
                        }
                    }
                }

                .banner__info {

                    font-size: 16px;
                    line-height: 130%;
                    letter-spacing: 0.03em;
                    color: #FAFAFA;
                    margin-bottom: 25px;
                    width: 351px;

                    @media screen and (max-width:992px) { 
                        width: 382px;
                    }

                    @media screen and (max-width:768px) { 
                        font-size: 20px;
                        width: auto;
                    }

                    @media screen and (max-width:576px) { 
                        width: 315px;
                    }
                }
            }
        }
    }
}

</style>
    