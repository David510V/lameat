<template>
     
   <div class="contact pt-1">
      <h1>ליצירת קשר</h1>
      <hr>
       <div class="container">
         <div class="row">
             <div class="col-sm-4 col-12">
                 <h3>כתובת- דרך הים 25, חיפה</h3>
                 <br><br><br>
                 <h3>להזמנת מקום חייגו: 0484522**</h3>
                 <br><br><br>
                 <a href="https://www.facebook.com/"><i class="fab fa-facebook-f mb-3"></i></a><a href="https://www.instagram.com/"><i class="fab fa-instagram mb-3"></i></a>
             </div>
             <div class="col-sm-2"><br><br><br></div>

        <div class="col-sm-6 col-12">
            <h3>Map To The Place</h3>
            <GmapMap
                v-bind:center="center"
                v-bind:zoom="12"
               style="height: 400px;"
                >
                <GmapMarker
                    v-bind:key="index"
                    v-for="(m, index) in markers"
                    v-bind:position="m.position"
                    v-bind:clickable="true" 
                />
                </GmapMap>
                <br>
        </div>

         </div>

     </div>
   </div>
</template>

<script>
export default {
   data() {
       return {
           center: {lat: 32.804780 , lng:34.983590},
           markers:[
               {
                   position:{lat:32.804780, lng:34.983590}
               },
           ]
       }
   },
}
</script>

<style scoped>
@import '../../src/assets/css/contact.css';
</style>