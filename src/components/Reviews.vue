<template>
    <div class="reviews">
        <div class="container">
            <div class="reviews__container">
                <div class="reviews__title__container">
                    <h2 class="reviews__title">
                        Наши отзывы
                    </h2>
                </div>
                <carousel>
                  <slide>
                    <img src="@/assets/pictures/slide.png">
                  </slide>
                  <slide>
                    <img src="@/assets/pictures/slide.png">
                  </slide>
                  <slide>
                    <img src="@/assets/pictures/slide.png">
                  </slide>
                  <slide>
                    <img src="@/assets/pictures/slide.png">
                  </slide>
                  <slide>
                    <img src="@/assets/pictures/slide.png">
                  </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: "Home",

  components: {
    Carousel,
    Slide
  },

  data () {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }

};
</script>

<style lang="scss" scoped>
  .reviews {

    &__container {
      .reviews__title__container {
        .reviews__title {
          font-weight: 500;
          font-size: 45px;
          line-height: 53px;
          color: #219653;
        }
      }
    }
  }
</style>