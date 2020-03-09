<template>
  <div>
   <div class="contact pt-1">
      <h1>קינוחים</h1>
      <hr class="hr">
       <div class="container">
         <div class="row" >
             <div class="col-sm-5 col-12 mt-1 mb-3  d-mr-0 first" v-for="(first,index) in deserts" :key="first">
                 <h2>{{deserts[index].title}} <span class="price float-right"> {{deserts[index].price}} <i class="fas fa-shekel-sign"></i></span></h2>
                 <h4>{{deserts[index].desc}}</h4>
                 <br><br>
             </div>
            
         </div>
     </div>
   </div>
  </div>
</template>

<script>
import deserts from '../dataCollection/deserts.js'


export default {
    data() {
        return {
            deserts:deserts
        }
    },
}
</script>

<style scoped>
  @import '../../../src/assets/css/menuCatg.css';
</style>