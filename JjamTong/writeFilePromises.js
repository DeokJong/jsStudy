const fs = require('fs').promises;

fs.writeFile('./writeMe','나도 안농').then(()=>{}).catch((err)=>console.error(err));
