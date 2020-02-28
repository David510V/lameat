<template>
  <div>
   <div class="contact pt-1">
      <h1>ראשונות</h1>
      <hr class="hr">
       <div class="container">
         <div class="row" >
             <div class="col-sm-5 col-12 mt-1 mb-3  d-mr-0 first" v-for="(first,index) in firsts">
                 <h2>{{firsts[index].title}} <span class="price float-right"> {{firsts[index].price}} <i class="fas fa-shekel-sign"></i></span></h2>
                 <h4>{{firsts[index].desc}}</h4>
                 <br><br>
             </div>
            
         </div>
     </div>
   </div>
  </div>
</template>

<script>
import firsts from '../dataCollection/firsts.js'



export default {
    data() {
        return {
            firsts:firsts
        }
    },
}
</script>

<style scoped>
  @import '../../../src/assets/css/menuCatg.css';
</style>