import { cardsData } from "/docs/javascript/data.js";

const container = document.getElementById("cards-container");
const openSlidebar = document.getElementById("openSlidebar");
const slidebar = document.getElementById("slidebar");
const closeSliderbar = document.getElementsByClassName("closeSliderbar");
const btnPatient = document.getElementById("btn-patient");
const btnProfessional = document.getElementById("btn-professional");
const searchForm = document.querySelector("form");
const searchInput = document.querySelector("input[type='text']");

// slider open/close

openSlidebar.addEventListener('click',()=>{
    slidebar.classList.add("w-full")
    slidebar.classList.remove("w-0")
})

Array.from(closeSliderbar).forEach((btn)=>{
    btn.addEventListener('click',()=>{
        slidebar.classList.add("w-0")
        slidebar.classList.remove("w-full")
    })
})

let currentCategory = "all"; // "patient", "professional", or "all"

// Render cards
function renderCards(data) {
    container.innerHTML = ""; // Clear previous
    data.forEach((card) => {
        const cardHTML = `
      <div class="md:mb-12 mb-8">
        <h2 class="text-xl font-semibold text-[#322659]">${card.Topic} &nbsp;
          <span class="px-2 py-0.5 rounded-md border border-[#322659] text-xs">${card.Guide}</span>
        </h2>
        <h3 class="font-medium inline-flex text-white bg-[#322659] px-5 py-2 rounded-lg mt-2">${card.Page}</h3>
        <h4 class="text-lg font-medium mt-5 text-[#322659]">${card.Title}</h4>
        <p class="text-zinc-600 mt-2">${card.Content}</p>
        <a href="${card.Link}" target="_blank" class="block mt-3 text-[#322659] hover:underline">${card.Link}</a>
        <img src="https://placehold.co/800x200" class="w-full mt-3 rounded-lg" alt="">
      </div>
    `;
        container.innerHTML += cardHTML;
    });
}

// Button active state
function setActiveButton(activeBtn, inactiveBtn) {
    activeBtn.classList.add("bg-white", "text-[#322659]");
    activeBtn.classList.remove("bg-transparent", "text-white");

    inactiveBtn.classList.remove("bg-white", "text-[#322659]");
    inactiveBtn.classList.add("bg-transparent", "text-white");
}

// Filter function combining category and search
function filterAndRender() {
    const query = searchInput.value.trim().toLowerCase();

    let filtered = cardsData.filter((card) => {
        const inCategory =
            currentCategory === "all" ||
            card.Guide.toLowerCase().includes(currentCategory) ||
            card.Guide.toLowerCase() === "both";

        const inSearch =
            card.Topic.toLowerCase().includes(query) ||
            card.Title.toLowerCase().includes(query) ||
            card.Content.toLowerCase().includes(query);

        return inCategory && inSearch;
    });

    renderCards(filtered);
}

// Initial load
renderCards(cardsData);

// Category buttons
btnPatient.addEventListener("click", () => {
    currentCategory = "patient";
    setActiveButton(btnPatient, btnProfessional);
    filterAndRender();
});

btnProfessional.addEventListener("click", () => {
    currentCategory = "professional";
    setActiveButton(btnProfessional, btnPatient);
    filterAndRender();
});

// Search form
searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    filterAndRender();
});
