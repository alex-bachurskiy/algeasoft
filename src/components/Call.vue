<template>
    <div class="modal-shadow">
        <div class="modal">
            <div class="modal-close" @click="closeModal">
                x
            </div>
            <div class="modal__title__container">
                <h2 class="modal__title">
                    Заказать обратный звонок
                </h2>
                <p class="modal__paragraph">
                    Мы перезвоним Вам в рабочее время.
                </p>
            </div>
            <div class="modal__form__container">
                <form class="modal__form">
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
</template>

import Window from "../components/Thanks";

<script>
    export default {
        name: "ModalWindow",

        methods: {
            closeModal () {
                // https://ru.vuejs.org/v2/api/#vm-emit
                this.$emit('showPopup', false)
            }
        }
    }
</script>

<style scoped lang="scss">

    .modal {
        display: flex;
        position: absolute;
        flex-wrap: wrap;
        width: 377px;
        padding: 35px;
        background: #FFFFFF;
        border-radius: 7px;
        right: 200px;
        top: 180px;
        z-index: 777;

        @media screen and (max-width:1200px) { 
            top: 162px;
            left: 590px;
            padding: 25px;
        }

        @media screen and (max-width:992px) { 
            left: 425px;
            top: 180px;
        }
        
        @media screen and (max-width:768px) { 
            left: 375px;
        }
        
        @media screen and (max-width:576px) { 
            width: 340px;
            left: 20px;
            top: 305px;
            padding-right: 20px;
            padding-left: 20px;
            justify-content: center;
            position: static;
        }

        .modal-close {
            color: #333333;
            font-weight: 900;
            cursor: pointer;
            position: absolute;
            top: 10px;
            left: 355px; 

            @media screen and (max-width:576px) { 
                top: 250px;
                left: 350px;
                font-size: 20px; 
            } 
        }

        .modal__title__container {
            color: #333333;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
            
            @media screen and (max-width:576px) { 
                text-align: center;
            } 

            .modal__title {
                font-weight: 900;
                font-size: 22px;
                line-height: 26px;
                margin-bottom: 5px;
            }
            .modal__paragraph {
                font-weight: 400;
                font-size: 16px;
                line-height: 130%;
                letter-spacing: 0.03em;
            }
        }

        .modal__form__container {

            .modal__form {
                display: flex;
                flex-direction: column;

                .input {
                    height: 41px;
                    padding: 10px;
                    border: 1px solid #333333;
                    border-radius: 3px;
                    margin-bottom: 20px;
                    max-width: 400px;

                    @media screen and (max-width:1200px) { 
                        margin-bottom: 15px;
                    }

                    @media screen and (max-width:576px) {
                        max-width: 310px;
                    }

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
                        max-width: 400px;
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
                    max-width: 300px;

                    @media screen and (max-width:1200px) { 
                        margin-bottom: 15px;
                    }

                }
            }
        }
    }
</style>
