import db from '../../firebase.js'
let deserts=[];
db.collection('/deserts').get()
  .then(querySnapshot =>{
    querySnapshot.forEach(doc=>{
      
      const data={
        id:doc.id,
        title:doc.data().title,
        price:doc.data().price,
        desc:doc.data().desc
      }
      deserts.push(data)
    })
  });

export default deserts;