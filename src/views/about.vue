<template>
    <div class="about">
        <Header/>
        <Menu/>
        <div class="banner">
            <div class="container">
                <div class="banner__container">
                    <div class="banner__navigation__container">
                        <router-link class="menu-item" to="/">Главная</router-link> 
                        <span> / </span>
                        <router-link class="menu-item" to="/about">О компании</router-link>
                    </div>
                    <div class="banner__text">
                        <h2 class="banner__title">
                            <span>
                                О компании
                            </span> 
                            <br>IT-инфраструктура 
                            <br>для амбициозных проектов
                        </h2>
                        <p class="banner__info">
                            Мы помогаем компаниям уделять больше внимания своим продуктам и проектам, 
                            <br> а на себя берем обязательства по поддержке инфраструктуры
                        </p>
                    </div>
                </div>    
            </div>
        </div>
        <Partners/>
        <Tasks/>
        <div class="about-us__container">
            <div class="about-us__information">
                <h2 class="about-us__title">
                    О нас
                </h2>
                <p class="about-us__paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fames hendrerit vivamus facilisis risus.
                    Sed leo nibh amet ridiculus gravida elit tincidunt. Massa adipiscing turpis eget proin placerat amet at 
                    tortor, ullamcorper. Eu bibendum fermentum arcu tempus in scelerisque amet cras. Neque, nunc, faucibus 
                    scelerisque nulla ut suspendisse. Enim, id ut ullamcorper fringilla donec hendrerit nulla ullamcorper 
                    nulla. Aliquam in facilisi sit amet. Sed neque elit in quis tristique magna. Natoque arcu elit, molestie 
                    suspendisse arcu enim congue lorem. Hac non phasellus nulla iaculis sed. Dui diam arcu, id vel turpis potenti molestie pellentesque est. Odio placerat in neque, tortor ultricies volutpat.
                    Ultricies dui pulvinar vel, duis consectetur a enim amet. Ut habitant aliquet bibendum et enim in vulputate dignissim 
                    aliquam. Vel tristique ipsum ultrices eget consequat nunc, quis sed ut. Sed ornare id metus, semper gravida amet faucibus tortor. Feugiat dolor eget donec tempus, vel. Lorem aliquet hac aliquam velit mi et sit elementum. 
                    Amet semper cursus gravida elit nam aliquet condimentum. Mauris pellentesque phasellus tristique nulla 
                    vitae senectus et risus non. Ac et mauris praesent enim sed. Interdum nullam in scelerisque risus urna 
                    magna. Laoreet malesuada at dictum est. Volutpat neque at enim quam eu pellentesque mauris, integer 
                    ornare. Neque, morbi in commodo sagittis, eget at non.
                </p>
            </div>
            <img src="@/assets/pictures/about.png" alt="about">
        </div>
        <Reviews/>
        <Footer/>
    </div>
</template>

<script>
import Header from "../components/Header";
import Menu from "../components/Menu";
import Partners from "../components/Partners";
import Tasks from "../components/Tasks";
import Footer from "../components/Footer";


export default {
    name: "about",
    components: {
        Header,
        Menu,
        Partners,
        Tasks,
        Footer
    }
};

</script>

<style scoped lang="scss">

.about {
    
    .banner {
        background: linear-gradient(0deg, #000000, #000000);

        .container {
            @media screen and (max-width:1200px) { 
                width: auto;
            }
        }

        &__container {
        background-image: url(../assets/pictures/office.png);
        background-position-x: 665px;
        background-repeat: no-repeat;
        background-position: right;
        padding-top: 60px;
        padding-bottom: 100px;
        padding-left: 100px;
        margin: 0 auto;

        @media screen and (max-width:1200px) {
            background-size: contain; 
            padding-top: 50px;
            padding-bottom: 50px;
            padding-left: 50px;
            background-position-y: top;
        }

        @media screen and (max-width:992px) { 
            background-position-y: center;
        }

        @media screen and (max-width:768px) { 
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-left: 0;
            background-size: cover;
        }

        @media screen and (max-width:576px) { 
            height: auto;
        }
        
        .banner__navigation__container {

            color: rgba(255, 255, 255, 0.25);

            .menu-item {
                font-weight: 400;
                color: rgba(255, 255, 255, 0.25);
                font-size: 16px;
                line-height: 110%;
                letter-spacing: 0.03em;
            }
        }

        .banner__text {

            @media screen and (max-width:768px) { 
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }

            .banner__title {

                font-weight: 300;
                font-size: 44px;
                line-height: 130%;
                color: #FAFAFA;
                margin-bottom: 26px;
                max-width: 826px;

                @media screen and (max-width:576px) { 
                    width: auto;
                    font-size: 35px;
                    padding: 0 20px;

                    br {
                        display: none;
                    }
                }

                span {
                    color: #219653;
                    font-weight: 500;
                }
            }

            .banner__info {
                font-weight: 400;
                font-size: 16px;
                line-height: 130%;
                letter-spacing: 0.03em;
                color: #FFFFFF;
                max-width: 700px;
            }
        }
    }
  }

  .about-us__container {
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-left: 100px;
    margin-bottom: 100px;
    
    @media screen and (max-width:1200px) {
        padding-right: 50px;
        padding-left: 50px;
        flex-direction: column;
    }

    @media screen and (max-width:576px) {
        text-align: center;
        padding-right: 20px;
        padding-left: 20px;
        margin-bottom: 40px;
    }

    .about-us__information {
        display: flex;
        flex-direction: column;
        margin-right: 100px;
        width: 700px;
            
        @media screen and (max-width:1200px) {
            margin-right: 0;
            margin-bottom: 50px;
            width: auto;
        }

        .about-us__title {
            font-weight: 500;
            font-size: 45px;
            line-height: 53px;
            color: #219653;
            margin-bottom: 24px;

            @media screen and (max-width:1200px) {
                text-align: center;
            }
        }
        
        .about-us__paragraph {
            font-size: 16px;
            line-height: 130%;
            letter-spacing: 0.03em;
            color: #000000;
        }
    }


  }
}
</style>