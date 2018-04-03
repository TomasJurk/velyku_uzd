'use strict';


//-------TODO-------------
// male/female check IF and arrange calculation for BMI

let weight = document.getElementById('weight');
let weightImperialOrMetric = document.querySelectorAll('.btn-metr-imper--weight');
let kgOrLbs = document.getElementById('kg-lbs');

let height = document.getElementById('height');
let heightImperialOrMetric = document.querySelectorAll('.btn-metr-imper--height');
let cmOrInch = document.getElementById('cm-in');

let gender = document.querySelectorAll('.genders > span');

let bmiIndexToShow = document.querySelector('.BMI_answer');
let bmiArrow = document.querySelector('.bmi-range--triangle');
let finalBMI;

// ---- height imperial or metric choose
heightImperialOrMetric[0].addEventListener('click', function () {
    this.classList.add('btn-metr-imper-active');
    cmOrInch.innerHTML = 'in';
    heightImperialOrMetric[1].classList.remove('btn-metr-imper-active');
    countBMI();
});

heightImperialOrMetric[1].addEventListener('click', function () {
    this.classList.add('btn-metr-imper-active');
    cmOrInch.innerHTML = 'cm';
    heightImperialOrMetric[0].classList.remove('btn-metr-imper-active');
    countBMI();
});

// ---- weight imperial or metric choose
weightImperialOrMetric[0].addEventListener('click', function () {
    this.classList.add('btn-metr-imper-active');
    kgOrLbs.innerHTML = 'lbs';
    weightImperialOrMetric[1].classList.remove('btn-metr-imper-active');
    countBMI();
});

weightImperialOrMetric[1].addEventListener('click', function () {
    this.classList.add('btn-metr-imper-active');
    kgOrLbs.innerHTML = 'kg';
    weightImperialOrMetric[0].classList.remove('btn-metr-imper-active');
    countBMI();
});


// ---- gender choose
gender[0].addEventListener('click', function () {
    this.classList.add('genders--active');
    gender[1].classList.remove('genders--active');
});

gender[1].addEventListener('click', function () {
    this.classList.add('genders--active');
    gender[0].classList.remove('genders--active');
});


let weightForCalc;
weight.addEventListener('keyup', countBMI);
weight.addEventListener("input", countBMI);

function getWeight() {
    if (weightImperialOrMetric[0].classList.contains('btn-metr-imper-active')) weightForCalc = +(weight.value * 0.454).toFixed(1);
    if (weightImperialOrMetric[1].classList.contains('btn-metr-imper-active')) weightForCalc = +weight.value;
}

let heightForCalc;
height.addEventListener('keyup', countBMI);
height.addEventListener("input", countBMI);

function getHeight() {
    if (heightImperialOrMetric[0].classList.contains('btn-metr-imper-active')) heightForCalc = +(height.value * 2.54).toFixed(1);
    if (heightImperialOrMetric[1].classList.contains('btn-metr-imper-active')) heightForCalc = +height.value;
    heightForCalc = heightForCalc / 100;
};



function countBMI() {
    getHeight();
    getWeight();
    finalBMI = +(weightForCalc / (heightForCalc*=heightForCalc)).toFixed(1);
    if (finalBMI > 15 && finalBMI < 32) {
        bmiIndexToShow.innerHTML = finalBMI;
        bmiArrow.style.left = `calc(${(finalBMI - 14.5)*2}rem - 0.65rem)`;
        weightForCalc = 0;
        heightForCalc = 0;
    } else if (finalBMI <= 15) {
        bmiIndexToShow.innerHTML = finalBMI;
        bmiArrow.style.left = `0.25rem`;
        weightForCalc = 0;
        heightForCalc = 0;
    } else if (finalBMI >= 32) {
        bmiIndexToShow.innerHTML = finalBMI;
        bmiArrow.style.left = `35.25rem`;
        weightForCalc = 0;
        heightForCalc = 0;
    }
}