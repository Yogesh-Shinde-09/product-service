const express = require('express')
const app = express()

const products = [
  { pid: "1", pname: "Laptop", price: 50000 },
  { pid: "2", pname: "TV", price: 500000 },
  { pid: "3", pname: "Desktop", price: 50000 }
]

app.get("/api/allproducts", (req, res) => {
  console.log("Fetching all the products..")
  res.json(products)
})

app.get("/api/products/:id", (req, res) => {
  const prod = products.find(p => p.pid == req.params.id)
  if (!prod) {
    return res.status(404).json({ error: "product not found" })
  }
  res.json(prod)
})

app.get("/kubeconn", (req, res) => {
  res.status(200).json({ status: "up", timeStamp: new Date().toISOString() })
})

const PORT = process.env.PORT || 3500
app.listen(PORT, () => console.log(`App is working on port no : ${PORT}`))