/**
 * set global variables
 */
const pet = document.getElementById('pet')

/**
 * remove pet if portfolio.html can be found anywhere in the url
 * and add overflow-y to the page
 */
if (window.location.href.split("/").find(part => part == "portfolio.html")) {
    pet.remove()
    document.getElementById("overflowy").style["overflow-y"] = "auto"; 
}

/**
 * set the play state of the kitty turny animation
 * @param {string} id
 */
function isPetting(id) {
    if (id == pet.id) {
        pet.style.animationPlayState = "running"
        setTimeout(() => {
            pet.style.animationPlayState = "paused"
        }, 2000)
    } else {
        pet.style.animationPlayState = "paused"
    }
}

/**
 * detect if the users mouse is moving on top of the #pet element
 */
pet.addEventListener("mousemove", (mm) => {
    isPetting(mm.target.id)
})

/**
 * resets each portfolio goto link except the one with the array index of the omit param
 * @param {integer} omit
 */
function resetGoto(omit) {
    const allGotos = document.getElementsByClassName('nav')

    for(var i = 0; i < allGotos.length; i++) {
        if (i !== omit) {
            allGotos[i].style.visibility = "hidden"
        } else {
            allGotos[i].style.visibility = "visible"
        }
    }
}

/**
 * stores info and sets the goto link for each portfolio
 * @param {object} container | usually just called with 'this' on the element
 * @param {string} project | the name of the project in all lowercase
 */
info = (container, project) => {
    var info = document.getElementById('info')
    info.style.visibility = "visible"
    switch (project) {
        case "current":
            info.innerHTML = "I'm the portfolio page you're on right now, I was made from absolute scratch!"
            container.childNodes[3].setAttribute("href", "https://github.com/sammypanda/sammypanda.moe")
            container.childNodes[1].src = "assets/img/meta/favicon.ico"
            resetGoto(0)
            break
        case "compui":
            info.innerHTML = "I'm a web application for schools with team-based competitive events. I was built for a real high school to use."
            container.childNodes[3].setAttribute("href", "https://github.com/sammypanda/CompUI")
            container.childNodes[1].src = "assets/img/project/compui.png"
            resetGoto(1)
            break
        case "murb":
            info.innerHTML = "I'm Murb (my full name is \"Music Curb\"), I'm an <a href='https://github.com/sammypanda/murb'>open source</a> music broadcasting platform. I'm also Sammy's first time using typescript and his second time using Shell."
            container.childNodes[3].setAttribute("href", "https://github.com/sammypanda/murb")
            container.childNodes[1].src = "assets/img/project/murb.png"
            resetGoto(5)
            break
        case "coderacer":
            info.innerHTML = "I'm a time-based quiz game, around basic web development knowledge. I'm also Sammy's first PHP project!"
            container.childNodes[3].setAttribute("href", "https://github.com/sammypanda/CodeRacer")
            container.childNodes[1].src = "assets/img/project/coderacer.png"
            resetGoto(2)
            break
        case "dragonsgauntlet":
            info.innerHTML = "Sammy was called in by a past teacher to help on Dragons Gauntlet, it's a fully-fledged LARP interface and event manager, built with React and Typescript and translated to Vue/NuxtJS! But this project is sadly locked away as the development is proprietary"
            container.childNodes[3].setAttribute("href", "https://github.com/sammypanda/DragonsGauntlet")
            container.childNodes[1].src = "assets/img/project/dragonsgauntlet.png"
            resetGoto(3)
            break
        case "rnotes-v":
            info.innerHTML = "This was Sammy's super quick first attempt at Vue"
            container.childNodes[3].setAttribute("href", "https://github.com/sammypanda/RNotes-V/")
            container.childNodes[1].src = "assets/img/project/rnotes-v.png"
            resetGoto(4)
            break
        default:
            info.innerHTML = ""
            break
    }
}

/**
 * for changing theming and keeping a localstorage 'theme' entry
 * @param {string} theme | the name of the theme
 */
themeToggle = (theme) => {
    if (theme == "light") {
        document.documentElement.style.background = "linear-gradient(to top, #ffe1f9 0%, #d5deff 20%)";
        document.getElementById('theme').setAttribute('onclick','themeToggle("dark")')
        document.getElementById('theme').style.color = "dimgray";
        document.getElementById('theme').style.backgroundColor = "#d5deff";
        document.querySelector(':root').style.setProperty('--theme', 'white');
        document.querySelector(':root').style.setProperty('--container-theme', 'hsla(211, 17.5%, 34.7%, 0.2)');
        pet.alt = "Dog";
        pet.src = "assets/img/dog.png"
        localStorage.setItem('theme', "light");
    } else if (theme == "dark") {
        document.documentElement.style.background = "#444444";
        document.getElementById('theme').setAttribute('onclick','themeToggle("light")')
        document.getElementById('theme').style.color = "white";
        document.getElementById('theme').style.backgroundColor = "#444444";
        document.querySelector(':root').style.setProperty('--theme', 'silver');
        document.querySelector(':root').style.setProperty('--container-theme', 'hsla(0, 0%, 74.9%, 0.2)');
        pet.alt = "Cat";
        pet.src = "assets/img/cat.png"
        localStorage.setItem('theme', "dark");
    }
}

/**
 * changing the portfolio category
 */
changePortfolio = (title, category) => {
    console.log(document.getElementsByClassName('projects'));

    const pcategories = document.getElementsByClassName('projects'); // portfolio categories
    const ptitles = document.getElementsByClassName('descriptor'); // the titles of the portfolios
    const currcategory = document.getElementById(category); // current selected category

    [...pcategories].forEach(category => {
        // console.log(category)
        category.style.display = "none"
    });

    [...ptitles].forEach(ptitle => {
        console.log(ptitle)
        ptitle.classList.remove("selected")
    })

    document.getElementById('info').style.visibility = "hidden"
    currcategory.style.display = "flex";
    title.classList.add("selected")
}

/**
 * searches localstorage for theme, or provides default theme
 */
if (localStorage.theme) {
    themeToggle(localStorage.theme)
} else {
    themeToggle("light"); // Default Theme
}
