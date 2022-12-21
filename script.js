
let comp = document.querySelector('.comp');
let comp__star = document.querySelector('.comp__star');
let comp__draw = document.querySelector('.comp__draw');
let comp__result = document.querySelector('.comp__result');
let comp__title = document.querySelector('.comp__title');
let comp__p = document.querySelector('.comp__p');
let comp__circles = document.querySelector('.comp__circles');
let comp__submit = document.querySelector('.comp__submit');
let firstStepElements = document.querySelectorAll('.firstStep');
let secondStepElements = document.querySelectorAll('.secondStep');
let buttonsNodeList;
let numbers = [1,2,3,4,5];

const render = (what, where) => {
    where.innerHTML = what;
}

const removeClassFromList = (list,myClass) => {
    for (const el of list) {
        el.classList.remove(myClass);
    }
}

const buttonsArray = numbers.map( (number) => {
    return `<button class="comp__circles__item">${number}</button>`
} );

const showRating = () => {

    comp__star.style.display = 'none';
    comp__circles.style.display = 'none';
    comp__submit.style.display = 'none';
    comp__draw.style.display = 'block';
    comp__result.style.display = 'inline-block';
    comp__title.innerHTML = 'Thank you!';
    comp__p.innerHTML = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'
    comp.classList.add('comp--thanks');

}

render(buttonsArray.join(''),comp__circles);

buttonsNodeList = document.querySelectorAll('.comp__circles__item');

buttonsNodeList.forEach( (button) => {
    button.addEventListener('click', () => {
        render(button.innerHTML , document.getElementById('yourSelection'));
        removeClassFromList(buttonsNodeList,'active');
        button.classList.add('active');
    })
} )

comp__submit.addEventListener('click',() => {
    if(document.getElementById('yourSelection').innerHTML === '0') {
        alert(`you haven't voted yet!`);
    } else {
        showRating();
    }
});

