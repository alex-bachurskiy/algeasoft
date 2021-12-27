<template>
    <div class="technical_support">
        <Header/>
        <Menu/>
        <div class="container">
            <div class="technical_support__container">
                <div class="technical_support__navigation__container">
                    <router-link class="menu-item" to="/">Главная</router-link> 
                    <span> / </span>
                    <router-link class="menu-item" to="/technical_support">Техническая поддержка</router-link>
                </div>
                <div class="technical_support__title__container">
                    <h2 class="technical_support__title">
                        Техническая поддержка
                    </h2>
                    <p class="technical_support__paragraph">
                        Если у Вас есть технические или финансовые вопросы заполните форму ниже.
                    </p>
                </div>
                <div class="technical_support__form__container">
                    <form class="technical_support__form">
                        <input class="input" type="text" name="question" placeholder="Имя *" required>
                        <input class="input" type="text" name="question" placeholder="Ваш e-mail" >
                        <input class="input" type="text" name="question" placeholder="Телефон">
                        <input class="input" type="text" name="question" placeholder="Ваше сообщение">
                        <label class="custom-checkbox">
                            <input required type="checkbox" value="value-1">
                            <span class="check__text">
                                Я даю Согласие на обработку персональных данных на условиях, 
                                определенных Политикой конфиденциальности
                            </span>
                        </label>

                        <input type="submit" value="Заказать звонок" class="submit">
                    </form>
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
    name: "technical_support",
    components: {
        Header,
        Menu,
        Footer
    }
};
</script>

<style lang="scss">
.technical_support {

    &__container {

        padding: 100px 0 105px 100px;

        .technical_support__navigation__container {
            font-size: 16px;
            line-height: 110%;
            letter-spacing: 0.03em;
            color: rgba(0, 0, 0, 0.25);
            margin-bottom: 12px;

            .menu-item {
                color: rgba(0, 0, 0, 0.25);
            }
        }

        .technical_support__title__container {
            margin-bottom: 53px;

            .technical_support__title {
                font-weight: 500;
                font-size: 44px;
                line-height: 130%;
                color: #219653;
            }

            .technical_support__paragraph {
                font-size: 16px;
                line-height: 130%;
                letter-spacing: 0.03em;
                color: #333333;
            }
        }

        .technical_support__form__container {

            .technical_support__form {
                display: flex;
                flex-direction: column;

                .input {
                    height: 41px;
                    padding: 10px;
                    border: 1px solid #333333;
                    border-radius: 3px;
                    margin-bottom: 20px;
                    width: 400px;

                    &::placeholder {
                        font-size: 16px;
                        line-height: 130%;
                        letter-spacing: 0.03em;
                        color: #828282;
                    }
                }

                .custom-checkbox {
                    & > input {
                        position: absolute;
                        z-index: -1;
                        opacity: 0;
                        &:not(:disabled):not(:checked) {
                            & + span {
                                &:hover {
                                    &::before {
                                        border-color: #c5ffde;
                                    }
                                }
                            }
                        }
                        &:not(:disabled):active {
                            & + span {
                                &::before {
                                    background-color: #a7ffcd;
                                    border-color: #b8fcd5;
                                }
                            }
                        }
                        &:focus {
                            & + span {
                                &::before {
                                    box-shadow: 0 0 0 0.2rem rgba(0, 255, 21, 0.25);
                                }
                            }
                            &:not(:checked) {
                                & + span {
                                    &::before {
                                        border-color: #76ffb2;
                                    }
                                }
                            }
                        }
                        &:checked {
                            & + span {
                                &::before {
                                    border-color: #22c267;
                                    background-color: #219653;
                                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
                                }
                            }
                        }
                        &:disabled {
                            & + span {
                                &::before {
                                    background-color: #e9ecef;
                                }
                            }
                        }
                    }
                    & > span {
                        width: 400px;
                        font-weight: 300;
                        font-size: 12px;
                        line-height: 14px;
                        color: #333333;

                        display: inline-flex;
                        align-items: center;
                        user-select: none;
                        &::before {
                            content: '';
                            display: inline-block;
                            width: 20px;
                            height: 20px;
                            flex-shrink: 0;
                            flex-grow: 0;
                            border: 1px solid #333333;
                            border-radius: 5px;
                            margin-right: 30px;
                            background-repeat: no-repeat;
                            background-position: center center;
                            background-size: 50% 50%;
                        }
                    }
                }   
                .submit {
                    background: #219653;
                    box-shadow: 0px 4px 30px rgba(33, 150, 83, 0.15);
                    border-radius: 5px;
                    border: 0;
                    cursor: pointer;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                    color: #FFFFFF;
                    padding: 14px 86px;
                    margin-top: 30px;
                    width: 300px;
                }
            }
        }
    }
}
</style>