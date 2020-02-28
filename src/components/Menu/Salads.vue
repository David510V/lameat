<template>
  <div>
   <div class="contact pt-1">
      <h1>סלטים</h1>
      <hr class="hr">
       <div class="container">
         <div class="row" >
             <div class="col-sm-5 col-12 mt-1 mb-3  d-mr-0 first" v-for="(first,index) in salads">
                 <h2>{{salads[index].title}} <span class="price float-right"> {{salads[index].price}} <i class="fas fa-shekel-sign"></i></span></h2>
                 <h4>{{salads[index].desc}}</h4>
                 <br><br>
             </div>
            
         </div>
     </div>
   </div>
  </div>
</template>

<script>

import salads from '../dataCollection/salads.js'

export default {
    data() {
        return {
            salads:salads
        }
    },
}
</script>

<style scoped>
 @import '../../../src/assets/css/wines.css';
</style>