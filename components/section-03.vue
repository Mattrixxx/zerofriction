<template>
    <section class="hero-03">
        <div class="container-hero">
            <div class="content">
                <div class="title" data-aos="fade-up" data-aos-delay='150'>
                    <h1>LOREM IPSUM</h1>
                </div>
                <Card :product="data" data-aos="fade-up" data-aos-delay='200' />
            </div>
        </div>
    </section>
</template>
<script setup>
    const { data: data } = await useFetch('https://dummyjson.com/products?limit=3')
</script>