<template>
    <div class="nav-01">
        <nav>
            <div class="container">
                <div class="nav-con">
                    <div class="logo">
                        <div class="logo-img">
                            <img src="/app/images/logo.png" alt="">
                        </div>
                        <div class="logo-text">
                            <h2>LOREM <span>IPSUM</span></h2>
                        </div>
                    </div>
                    <ul class="menu" id="sidemenu">
                        <li><a href="#">LOREM</a></li>
                        <li><a href="#">LOREM</a></li>
                        <li><a href="#">LOREMIPSUM</a></li>
                        <li><a href="#">LOREM & IPSUM</a></li>
                        <li><a href="#">LOREM</a></li>
                        <Icon name="mi:close" @click="closemenu()" />
                    </ul>
                    <Icon name="mi:reorder" @click="openmenu()" />
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
methods: {
    openmenu() {
      const sidemenu = document.getElementById("sidemenu");
      sidemenu.style.right = "0";
    },
    closemenu() {
      const sidemenu = document.getElementById("sidemenu");
      sidemenu.style.right = "-250px";
    },
},
}
</script>