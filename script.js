const submitButton = document.querySelector('#addition');
const fieldOne = document.querySelector('#field-one');
const fieldTwo = document.querySelector('#field-two');

const resultValue = document.querySelector('#resultValue');
let add=document.querySelector('#addition');
submitButton.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne + valueTwo;
    console.log(valueOne + valueTwo);
     //alert(` Addition is: ${valueOne + valueTwo}`);
    resultValue.innerHTML = result;
} );
const sub=document.querySelector('#substraction');
sub.addEventListener('click',()=>{
    const valueOne=+fieldOne.value;
    const valueTwo=+fieldTwo.value;
    const result= valueOne-valueTwo;
    console.log(result);
    resultValue.innerHTML=result;
});
const mul=document.querySelector('#multiplication');
mul.addEventListener('click',()=>{
    const valueOne=+fieldOne.value;
    const valueTwo=+fieldTwo.value;
    const result= valueOne*valueTwo;
    console.log(result);
    resultValue.innerHTML=result;
});

const div=document.querySelector('#division');
div.addEventListener('click',()=>{
    const valueOne=+fieldOne.value;
    const valueTwo=+fieldTwo.value;
    const result= valueOne/valueTwo;
    console.log(result);
    resultValue.innerHTML=result;
});
