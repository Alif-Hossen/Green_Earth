
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
            <div class="bg-white rounded-xl  w-[250px] h-[450px] mt-5 flex flex-col justify-between ">
                        <div>
                            <img class="h-[150px] w-[230px] my-2 mx-2 rounded-lg" src="${word.image}" alt="">
                        </div>
                        <div class="pl-4">
                            <div class="">
                                <h2 class="text-lg font-bold">${word.name}</h2>
                                <p class="text-gray-600 pt-1">${word.description}</p>
                            </div>
                            <div class="flex justify-between pt-3">
                                <button class=" px-2 rounded-xl bg-green-200 text-green-800">${word.category}</button>
                                <h3 class="font-bold text-lg pr-2">৳${word.price}</h3>
                            </div>
                            <div>
                                <button class=" w-[220px] rounded-3xl bg-green-600 text-white mt-2 px-2 py-2 mb-4">Add To Card</button>
                            </div>
                        </div>
                    </div>

        `;
        wordContainer.append(card);
    })
}
















































loadCategories();
