var express = require('express');
var router = express.Router();
var pg = require('pg');
//var pg = require('pg').native

var conString = "postgres://foxhbfvd:9FhkukqPHQlEKBQd7ET-lQ4TTycyJbyY@salt.db.elephantsql.com:5432/foxhbfvd" //Can be found in the Details page
var client = new pg.Client(conString);

/* GET home page. */
router.get('/', function(req, res, next) {});

// connect api đến trang con
router.get('/getdata01', function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM product_info', (error,response) => {
      if(error) {  // nếu lỗi thì trả về error
        return console.error('error running query', error);
      } else {   // Nếu thành công trả về response
        
        // console.log(response.rows); //console chỉ xem được trên backend thôi
        
        res.send(response.rows);  //send dữ liệu phía api
      }
      client.end();
    });
  });
});

module.exports = router;
