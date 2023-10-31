let heading = document.createElement('h1');
heading.setAttribute('id', 'title');
heading.innerText = "Calculator";

let para = document.createElement('p');
para.setAttribute('id', 'description');
para.innerText = "Simple calculator design";

// Calculator numbers
let one = document.createElement('button');
one.setAttribute('type', 'button');
one.setAttribute('id', '1');
one.classList.add('numbers');
one.innerText = "1";

let two = document.createElement('button');
two.setAttribute('type', 'button');
two.setAttribute('id', '2');
two.classList.add('numbers');
two.innerText = "2"

let three = document.createElement('button');
three.setAttribute('type', 'button');
three.setAttribute('id', '3');
three.classList.add('numbers');
three.innerText = "3"

let four = document.createElement('button');
four.setAttribute('type', 'button');
four.setAttribute('id', '4');
four.classList.add('numbers');
four.innerText = "4"

let five = document.createElement('button');
five.setAttribute('type', 'button');
five.setAttribute('id', '5');
five.classList.add('numbers');
five.innerText = "5"

let six = document.createElement('button');
six.setAttribute('type', 'button');
six.setAttribute('id', '6');
six.classList.add('numbers');
six.innerText = "6"

let seven = document.createElement('button');
seven.setAttribute('type', 'button');
seven.setAttribute('id', '7');
seven.classList.add('numbers');
seven.innerText = "7"

let eight = document.createElement('button');
eight.setAttribute('type', 'button');
eight.setAttribute('id', '8');
eight.classList.add('numbers');
eight.innerText = "8"

let nine = document.createElement('button');
nine.setAttribute('type', 'button');
nine.setAttribute('id', '9');
nine.classList.add('numbers');
nine.innerText = "9"

let zero = document.createElement('button');
zero.setAttribute('type', 'button');
zero.setAttribute('id', '0');
zero.classList.add('numbers');
zero.innerText = "0"

let zerotwo = document.createElement('button');
zerotwo.setAttribute('type', 'button');
zerotwo.setAttribute('id', '00');
zerotwo.classList.add('numbers');
zerotwo.innerText = "00"


// Calculator buttons
let addition = document.createElement('button');
addition.setAttribute('type', 'button');
addition.setAttribute('id', 'add');
addition.classList.add('addition', 'calcActions');
addition.innerText = "+"

let subraction = document.createElement('button');
subraction.setAttribute('type', 'button');
subraction.setAttribute('id', 'subtract');
subraction.classList.add('addition', 'calcActions');
subraction.innerText = "-"

let multiplication = document.createElement('button');
multiplication.setAttribute('type', 'button');
multiplication.classList.add('addition', 'calcActions');
multiplication.innerText = "*"

let division = document.createElement('button');
division.setAttribute('type', 'button');
division.classList.add('addition', 'calcActions');
division.innerText = "/"

let equal = document.createElement('button');
equal.setAttribute('type', 'button');
equal.setAttribute('id', 'equal');
equal.classList.add('equal', 'calcActions');
equal.innerText = "="


let form = document.createElement('form');
form.setAttribute('id', 'form');


let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('name', 'values');
input.setAttribute('id', 'result');
input.addEventListener('keypress', function onlyNumbers(e){
    // let allowedKeys = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57'];
    // let keys = allowedKeys.includes();

    // console.log(keys)
    // for(let i = 0; i < allowedKeys.length; i++){
    //     if(e.which == values ){
    //         console.log('correct')
    //     }else{
    //         console.log('not Correct')
    //     }
    // }

    if (e.which < 48 || e.which > 57)
    {
        alert('Alphabets are not allowed');
        e.preventDefault();
    }else{
        
    }
})

let backButton = document.createElement('button');
backButton.setAttribute('type', 'button');
backButton.classList.add('back', 'calcActions');
backButton.innerText = "<-"

let clear = document.createElement('button');
clear.setAttribute('type', 'button');
clear.setAttribute('id', 'clear');
clear.classList.add('clear', 'calcActions');
clear.innerText = "C";
clear.addEventListener('click', function clearInput(){
    form.reset();
})


let container = document.createElement('div');
container.setAttribute('class', 'container');

let calcParent = document.createElement('div');
calcParent.setAttribute('class', 'calcParent');


let inputset = document.createElement('div');
inputset.setAttribute('class', 'inputset');

let calcbody = document.createElement('div');
calcbody.setAttribute('class', 'calcbody');


document.body.append(container);
container.appendChild(heading);
container.appendChild(para);
container.appendChild(calcParent);
calcParent.appendChild(inputset);
inputset.appendChild(form);
form.appendChild(input);


calcParent.appendChild(calcbody);
calcbody.appendChild(clear);
calcbody.appendChild(backButton);
calcbody.appendChild(multiplication);
calcbody.appendChild(subraction);
calcbody.appendChild(division);
calcbody.appendChild(addition);
calcbody.appendChild(seven);
calcbody.appendChild(eight);
calcbody.appendChild(nine);

calcbody.appendChild(four);
calcbody.appendChild(five);
calcbody.appendChild(six);

calcbody.appendChild(one);
calcbody.appendChild(two);
calcbody.appendChild(three);



calcbody.appendChild(zero);
calcbody.appendChild(zerotwo);
calcbody.appendChild(equal);

