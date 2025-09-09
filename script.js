
// document.getElementById("btn1")
//     .addEventListener("click", function(){
//         alert("Hey.! What's Wrong? Why Are You Guys Poke Me?")
//     })


// Remove Active -->

const removeActive = ( ) => {
    const lessonButtons = document.querySelectorAll(".lesson-btn");
    lessonButtons.forEach(btn=>btn.classList.remove("active"));
}

// Modal Start-->
const loadWordDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    // console.log(url);

    const res = await fetch(url);
    const details = await res.json();

    console.log(details);
    displayWordDetails(details);

};

const displayWordDetails = (details)=>{
    console.log(details);
    const detailsBox = document.getElementById("details_container");
    detailsBox.innerHTML = `

        <h1 class="font-bold ">${details.plants.name}</h1>
        <img class=" h-[250px] w-[90%]  my-2 mx-auto rounded-lg" src="${details.plants.image}" alt="">
        <h1><span class="font-bold"> Category : </span>  ${details.plants.category}</h1>
        <h1><span class="font-bold"> Price : </span>${details.plants.price}</h1>
        <h1> <span class="font-bold"> Description : </span> ${details.plants.description}</h1>
        
    
    `;
    document.getElementById("word_modal").showModal();
}

// Modal End 

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

            <button onclick="loadLevelWord('${lesson.id}')" id="lesson_btn-${lesson.id}" class="btn btn-outline border-none hover:bg-green-600 hover:text-white text-gray-600 lesson-btn">  ${lesson.category_name} </button>

        `
    categoriesContainer.append(categoriesDiv);

    }
}

// Spinner

// const manageSpinner=(status) => {
//     if(status==true){
//         document.getElementById("spinner").classList.remove("hidden");
//         document.getElementById("word_container").classList.add("hidden");
//     } else {
//         document.getElementById("word_container").classList.remove("hidden");
//         document.getElementById("spinner").classList.add("hidden");
//     }
// }



// Spinner End

const loadLevelWord=(id) => {
    // console.log(name);
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    // console.log(url);
    fetch(url)
        .then(res=>res.json())
        // .then(data=>console.log(data))

        .then(data=> { const clickBtn = document.getElementById(`lesson_btn-${id}`)
            removeActive()
            clickBtn.classList.add("active")
            displayLevelWord(data.plants) })

        // .then(data=>displayLevelWord(data.plants)) // Active class er age eita use korchi. 
}

const displayLevelWord=(words)=>{
    // console.log(words)
    const wordContainer =document.getElementById("word_container");
    wordContainer.innerHTML="";
    words.forEach((word) => {
        // console.log(word);

        const card=document.createElement("div");
        card.innerHTML=
        `
            <div class="bg-white rounded-xl  w-[300px] h-[450px] mt-5 flex flex-col justify-between ">
                        <div>
                            <img class="h-[180px] w-[280px] my-2 mx-2 rounded-lg" src="${word.image}" alt="">
                        </div>
                        <div class="pl-4">
                            <div class="">
                                <h2 onclick="loadWordDetails(${word.id})" class="text-lg font-bold">${word.name}</h2>
                                <p class="text-gray-600 pt-1">${word.description}</p>
                            </div>
                            <div class="flex justify-between pt-3">
                                <button class=" px-2 rounded-xl bg-green-200 text-green-800">${word.category}</button>
                                <h3 class="font-bold text-lg pr-2">৳${word.price}</h3>
                            </div>
                            <div>

                                <button  class=" w-[220px] rounded-3xl bg-green-600 text-white mt-2 px-2 py-2 mb-4">Add To Card</button>
                            </div>
                        </div>
                    </div>

        `;
        wordContainer.append(card);
    })
}
















































loadCategories();
