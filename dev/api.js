const express =  require ('express');
const app = express ();
const Blockchain = require('./blockcahin');
const bitcoin = new Blockchain();

app.get('/blockchain', function(req,res){
res.send('here we will show our blockchain');

});

app.post('/transaction', function (req, res) {
  res.send('here we will call our transactions')
});
app.listen(3000,function(){
  console.log("server is running on port 3000")

});