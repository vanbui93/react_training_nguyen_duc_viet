var express = require('express');
var router = express.Router();
var pg = require('pg');
//var pg = require('pg').native

const urlSql = "postgres://foxhbfvd:9FhkukqPHQlEKBQd7ET-lQ4TTycyJbyY@salt.db.elephantsql.com:5432/foxhbfvd"
const client = new pg.Client(urlSql);

/* GET home page. */
router.get('/', function(req, res, next) {});

// connect api đến trang con
router.get('/getdata01', function(req, res, next) {
  const client = new pg.Client(urlSql);
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
      // client.end(); // đóng cổng kết nói csdl
    });
  });
});

// tạo router lấy dữ liệu
router.get('/add', function(req, res, next) {
  res.render('add',{})
});

// tạo router method="post"
router.post('/add', function(req, res, next) {
  const client = new pg.Client(urlSql);
  client.connect(function(err) {
    var product_name = req.body.product_name,
    product_price = req.body.product_price,
    product_img = req.body.images;  //in du lieu nhap tu form ra
    sql = "insert into product_info (product_name,product_price,images) values ($1,$2,$3)"
    client.query(sql,[product_name,product_price,product_img],(err,response) => {
      if(err) {
        res.send(err);
      } else {
        res.send('Insert du lieu thanh cong ' + product_name + product_price + product_img);
      }
    })
  })
});

module.exports = router;