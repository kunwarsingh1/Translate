const express = require('express')
const app = express()
const cors = require('cors')
const { json } = require('express')
app.use(cors())
app.use(express.json())   

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/data',(req,res)=>{
    console.log('detected')
    const text = req.query.text
    const lang = req.query.lang
    console.log(text)
    fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=en|${lang}`).then(response=>
       response.json()).then(data=>res.send(`${data.responseData.translatedText}`))
    // res.send('done and dusted')
    })


app.listen(5000,console.log('Listening at 5000'))