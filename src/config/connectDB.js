const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//     host: '217.21.94.191',
//     user: 'u736549907_diuwin',
//     password: 'Kunal292911n@',
//     database: 'u736549907_diuwin',
// });

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'u736549907_diuwin',
    port:3308,
});

export default connection;