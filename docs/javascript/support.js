import { cardsData } from "/docs/javascript/data.js";

const openSlidebar = document.getElementById("openSlidebar");
const slidebar = document.getElementById("slidebar");
const closeSliderbar = document.getElementsByClassName("closeSliderbar");

// slider open/close

openSlidebar.addEventListener('click', () => {
    slidebar.classList.add("w-full")
    slidebar.classList.remove("w-0")
})

Array.from(closeSliderbar).forEach((btn) => {
    btn.addEventListener('click', () => {
        slidebar.classList.add("w-0")
        slidebar.classList.remove("w-full")
    })
})

const categoryList = document.getElementById("category-list");

// Render the titles in a list
function renderTitleList(data) {
    categoryList.innerHTML = "";
    data.forEach((card) => {
        const cardId = card.Title.toLowerCase().replace(/\s+/g, "-");
        const li = document.createElement("li");

        li.className =
            "bg-[#4b3b79] mt-2.5 rounded-lg px-5 py-3.5 cursor-pointer hover:bg-[#5a4a8a] transition-all duration-500 text-zinc-100 font-medium";

        // Add anchor inside li
        li.innerHTML = `<a href="/user-guide.html#${cardId}">${card.Title}</a>`;
        categoryList.appendChild(li);
    });
}

renderTitleList(cardsData);