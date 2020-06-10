<template>
    <div>
        <video id="videoBg" poster="../public/img/poster.jpg" autoplay muted loop>
         <source src="../public/img/steak.mp4" type="video/mp4">
         </video>
       <appheader></appheader>
                <transition 
                enter-active-class="animated slideInRight delay-0"
                leave-active-class="animated slideOutLeft delay-0"
                mode="out-in"
                >
                    <router-view></router-view>
                </transition>
       <footer>
           <appfooter></appfooter>
       </footer>
            
    </div>
</template>


<script>
import home from './views/Home.vue';
import header from './views/Header.vue'
import footer from './views/Footer.vue'
export default {
  components:{
            appheader:header,
            apphome:home,
            appfooter:footer
        },
   }

</script>
<style >
 @import '../src/assets/css/app.css';
 @import '../src/assets/css/header.css';
 @import '../src/assets/css/footer.css';
</style>
