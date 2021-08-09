const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
app.use(cors()) // after you initialize your express app instance
require('dotenv').config();
const PORT=process.env.PORT;
const axios=require('axios');
// a server endpoint
 
app.get('/',(req,res)=>{
    let searchQuery=req.query['q']
    let url=`https://eu1.locationiq.com/v1/search.php?key=pk.60346fba30221450f0bd55e67928ff53&q=${searchQuery}&format=json`
    axios.get(url).then(data=>{res.json(data.data)})
})

// a server endpoint 
app.get('/data',  (req, res)=> { // callback function of what we should do with our request
  console.log(req.query);
  if (req.query['q']==='hello'){
    res.json({message:'301d28 students are awesome !'}).status(200)
  }else{
      res.status(400).send("something wrong happend");
  }
   // our endpoint function response
});

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
}); // kick start the express server to work