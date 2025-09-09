
// document.getElementById("btn1")
//     .addEventListener("click", function(){
//         alert("Hey.! What's Wrong? Why Are You Guys Poke Me?")
//     })


const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res=>res.json())
        .then((json) => displayCategories(json.categories)) // 1
}

const displayCategories = (Lessons) => {
    // console.log(Lessons);

    const categoriesContainer = document.getElementById("categories_container");
    categoriesContainer.innerHTML = "";

    for(let lesson of Lessons) {
        // console.log(lesson);
        const categoriesDiv = document.createElement("div");
        categoriesDiv.innerHTML = `

            <button onclick="loadLevelWord('${lesson.id}')" class="btn btn-outline border-none hover:bg-green-600 hover:text-white text-gray-600">  ${lesson.category_name} </button>

        `
    categoriesContainer.append(categoriesDiv);

    }
}
const loadLevelWord=(id) => {
    // console.log(name);
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    // console.log(url);
    fetch(url)
        .then(res=>res.json())
        // .then(data=>console.log(data))
        .then(data=>displayLevelWord(data.plants))
}

const displayLevelWord=(words)=>{
    // console.log(words)
    const wordContainer =document.getElementById("word_container");
    wordContainer.innerHTML="";
    words.forEach((word) => {
        console.log(word);

        const card=document.createElement("div");
        card.innerHTML=
        `
        <p> Cat </p>

        `;
        wordContainer.append(card);
    })
}
















































loadCategories();
