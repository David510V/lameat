<template>
  <div>
   <div class="contact pt-1">
      <h1>עיקריות</h1>
      <hr class="hr">
       <div class="container">
         <div class="row" >
            <div class="col-sm-5 col-12 mt-1 mb-3  d-mr-0 first" v-for="(item,index) in steaks" >
                 <h2>{{item.title}} </h2>
                 <h4>200 גרם<span class="price float-right"> {{item.price1}} <i class="fas fa-shekel-sign"></i></span></h4>
                 <br>
                 <h4>300 גרם<span class="price float-right"> {{item.price2}} <i class="fas fa-shekel-sign"></i></span></h4>
                 <br>
             </div>

             <div class="col-sm-5 col-12 mt-1 mb-3  d-mr-0 first" v-for="(first,index) in main">
                 <h2>{{first.title}} <span class="price float-right"> {{first.price}} <i class="fas fa-shekel-sign"></i></span></h2>
                 <h4>{{first.desc}}</h4>
                 <br><br>
             </div>
            
         </div>
     </div>
   </div>
  </div>
</template>

<script>
import main from '../dataCollection/mainDish.js'
import steaks from '../dataCollection/steaks.js'
console.log(steaks)
export default {
    data() {
        return {
            main:main,
            steaks:steaks
        }
    },
}
</script>

<style scoped>
  @import '../../../src/assets/css/menuCatg.css';
</style>