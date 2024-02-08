
const fsPromises=require('fs').promises;

const path=require('path');

const fileOps=async()=>{
    try{

        const data= await fsPromises.readFile(path.join(__dirname, 'file', 'sample-1.txt'),'utf8')
        console.log(data);

        await fsPromises.unlink(path.join(__dirname, 'file', 'sample-1.txt'),data);

        await fsPromises.writeFile(path.join(__dirname, 'file', 'promiseWrite.txt'),data);

        await fsPromises.appendFile(path.join(__dirname, 'file', 'promiseWrite.txt'),'\n\n nice to meet you');

        await fsPromises.rename(path.join(__dirname, 'file', 'promiseWrite.txt'),path.join(__dirname, 'file', 'promiseComplete.txt'),data);
    
        const newData= await fsPromises.readFile(path.join(__dirname, 'file', 'promiseComplete.txt'),'utf8')
        console.log(newData);
    
    
    }   catch(err){
        console.error(err)
    }
}

fileOps();

/*fs.writeFile(path.join(__dirname, 'file', 'reply.txt'), 'Nice to meet you', (err) => {
    if (err) throw err;
    console.log('Write complete');

    fs.appendFile(path.join(__dirname, 'file', 'reply.txt'), '\n\n yes it is', (err) => {
        if (err) throw err;
        console.log('Append complete');

        fs.rename(path.join(__dirname, 'file', 'reply.txt'), path.join(__dirname, 'file', 'newReply.txt'), (err) => {
            if (err) throw err;
            console.log('Rename complete');
        });
    });
});*/

//exit on uncaught errors

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})