const fs = require('fs').promises;

fs.writeFile('./writeeme.txt','안농하살법')
    .then(()=>{

    })
    .catch((err)=>{
        console.error(err)
    });
