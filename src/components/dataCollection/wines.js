import db from '../../firebase.js'
let wines=[];
db.collection('/wines').get()
  .then(querySnapshot =>{
    querySnapshot.forEach(doc=>{
      
      const data={
        id:doc.id,
        title:doc.data().title,
        price1:doc.data().price1,
        price2:doc.data().price2,
      }
      wines.push(data)
    })
  });

export default wines;