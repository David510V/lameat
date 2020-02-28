import db from '../../firebase.js'

let steaks=[];

db.collection('/steaks').get()
.then(querySnapshot =>{
  querySnapshot.forEach(doc=>{
    
    const data={
      id:doc.id,
      title:doc.data().title,
      price1:doc.data().price1,
      price2:doc.data().price2
    }
    steaks.push(data)
  })
});


export default steaks;