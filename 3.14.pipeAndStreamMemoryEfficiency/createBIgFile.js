const fs = require('fs');

const file = fs.createWriteStream('./bigText.txt');

file.on("finish", ()=>{
    console.log("File Write Done!!!!");
});

for(let i =0;i<10_000_000;i++){
    file.write('writing File..... Are You Ready?Are You Ready?Are You Ready?Are You Ready?Are You Ready?Are You Ready?\n');
}
file.end();
