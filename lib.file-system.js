import { readFile, writeFile } from 'fs/promises';


async function extractFile() {
    try{
        const data = await readFile('data.txt', 'utf8');
        console.log('Isi file', data);
    } catch (err) {
        console.error('Error:', err);
    }
}

async function writeToFile() {
    try{
        await writeFile('output.txt', 'Hello, Node JS!');
        console.log('File berhasil ditulis');
    } catch (err) {
        console.log('Error menulis file:', err);
    }
}

extractFile();
writeToFile();