import db from '../../firebase.js'

db.collection('/main').get()
  .then(querySnapshot =>{
    querySnapshot.forEach(doc=>{
      
      const data={
        id:doc.id,
        title:doc.data().title,
        price:doc.data().price,
        desc:doc.data().desc
      }
      main.push(data)
    })
  });

  let main=[];

  export default main