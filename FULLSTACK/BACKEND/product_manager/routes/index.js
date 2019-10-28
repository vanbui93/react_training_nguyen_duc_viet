var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'sgpostgres',
  host: 'SG-react2019-270-pgsql-master.servers.mongodirector.com',
  database: 'postgres',
  password: 'AJIb7cUrs3GUBm',
  port: 6432,
})
// var client = new pg.Client({user: "sgpostgres", password: "Z^AJIb7cUrs3GUBm", database: "postgres", host: "SG-react2019-270-pgsql-master.servers.mongodirector.com", port: 6432, ssl : { rejectUnauthorized : true, ca : fs.readFileSync("<Path to ca.pem file>").toString() }});

/* GET home page. */
router.get('/', function(req, res, next) {
  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })
  
  res.render('index', { title: 'Express' });
});

module.exports = router;
