const date = new Date();
const data = {
    name: "Nicolás Torres López",
    nickname: "D-Ghoost",
    imageProfile : "./img/profile.jpg",
    description: "Desarrollador apasionado con experiencia en React, Node.js, Angular y Flutter.",
    social:[],
    links:[
        {
            id: "github",
            name: "GitHub Profile",
            url: "https://github.com/D-Ghoost",
            username: "D-Ghoost"
        },
        {
            id: "linkedin",
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/nicolas-4torres/",
            username: "nicolas-4torres"
        },
        {
            id: "resume",
            name: "Download Resume",
            url: "#",
            emonji: "📄"
        }
    ],
    footer: "© "+ date.getFullYear() +" Nicolás Torres López • Developer"
}

export default data;