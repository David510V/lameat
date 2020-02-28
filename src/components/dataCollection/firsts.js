import db from '../../firebase.js'
let firsts=[];
db.collection('/first').get()
  .then(querySnapshot =>{
    querySnapshot.forEach(doc=>{
      
      const data={
        id:doc.id,
        title:doc.data().title,
        price:doc.data().price,
        desc:doc.data().desc
      }
      firsts.push(data)
    })
  });

export default firsts;