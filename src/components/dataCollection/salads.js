import db from '../../firebase.js'
let salads=[];
db.collection('/salads').get()
  .then(querySnapshot =>{
    querySnapshot.forEach(doc=>{
      
      const data={
        id:doc.id,
        title:doc.data().title,
        price:doc.data().price,
        desc:doc.data().desc
      }
      salads.push(data)
    })
  });

export default salads;