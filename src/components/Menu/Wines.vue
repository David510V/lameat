<template>
  <div>
   <div class="contact pt-1">
      <h1>יינות</h1>
      <hr class="hr">
       <div class="container">
         <div class="row" >
             <div class="col-sm-5 col-12 mt-1 mb-3  d-mr-0 first" v-for="(first,index) in wines">
                 <h2>{{wines[index].title}} </h2>
                 <h4>כוס<span class="price float-right"> {{wines[index].price1}} <i class="fas fa-shekel-sign"></i></span></h4>
                 <br>
                 <h4>בקבוק<span class="price float-right"> {{wines[index].price2}} <i class="fas fa-shekel-sign"></i></span></h4>
                 <br>
             </div>
            
         </div>
     </div>
   </div>
  </div>
</template>

<script>
import wines from '../dataCollection/wines.js'


export default {
    data() {
        return {
            wines:wines
        }
    },
}
</script>

<style scoped>
   @import '../../../src/assets/css/wines.css';
    .price{
    font-size: 30px;
    font-weight: bolder
 }
 .price .fas{
     font-size: 20px;
 }
</style>