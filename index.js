/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// getting hold of all necessary DOM objects

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

const lengthP = document.getElementById("length-p")
const volumeP = document.getElementById("volume-p")
const massP = document.getElementById("mass-p")

// function to convert feet to meters
function feetToMeter() {
    return (parseFloat(inputEl.value) * 0.3048).toFixed(2)
}

// function to convert meters to feet
function meterToFeet() {
    return (parseFloat(inputEl.value) * 3.28084).toFixed(2)
}

// function to convert gallons to liters
function gallonsToLiters() {
    return (parseFloat(inputEl.value) * 3.78541).toFixed(2)
}

//function to convert liters to gallons
function litersToGallons() {
    return (parseFloat(inputEl.value) * 0.264172).toFixed(2)
}

// function to convert pounds to killograms
function poundsToKillograms() {
    return (parseFloat(inputEl.value) * 0.453592).toFixed(2)
}

function killogramsToPounds() {
    return (parseFloat(inputEl.value) * 2.20462).toFixed(2)
}

convertBtn.addEventListener("click", function() {
    lengthP.textContent = `${inputEl.value} feet = ${feetToMeter()} meters | ${inputEl.value} meters = ${meterToFeet()} feet`
    
    volumeP.textContent = `${inputEl.value} gallons = ${gallonsToLiters()} liters | ${inputEl.value} liters = ${litersToGallons()} gallons`
    
    massP.textContent = `${inputEl.value} pounds = ${poundsToKillograms()} killograms | ${inputEl.value} killograms = ${killogramsToPounds()} pounds`
})