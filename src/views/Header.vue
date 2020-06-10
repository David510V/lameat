<template>
  <div id="header">
   <div class="container">
      <nav class="navbar  navbar-expand-lg">

         
            <span class="navbar-brand mt-lg-3 mb-5 d-xs-mt-0 fixed-top">
            <router-link class="home" active-class="active"  to="/" exact>
               <a class="nav-link lameat " href="#"><i class="fas fa-utensils"></i> LaMeat</a>
            </router-link>
               </span>
         

         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon mt-2 mr-4">  <i class="fas fa-bars" style="color:#fff; font-size:28px;"></i></span>
         </button>
         
            <div class="collapse navbar-collapse right" id="navbarNav">
               <ul  class="navbar-nav" >
                  <li class="nav-item">
               <router-link class="home" active-class="active"  to="/story" exact>
                  <a class="nav-link mr-lg-4 mr-0"  href="#">הסיפור</a>
               </router-link>
                  </li>
                  
                    <li class="nav-item">
               <router-link class="home" active-class="active"  to="/choose" exact>
                  <a class="nav-link mr-lg-4 mr-0"  href="#">תפריט</a>
               </router-link>
                  </li>
               </ul>

                  <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
               <router-link class="home" active-class="active"  to="/comments" exact>
                  <a class="nav-link mr-lg-4 mr-0" href="#">ביקורת</a>
               </router-link>
                  </li>

                  <li class="nav-item">
               <router-link class="home" active-class="active"  to="/contact" exact>
                  <a class="nav-link" href="#" >צור קשר</a>
               </router-link>
                  </li>
               
               </ul>
            </div>
       
     
   </nav>
   </div>
 
  
</div>

</template>

<script>

</script>

<style scoped>
#header{
   background: black;
}
.home{
  text-decoration: none;
  font-weight: bold
}
.navbar-brand
{
    position: absolute;
    left:49%;
    cursor: pointer;
    transform: translateX(-50%);
    color: white;
    font-size: 33px;
    font-family: 'Amatic SC';

}

.navbar-brand:hover{
   opacity: 2;
   color: rgb(172, 40, 40)
}
.navbar
{
   padding: 1em 0 !important; 
   background-color: black;
   text-align: center;
   
}

.navbar-toggler
{
    border: none !important;
    outline: none !important;
}

.navbar-nav{
   text-align: center;
}
.navbar-toggler-icon{
   color: white;
   border-color: rgb(255,102,203);
}

.nav-link{
   color: white;
   font-family: 'Amatic SC';
   font-size: 28px;
   
}

.nav-link:hover{
   opacity: 2;
   color: rgb(172, 40, 40)
}


@media (min-width: 320px) and (max-width:640px) {
  .navbar-brand
  {
     position: absolute;
     left:47%;
     transform: translateX(-50%);
     top: 15px;
     color: white;
  }
}
</style>