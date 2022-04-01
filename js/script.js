const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// question 1

const cat = {
    complain: "Meow!"
};

console.log(cat)

// question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// question 3

heading.style.fontSize = "2em";

// question 4

heading.classList.add("subheading");

// question 5

document.querySelectorAll("p");

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// question 6

const resultsContainer = document.querySelector(".results")
   
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// question 7

function createList(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

createList(cats);

// question 8

function createCats(cats) {

    let html = "";

    for(let i = 0; i < cats.length; i++) {

        let ageProperty = "Age unknown";

        if(cats[i].age) {
            ageProperty = cats[i].age;
     }

    html += `<div class="cat">
                <h5>${cats[i].name}</h5>
                <p>Age: ${ageProperty}</p>
            </div>`;
    }

    return html;
}

const newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;
