const express = require(`express`)
const app = express()
const bodyParser = require(`body-parser`)
const port = 5000

app.use(bodyParser.json())

app.listen(port, () => {

  console.log(`The server works for alora : ${port}`)
  
})

//localhost: 5000/alora => alora, where are you
//localhost: 5000/lily/retard => dream, face reveal

app.get(`/alora`, (req, res) => {

     res.send(`alora, where are you`)

})

app.get(`/today`, (req, res) => {
  let today = new Date()
  res.send(today)
  
})
//JSON concept
app.get(`/lily/retard`, (req, res) => {

  res.send({
       message: "hello, resert.."
  })

})

app.get(`/sammy/leed`, (req, res) => {
    const data = req.body 
  res.send({
       message: "welcome, leader.."
  })

})

app.post(`/create`, (req, res) => {
  const data = req.body 
  console.log(data)
  if(data.fn == "" || data.sn == "" || data.email == ""  /* or !data.fn || !data.sn etc*/){
    res.send({
      message: "All fields are required"
 })
  
}else{
  res.send({
    message: `User information accepted, Welcome User ${data.sn}, ${data.fn}, ${data.email}`
})
}

})

//ERROR REQUEST

app.post(`/start`, (req, res) => {
  const data = req.body 
  console.log(data)
  if(data.fn == "" || data.sn == "" || data.email == ""  /* or !data.fn || !data.sn etc*/){
    res.status(400).send({
      message: "All fields are required"
 })
  
}else{
  res.status(201).send({
    message: `User information accepted, Welcome User ${data.sn}, ${data.fn}, ${data.email}`
})
}

})
