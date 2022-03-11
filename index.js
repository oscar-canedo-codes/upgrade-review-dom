// Iteration 1

// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

let countryList = document.createElement("ul");

for (const country of countries) {
  
    let countryItem = document.createElement("li");
  
    countryItem.textContent = country;
    countryList.appendChild(countryItem);
}
document.body.appendChild(countryList);

console.log(countries);

// 1.1 ES6

const newUl = document.createElement('ul');

countries.forEach( elem => {

    let newLi = document.createElement('li');
    let textLi = document.createTextNode(elem);
    
    newLi.appendChild(textLi);
    newUl.appendChild(newLi);
});

document.body.appendChild(newUl); 

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me

let deleteElement = document.querySelector(".fn-remove-me");
deleteElement.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere". 

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let selectDiv = document.querySelector('[data-function="printHere"]');

let createCarList = document.createElement("ul");

for (const car of cars) {

  let carItem = document.createElement("li");
  
  carItem.textContent = car;
  createCarList.appendChild(carItem);
}

selectDiv.appendChild(createCarList);

// 1.3 ES6

const carsUl = document.createElement('ul');

cars.forEach( elem => {

    let newLi = document.createElement('li');
    let textLi = document.createTextNode(elem);
    newLi.appendChild(textLi);

    carsUl.appendChild(newLi);
});

const carListDiv = document.querySelector('[data-function="printHere"]');

carListDiv.appendChild(carsUl);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.

const pictures = [

	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const picture of pictures) {
    
    let pictureItem = document.createElement("div");
    pictureItem.innerHTML = `<h4>${picture.title}</h4><img src=${picture.imgUrl} />`;
  
    document.body.appendChild(pictureItem);
  }

// ES6

pictures.forEach( elem => {

    let picDiv = document.createElement('div');
    let imgEl = document.createElement('img');
    let title = document.createElement('h4');

    imgEl.src = elem.imgUrl;
    title.innerText = elem.title;

    picDiv.appendChild(title);
    picDiv.appendChild(imgEl);

    document.body.appendChild(picDiv);

})

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista

let deleteButton = document.querySelector('#delete-last-element');

deleteButton.addEventListener("click", function() {

    let selectDivs = document.querySelectorAll('div');
    selectDivs[selectDivs.length -1].remove();
    
});

// 1.5 ES6

let deleteBtn = document.createElement('button');
let btnText = document.createTextNode('Elminate Last Div');

deleteBtn.appendChild(btnText);

document.body.appendChild(deleteBtn);

function deleteLastDiv() {

    let allDivs = document.querySelectorAll('div');
    let lastDiv = allDivs[allDivs.length -1];

    if(allDivs.length === 1) {
        return;
    }
    lastDiv.remove();
}

deleteBtn.addEventListener('click', () => deleteLastDiv());


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html

const images = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  for (const image of images) {
    let imageItem = document.createElement("div");
    imageItem.innerHTML = `<h4>${image.title}</h4><img src=${image.imgUrl} />`;
  
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
  
    imageItem.appendChild(deleteButton);
  
    deleteButton.addEventListener("click", function () {
      imageItem.remove();
    });
  
    document.body.appendChild(imageItem);
  }

  // 1.6 ES6

  const allDivs = document.querySelectorAll('div');

allDivs.forEach( (elem, index) => {

    if(index > 0) {

        const deleteEachBtn = document.createElement('button');
        const btnEachText = document.createTextNode('Eliminate div');
        
        deleteEachBtn.appendChild(btnEachText);
        deleteEachBtn.classList.add('btn');
        elem.appendChild(deleteEachBtn);

    }
});

function deleteDiv(e) {
    e.target.parentNode.remove();
}

const btns = document.querySelectorAll('.btn');

btns.forEach( elem => {
    
    elem.addEventListener('click', deleteDiv);
});