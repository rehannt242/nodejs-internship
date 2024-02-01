const fs = require('fs');

const rs = fs.createReadStream('./file/sample-2.txt', { encoding: 'utf8' });
const ws = fs.createWriteStream('./file/new_sample_2.txt');

/*rs.on('data', (dataChunk) => {
    ws.write(dataChunk);
});
*/
rs.pipe(ws);