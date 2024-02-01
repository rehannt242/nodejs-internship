const fs=require('fs');
const path=require('path');




fs.readFile(path.join(__dirname,'file','sample-1.txt'),'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})

console.log('Hello......');

fs.writeFile(path.join(__dirname,'file','reply.txt'),"Nice to meet you",(err)=>{
    if(err) throw err;
    console.log('write complete');

    fs.appendFile(path.join(__dirname,'file','reply .txt'),"\n\n yes it is",(err)=>{
        if(err) throw err;
        console.log('append complete');
    })


})


//exit on uncaught errors

process.on('uncaughtException',err =>{
    console.log('there was an uncaught error: ${err}');
    process.exit(1);
})