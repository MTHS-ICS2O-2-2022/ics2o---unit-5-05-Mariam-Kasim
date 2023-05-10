// Copyright (c) 2022 Mariam Kasim All rights reserved
//
// Created by: Mariam Kasim
// Created on: May
// This file contains the JS functions for index.html

"use strict"
// This function displays the type of triangle based on the lengths of the sides
function myButtonClicked() {
  // input
  const lengthA = parseInt(document.getElementById("lengthA").value)
  const lengthB = parseInt(document.getElementById("lengthB").value)
  const lengthC = parseInt(document.getElementById("lengthC").value)

  const angleA =
    Math.acos(
      (lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)
    ) *
    (180 / Math.PI)
  const angleB =
    Math.acos(
      (lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)
    ) *
    (180 / Math.PI)
  const angleC =
    Math.acos(
      (lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)
    ) *
    (180 / Math.PI)

  const sumOfAngles =
    Number(angleA.toFixed(2)) +
    Number(angleB.toFixed(2)) +
    Number(angleC.toFixed(2))

  // process
  if (lengthA === lengthB && lengthB === lengthC) {
    // output
    document.getElementById("answer").innerHTML = "The triangle is equilateral"
  } else if (
    lengthA === lengthB ||
    lengthB === lengthC ||
    lengthC === lengthA
  ) {
    // output
    document.getElementById("answer").innerHTML = "The triangle is isosceles"
  } else if (
    lengthA !== lengthB &&
    lengthB !== lengthC &&
    lengthC !== lengthA
  ) {
    // output
    document.getElementById("answer").innerHTML = "The triangle is scalene"
  }
}
