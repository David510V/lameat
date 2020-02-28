<template>
  <div id="header">
     <br><br>
   <div class="container mt-5">
      <div class="row">
         <div class="col-sm">
            <router-link class="home" to="/first" exact>
            <h1 class="menu">||      ראשונות</h1>
            </router-link>
         </div>
         <div class="col-sm">
            <router-link class="home" to="/main"  exact>
            <h1 class="menu">||     עיקריות</h1>
            </router-link>
         </div>
         <div class="col-sm">
            <router-link class="home" to="/business"   exact>
            <h1 class="menu">||     עסקיות</h1>
            </router-link>
         </div>
      </div>
      <hr>
      <div class="row">
         <div class="col-sm">
            <router-link class="home" to="/salads" exact>
            <h1 class="menu">||     סלטים</h1>
            </router-link>
         </div>
         <div class="col-sm">
            <router-link class="home" to="/deserts" exact>
            <h1 class="menu">||     קינוחים</h1>
            </router-link>
         </div>
         <div class="col-sm">
            <router-link class="home" to="/wines" exact>
            <h1 class="menu">||     יינות</h1>
            </router-link>
         </div>
      </div>
   </div>
   
</div>

</template>

<script>
export default {
    
}
</script>

<style scoped>
.home{
   text-decoration: none;
}
#header{
   height:590px; 
}

.menu{
   color: white;
   font-family: 'Amatic SC';
   cursor: pointer;
}
.menu:hover{
   opacity: 2;
   color: rgb(172, 40, 40)
}
hr{
   border: 0.5px solid white;
   margin-left:300px
}
.vl {
  border-left: 1px solid white;
  height: 50px;
}

#header{
   background-color: black
}
</style>