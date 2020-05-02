const config = {
    host: 'localhost',
    port: 5432,
    database: 'music_database',
    user: 'postgres'
};


const pgp = require('pg-promise')();
const db = pgp(config);


const prompt = require('prompt-promise');

let res = [];

prompt('Enter album artist_id: \n')
    .then(function albumArtist(val) {
        res.push(val);
        return prompt('Enter album year: \n');
    })
    .then(function albumYear(value) {
        res.push(value);
        return prompt('Enter album name: \n');
    })

    .then(function(albumName) {
        res.push(albumName);
        return db.result('INSERT INTO album (artist_id, year, album_name) VALUES ($1, $2, $3) RETURNING artist_id',
        res) 
    })

    .then(function(artist_id) {
        console.log(artist_id);
        pgp.end();     
    })

    .catch(function rejected(err) {
        console.log('error:', err.stack);
        prompt.finish();

    });

    
   