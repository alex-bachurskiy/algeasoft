<template>
    <div class="instances">
        <div class="container">
            <div class="instances__container">
                <table class="instances__table">
                    <tbody>
                        <tr>
                            <th>Instance name</th>
                            <th>GPU</th>
                            <th>vCPU</th>
                            <th>RAM,Gb</th>
                            <th>Storage NVMe EBS,Gb</th>
                            <th>Ethernet throughput, Gb/s</th>
                            <th>EBS throughput, Mbit/s</th>
                        </tr>
                        <tr class="table-row">
                            <td>K80_1.4</td>
                            <td>1</td>
                            <td>4</td>
                            <td>61</td>
                            <td>100</td>
                            <td> &#60;10</td>
                            <td>1500</td>
                        </tr>
                        <div class="instances__table__btn">
                            <router-link class="table__button" to="">
                                Запросить цену
                            </router-link>
                        </div>
                        <tr class="table-row">
                            <td>K80_8.32</td>
                            <td>8</td>
                            <td>32</td>
                            <td>488</td>
                            <td>200</td>
                            <td>10</td>
                            <td>4500</td>
                        </tr>
                        <div class="instances__table__btn">
                            <router-link class="table__button" to="">
                                Запросить цену
                            </router-link>
                        </div>
                        <tr class="table-row">
                            <td>K80_16.64</td>
                            <td>16</td>
                            <td>64</td>
                            <td>732</td>
                            <td>500</td>
                            <td>25</td>
                            <td>7000</td>
                        </tr>
                        <div class="instances__table__btn">
                            <router-link class="table__button" to="">
                                Запросить цену
                            </router-link>
                        </div>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

</script>


<style scoped lang="scss"> 
.instances {

    .container {
        @media screen and (max-width:1200px) { 
            display: none;
        }
    }
    
    &__container {
        max-width: 1506px;
        margin: 0 auto;
        .instances__table {

            display: flex;
            font-size: 16px;
            line-height: 130%;
            letter-spacing: 0.03em;
            color: #333333;
            max-width: 1240px;
            margin: 0 auto;

            tbody {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                
                tr {
                    display: flex;
                    height: 43px;
                    border-radius: 5px;
                    align-items: center;
                    padding-left: 33px;

                    width: 1069px;                

                    &:nth-of-type(1) {
                        font-weight: 500;
                        line-height: 19px;
                        padding-right: 30.5px;
                        padding-left: 10px;   
                        justify-content: space-between;                 
                                        
                        th {

                            &:nth-of-type(1) {
                                width: 113px;
                            }
                            &:nth-of-type(2) {
                                width: 32px;
                            }
                            &:nth-of-type(3) {
                                width: 40px;
                            }
                            &:nth-of-type(4) {
                                width: 59px;
                            }
                            &:nth-of-type(5) {
                                width: 170px;
                            }
                            &:nth-of-type(6) {
                                width: 200px;
                            }
                        }
                    } 
                    &:nth-of-type(2) {
                        
                        background: #219653;
                        box-shadow: 0px 4px 30px rgba(33, 150, 83, 0.15);
                        color: #FFFFFF;

                        td {
                            &:nth-of-type(1) {
                                margin-right: 80px;
                            }
                            &:nth-of-type(2) {
                                margin-right: 58px;
                            }
                            &:nth-of-type(3) {
                                margin-right: 73px;
                            }
                            &:nth-of-type(4) {
                                margin-right: 127px;
                            }
                            &:nth-of-type(5) {
                                margin-right: 175px;
                            }
                            &:nth-of-type(6) {
                                margin-right: 198px;
                            }
                            
                        }
                    }
                    &:nth-of-type(3) {
                        td {
                            &:nth-of-type(1) {
                                margin-right: 71px;
                            }
                            &:nth-of-type(2) {
                                margin-right: 54px;
                            }
                            &:nth-of-type(3) {
                                margin-right: 63px;
                            }
                            &:nth-of-type(4) {
                                margin-right: 122px;
                            }
                            &:nth-of-type(5) {
                                margin-right: 182px;
                            }
                            &:nth-of-type(6) {
                                margin-right: 200px;
                            }
                        }
                    }
                    &:nth-of-type(4) {
                        background: rgba(33, 150, 83, 0.05);
                        td {

                            &:nth-of-type(1) {
                                margin-right: 55px;
                            }
                            &:nth-of-type(2) {
                                margin-right: 50px;
                            }
                            &:nth-of-type(3) {
                                margin-right: 65px;
                            }
                            &:nth-of-type(4) {
                                margin-right: 122px;
                            }
                            &:nth-of-type(5) {
                                margin-right: 182px;
                            }
                            &:nth-of-type(6) {
                                margin-right: 200px;
                            }
                        }
                    }
                }

                .instances__table__btn {

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 2px solid #219653;
                    
                    box-sizing: border-box;
                    filter: drop-shadow(0px 4px 30px rgba(51, 51, 51, 0.1));
                    backdrop-filter: blur(10px);
                    border-radius: 5px;
                    margin-left: 10px;
                    height: 39px;
                    width: 161px;

                    a {
                        color: #219653;
                    }

                    &:nth-of-type(1) {
                        background: #219653;
                        box-shadow: 0px 4px 30px rgba(33, 150, 83, 0.15);
                        color: #FFFFFF;

                        a {
                            color: #FFFFFF;
                        }
                    }

                    .table__button {
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 16px;
                        margin-left: 10px;
                    }
                }
            }
        }
    }
}

</style>