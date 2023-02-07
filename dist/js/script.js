const menuBar = document.querySelector(".icon-bar")
const sideBar = document.querySelector(".menu-nav")

menuBar.addEventListener("click", () => {
    sideBar.classList.toggle("menu-active")
})

const iconClose = document.querySelector(".icon-close")

iconClose.addEventListener("click", () => {
    sideBar.classList.remove("menu-active")
})

// kutipan filosofi
// 2023
const kutipanFilosofi2023 = document.querySelector(".duatiga")
const keTahun2023 = document.querySelector(".tahun-2023")

kutipanFilosofi2023.addEventListener("click", () => {
    keTahun2023.classList.toggle("tahun2023-active")
})
// 2022
const kutipanFilosofi2022 = document.querySelector(".duadua")
const keTahun2022 = document.querySelector(".tahun-2022")

kutipanFilosofi2022.addEventListener("click", () => {
    keTahun2022.classList.toggle("tahun2022-active")
})


// Renungan Kristen

// jangan kuatir
const janganKuatir = document.querySelector(".hal-kekuatiran")
const keJanganKuatir = document.querySelector(".jangan-kuatir")

janganKuatir.addEventListener("click", () => {
    keJanganKuatir.classList.toggle("jangan-kuatir-active")
})

// rubah background body
// const colorBody = document.getElementsByTagName("body")

// for (let i = 0; i < colorBody.length; i++){
//     colorBody[i].style.backgroundColor = "#fff9d1"
// }