<template>
    <section class="hero-02">
        <div class="container-hero-02" data-aos="fade-up" data-aos-delay="150">
            <h1>LOREM IPSUM <span>LOREM</span></h1>
            <Swiper
                :modules="[SwiperAutoplay, SwiperEffectCreative]"
                :slides-per-view="1"
                :loop="true"
                :autoplay="{
                    delay: 4000,
                    disableOnInteraction: true,
                }"
            >
                <SwiperSlide>
                    <img src="/app/images/Ellipse-10.svg" alt="">
                    <div class="hero-02-content">
                        <div class="title">
                            <p>Lorem Ipsum is simply</p>
                        </div>
                        <div class="des">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/app/images/Ellipse-10.svg" alt="">
                    <div class="hero-02-content">
                        <div class="title">
                            <p>Lorem Ipsum is simply</p>
                        </div>
                        <div class="des">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>