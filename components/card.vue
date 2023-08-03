<template>
    <div class="card-container">
        <a href="#" class="product-card" v-for="product in product?.products" :key="product">
            <div class="img-bg">
                <div class="product-tumb" :style="`background-image:url('${product?.thumbnail}');`"></div>
            </div>
            <div class="product-details">
                <h4>
                    <a href="#">{{ product?.title }}</a>
                </h4>
                <p class="product-description">{{ product?.description }}</p>
            </div>
        </a>
    </div>
</template>
<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const { product } = props;
</script>