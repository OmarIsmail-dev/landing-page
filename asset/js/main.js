let NavLinkAr = document.getElementById("Nav-Link-Ar");
let NavLinkEn = document.getElementById("Nav-Link-En");
let currentLang = document.getElementById("current-lang");
let currentFlag = document.getElementById("current-flag");

NavLinkAr.addEventListener("click", (e) => {
    e.preventDefault();
    currentLang.textContent = "العربية";
    currentFlag.src = "asset/image/square_16149560.png";

    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
});

NavLinkEn.addEventListener("click", (e) => {
    e.preventDefault();
    currentLang.textContent = "English";
    currentFlag.src = "asset/image/united-kingdom_4060233.png";

    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", "en");

});
