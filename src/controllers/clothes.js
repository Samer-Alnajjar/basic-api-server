"use strict"

// Importing packages and files

const Clothes = require("../models/clothes.js");

// Creating object from the class "Clothes"

const clothes = new Clothes;

// Control functions

function getClothes(req, res) {
  const resObj = clothes.read();
  res.json(resObj);
}

function getClothesById(req, res) {
  const resObj = clothes.read(req.params.id);
  res.json(resObj);
}

function createClothes(req, res) {
  const clothesObject = req.body;
  const resObj = clothes.create(clothesObject);
  res.status(201).json(resObj);
}

function updateClothes(req, res) {
  const clothesObject = req.body;
  const resObj = clothes.update(req.params.id, clothesObject);
  res.status(204).json(resObj);
}

function deleteClothes(req, res) {
  const resObj = clothes.delete(req.params.id);
  res.json(resObj);
}

module.exports = {
  getClothes: getClothes,
  getClothesById : getClothesById, 
  createClothes : createClothes,
  updateClothes : updateClothes,
  deleteClothes : deleteClothes
}