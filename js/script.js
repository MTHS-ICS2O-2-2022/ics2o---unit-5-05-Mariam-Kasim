// Copyright (c) 2022 Mariam Kasim All rights reserved
//
// Created by: Mariam Kasim
// Created on: May
// This file contains the JS functions for index.html

"use strict"
// This function displays the type of triangle based on the lengths of the sides
function myButtonClicked() {
  // input
  const lengthA = parseFloat(document.getElementById("lengthA").value)
  const lengthB = parseFloat(document.getElementById("lengthB").value)
  const lengthC = parseFloat(document.getElementById("lengthC").value)

  // process
  // using cogina law
  const angleA = Math.acos((lengthB**2 + lengthC**2 - lengthA**2) / (2 * lengthB * lengthC)) * (180/Math.PI)
  const angleB = Math.acos((lengthC**2 + lengthA**2 - lengthB**2) / (2 * lengthC * lengthA)) * (180/Math.PI)
  const angleC = Math.acos((lengthA**2 + lengthB**2 - lengthC**2) / (2 * lengthA * lengthB)) * (180/Math.PI)
  const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2)) 

  if (sumOfAngles == 180) {
    if (angleA==90 || angleB==90 || angleC==90) {
      // output
      document.getElementById('answer').innerHTML = "The triangle is a right triangle"
    }
    else if (angleA==60 && angleB==60 && angleC==60) {
      // output
      document.getElementById('answer').innerHTML = "The triangle is an equilateral triangle"
    }
    else if (angleA==angleB || angleB==angleC || angleC==angleA) {
      // output
      document.getElementById('answer').innerHTML = "The triangle is an isosceles triangle"
    }
    else {
      // output
      document.getElementById('answer').innerHTML = "The triangle is a scalene triangle"
    }
  } else {
      // output
      document.getElementById('answer').innerHTML = "The triangle is not a triangle"
  }
}