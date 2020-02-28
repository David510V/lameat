<template>
  <div>
  
   <div class="main" style="text-align:center;">
        <div class="container mt-3">
          <div class="row">
            <div class="col"><h1 class="head">מה הופך אותנו למיוחדים: </h1></div>
          </div>
          <div>
           <div class="row mt-3">
            <div class="col-4">
              <img class="icon2" src="../../public/img/meat.png" alt="Avatar"><br>
              <h2 class="icontext">בשר</h2><hr class="horiz">
              <p class="text">הבשר שלנו מגיע מהרפת הנמצאת בגולן הרחוקה. הבשר איננו מכיל הורמונים ממרצים ואנטיביוטיקות אלא חומרים טבעיים לחלוטין.</p>
            </div>
             <div class="col-4">
              <img class="icon2" src="../../public/img/medal.png" alt="Avatar">
              <br>
              <h2 class="icontext">איכות</h2><hr class="horiz">
              <p class="text">אופן הכנת הבשר מתבצעת בצורה המושלמת ביותר ובאיכות הגבוהה ביותר. השפים שלנו מתייחסים לכל מנה כהיותה האחרונה במעגל חייהם ועל כן ההשקעה עצומה.</p>
            </div>
             <div class="col-4">
              <img class="icon2" src="../../public/img/waiter.png" alt="Avatar">
              <br>
              <h2 class="icontext">שירות</h2><hr class="horiz">
              <p class="text">את המלצרים שלנו אנחנו בוחרים בקפידה. כל מלצר עובר תקופת לימוד ממושכת ומבחנים רבים והם כלכך טובים שכנראה תרצו לקחת אותם הביתה בסוף הארוחה.</p>
            </div>
           </div>
          </div>
        </div>
   </div>
    <div class="jumb pt-1">
       <div class="container-fluid">
          <div class="row mt-3">
    
           <figure class="col-md-4 p-0 mb-0">
                  <img alt="picture" src="../../public/img/meat8.jpg" class="img-fluid">
              </figure>

              <figure class="col-md-4 p-0 mb-0">
                  <img alt="picture" src="../../public/img/meat2.jpg" class="img-fluid">
              </figure>

              <figure class="col-md-4 p-0 mb-0">
                  <img alt="picture" src="../../public/img/meat9.jpg" class="img-fluid">
              </figure>
         
        </div>

        <div class="row">
           <figure class="col-md-4 p-0 mb-0">
                  <img alt="picture" src="../../public/img/meat4.jpg" class="img-fluid">
              </figure>
            <div class="col-md-4 text-center mb-2 mt-2">
              <h1 class="story-texth1">LaMeat</h1>
              <p class="story-text">30 שנה של טעם איכותי, מסעדנות ברמה עולמית וכמובן סיפור הנוגע לכולנו.
                אי שם בעמק זבולון הנפלאה מסתתרת לה מסעדה יוצאת מן הכלל.
                עם בשר באיכות הגבוהה ביותר בתבל, השפים הטובים ביותר בישראל וכמובן השירות היוקרתי
                מצליחה לה מיט לעמוד בראש מסעדות הבשר בארץ ולהוביל את תחום הבקר ובישולו.
                כמו ברוב ההצלחות מסתתר לו סיפור, סיפור הלוקח חלק מההיסטוריה של המאה ה-20 וישר לעשור השני של המאה ה21.
                סיפור על אהבה, מטבח, קומוניזם וציונות...
              </p>
              <router-link active-class="active"  to="/story" exact>
              <button class="btn">לסיפור</button>
              </router-link>
            </div>
            <figure class="col-md-4 p-0 mt-0 mb-0">
                    <img alt="picture" src="../../public/img/meat5.jpg" class="img-fluid">
                </figure>
        </div>


        <div class="row ">
           <figure class="col-md-4 p-0 mb-0">
                  <img alt="picture" src="../../public/img/meat10.jpg" class="img-fluid">
              </figure>
          <figure class="col-md-4 p-0 mb-0">
                  <img alt="picture" src="../../public/img/meat12.jpg" class="img-fluid">
              </figure>
          <figure class="col-md-4 p-0">
                  <img alt="picture" src="../../public/img/meat11.jpg" class="img-fluid">
              </figure>
        </div>
       </div>
      </div>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
   
  }
}
</script>

<style  scoped>
 @import '../../src/assets/css/home.css';
</style>