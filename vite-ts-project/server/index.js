// const express = require('express');
import express from "express";
import cors from "cors";
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const products = [];
//Метод GET
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  const {title, description, price} = req.body;
  if(!title || !description || !price) {
    return res.status(400).json({message: "Все поля обязательны!"});
  }
  const newProduct = {title, description, price};
  products.push(newProduct);
  res.status(201).json({message: "Товар добавлен!", product: newProduct});
})

//http://localhost:5000/api/data

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
