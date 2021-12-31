<template>
    <div class="questions_and_answers">
        <Header/>
        <Menu/>
            <div class="container">
                <div class="questions_and_answers__container">
                    <div class="questions_and_answers__navigation__container">
                        <router-link class="menu-item" to="/">Главная</router-link> 
                        <span> / </span>
                        <router-link class="menu-item" to="/questions_and_answers">Вопрос-ответ</router-link>
                    </div>
                    <div class="questions_and_answers__title__container">
                        <h2 class="questions_and_answers__title">
                            Вопрос-ответ
                        </h2>
                    </div>
                    <div class="dropdown__container">
                        <div class="dropdown">
                            <button class="dropbtn">Как создать виртуальную машину?</button>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Как создать виртуальную машину?</button>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Чем отличается тип инстанса Volume-backed от Local?</button>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Чем отличается тип инстанса Volume-backed от Local?</button>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Как подключиться к Виртуальной машине с Windows Server?</button>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Как подключиться к Виртуальной машине с Windows Server?</button>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Как подключиться к Виртуальной машине с Linux?</button>
                            <div class="dropdown-content">
                                <p>
                                    С помощью SSH-клиента PuTTY
                                    Для облачных образов обычно используются типовые логины (username) ubuntu, 
                                    debian, fedora, opensuse, cloud-user.
                                    Скачайте файл закрытого ключа, который находится в разделе 
                                    Ключевые пары и имеет формат keyname-username.pem.ppk.
                                    Настройте сессию в PuTTY:
                                    Host Name — IP-адрес виртуальной машины.
                                    Укажите скачанный файл ключа .ppk в разделе Connections > SSH > Auth.
                                </p>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Чем отличается тип инстанса Volume-backed от Local?</button>
                        </div>
                    </div>
                    <div class="questions_and_answers__button__container">
                        <p class="button__text">
                            Показать еще
                        </p>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
    
</template>

<script>
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";


export default {
  name: "questions and answers",
  components: {
    Header,
    Menu,
    Footer
  }
};
</script>

<style scoped lang="scss">
.questions_and_answers {

    &__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 100px 100px 0 100px;

        @media screen and (max-width: 1200px) {
            margin-left: 20px;
        }

        @media screen and (max-width:992px) { 
            margin-bottom: 80px;
        }

        @media screen and (max-width:768px) { 
            margin-left: 50px;
        }

        @media screen and (max-width:576px) { 
            margin-right: 25px;
            margin-left: 25px;
            text-align: center;
        }

        .questions_and_answers__navigation__container {
            font-size: 16px;
            line-height: 110%;
            letter-spacing: 0.03em;
            color: rgba(0, 0, 0, 0.25);
            margin-bottom: 12px;

            .menu-item {
                color: rgba(0, 0, 0, 0.25);
            }
        }

        .questions_and_answers__title__container {
            margin-bottom: 40px;
            .questions_and_answers__title {
                font-weight: 500;
                font-size: 44px;
                line-height: 130%;
                color: #219653;
            }
        }

        .dropdown__container {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 231px;

            @media screen and (max-width:576px) { 
                justify-content: center;
            }

            .dropdown {
                position: relative;
                display: inline-block;
                margin-right: 20px;
                margin-bottom: 10px;

                @media screen and (max-width: 1200px) {
                    margin-right: 40px;
                }

                @media screen and (max-width:576px) { 
                    margin-right: 0;
                }

	            &:hover {
                    .dropdown-content {
                        display: block;
                    }
	            }
                    
                &:nth-child(even) {
                    margin-right: 0;
                }

                &:nth-child(7) {
                    margin-bottom: 0;

                    @media screen and (max-width:576px) { 
                        margin-bottom: 10px;
                    }
                }

                &:nth-child(8) {
                    margin-bottom: 0;
                }

                .dropbtn {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-left: 30px;
                    align-items: center;
                    color: #000000;
                    font-size: 16px;
                    background: #FFFFFF;
                    border: 1px solid #000000;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 110%;
                    letter-spacing: 0.03em;
                    box-sizing: border-box;
                    border-radius: 5px;
                    cursor: pointer;
                    height: 60px;
                    width: 564px;
                    text-align: left;

                    @media screen and (max-width: 1200px) {
                        padding: 10px 0 10px 15px;
                        width: 400px;
                    }

                    @media screen and (max-width:992px) {
                        height: 100px;
                        max-width: 245px;
                    }

                    @media screen and (max-width:576px) { 
                        max-width: 245px;
                    }

                    &::after {
                        content: url("../assets/pictures/arrow-right(black).png");
                        margin-right: 33px;
                    }
                }

                .dropdown-content {
                    display: none;
                    position: absolute;
                    background-color: #FFF;
                    bottom: -170px;
                    padding: 0 59px 20px 30px;
                    border-bottom: 1px solid #000;
                    border-left: 1px solid #000;
                    border-right: 1px solid #000;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;

                    @media screen and (max-width: 1200px) {
                        bottom: -210px;
                        padding-left: 15px;
                        padding-right: 15px;
                    }

                    @media screen and (max-width:992px) {
                        bottom: -355px;
                    }

                    @media screen and (max-width:576px) { 
                        text-align: start;
                    }

                    z-index: 1;
                    a {
                        color: black;
                        padding: 12px 16px;
                        text-decoration: none;
                        display: block;
                    }
                }
            }

        }

        .questions_and_answers__button__container {

            margin: 0 auto;
            margin-bottom: 41px;
            width: 156px;

            .button__text {
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                display: flex;
                align-items: flex-start;
                color: #219653;

                &::after {
                    content: url("../assets/pictures/arrow-right.png");
                    margin-left: 18px;            
                }
            }
        }
    }
}
    

    

 
</style>