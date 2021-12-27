<template>
    <div class="reviews">
        <div class="container">
            <div class="reviews__container">
                <div class="reviews__title__container">
                    <h2 class="reviews__title">
                        Наши отзывы
                    </h2>
                </div>
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide>
                        <img src="@/assets/pictures/slide.png">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/pictures/slide.png">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/pictures/slide.png">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/pictures/slide.png">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/pictures/slide.png">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

  export default {
    name: 'swiper-example-centered-slides',
    title: 'Centered slides',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 30,
          centeredSlides: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.reviews {
    overflow-x: hidden;
    &__container {
        max-width: 1506px;
        margin-left: 100px;
        .reviews__title__container {
            margin-bottom: 44px;
            .reviews__title {
                font-weight: 500;
                font-size: 45px;
                line-height: 53px;
                color: #219653;
            }
        }
    }
            &.swiper-container {
            .swiper {
                .swiper-wrapper{
                    display: flex;
                    .swiper-slide,
                    .swiper-slide-active {
                        width: unset;
                    }
                }
            }    
        }
}
</style>

