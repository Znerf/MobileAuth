const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.options('*', cors());
app.use(express.json());


app.get('/',function(req,res) {
  //For checking if server is running or not
  return res.status(400).json({ msg: 'Use Appropriate API. This Gateway is not defined' });
});
 


app.post('/CheckAuth', (req, res) => {
  console.log('## STATUS: POST /CheckAuth Data received')
  console.log(req.body.Code)

  //checkif Null check if null and other jpaitei parameter
  if (req.body.Code ===  0 ){
    return res.status(400).json({ response: 'notaccepted' });
  }


  
  //Main part for authetication Check
  if (parseInt( req.body.Code)===codeGenerator()){
    res.json({response:'accepted'})
    console.log('ok')

    return res;
  }else{
    return res.json({ response: 'notaccepted' });
  }

});


function codeGenerator(){
  /* 
  Code Generator code here
  */
  return 123456;
}

  

app.listen(8080, () => console.log('Server Started...'));