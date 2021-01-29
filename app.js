info = (container, project) => {
    var info = document.getElementById('info')
    switch (project) {
        case "current":
            info.innerHTML = "I'm the portfolio page you're on right now, I was made from absolute scratch!"
            container.setAttribute("href", "https://github.com/Samdvich/sammypanda.moe")
            container.childNodes[0].src = "assets/img/meta/favicon.ico"
            break
        case "compui":
            info.innerHTML = "I'm a web application for schools with team-based competitive events. I was built for Shailer Park State High School's use. You can try me out with U:admin@eq.edu.au P:admin.%.account. Here's my <a href='https://github.com/Samdvich/CompUI'>source code</a>"
            container.setAttribute("href", "http://shaiparkshs.ipto.com.au/11%20Digital%20Solutions/spage65/CompUI/login.php")
            container.childNodes[0].src = "assets/img/project/compui.png"
            break
        case "murb":
            info.innerHTML = "I'm Murb (my full name is \"Music Curb\"), I'm an <a href='https://github.com/Samdvich/murb'>open source</a> music broadcasting platform. I'm also Sammy's first time using typescript and his second time using Shell."
            container.setAttribute("href", "https://github.com/Samdvich/murb")
            container.childNodes[0].src = "assets/img/project/murb.png"
            break
        case "coderacer":
            info.innerHTML = "I'm a time-based quiz game, around basic web development knowledge. I'm also Sammy's first PHP project!"
            container.setAttribute("href", "https://github.com/Samdvich/CodeRacer")
            container.childNodes[0].src = "assets/img/project/coderacer.png"
            break
        case "dragonsgauntlet":
            info.innerHTML = "Sammy was called in by a past teacher to help on Dragons Gauntlet, it's a fully-fledged LARP interface and event manager, built with React and Typescript and translated to Vue/NuxtJS! But this project is sadly locked away as the development is proprietary"
            container.setAttribute("href", "https://github.com/Samdvich/DragonsGauntlet/tree/typescript")
            container.childNodes[0].src = "assets/img/project/dragonsgauntlet.png"
            break
        default:
            info.innerHTML = ""
            break
    }
}

themeToggle = (theme) => {
    if (theme == "light") {
        document.body.style.background = "linear-gradient(0deg, #ffe1f9 0%, #d5deff 20%)";
        document.getElementById('theme').setAttribute('onclick','themeToggle("dark")')
        document.getElementById('theme').style.color = "dimgray";
        document.querySelector(':root').style.setProperty('--theme', 'white');
    } else if (theme == "dark") {
        document.body.style.background = "#444444";
        document.getElementById('theme').setAttribute('onclick','themeToggle("light")')
        document.getElementById('theme').style.color = "white";
        document.querySelector(':root').style.setProperty('--theme', 'silver');
    }
}

themeToggle("light"); // Default Theme