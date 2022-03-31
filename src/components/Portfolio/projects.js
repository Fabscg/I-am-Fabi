import bikeHaven from '../../assets/projects/bike-haven.png'
import drumKit from '../../assets/projects/drum-kit.png'
import passGenerator from '../../assets/projects/passGenerator.png'
import techBlog from '../../assets/projects/tech-blog-site.png'
import runBuddy from '../../assets/projects/hero-image.jpg'
import artisLyrics from '../../assets/projects/artist-and-lyrics-project.png'
import missionPossible from '../../assets/projects/mission-possible.png'

export const projects = [
    {
        id: 1,
        imgURL: bikeHaven,
        title: "Bike Haven",
        URL:"https://bike-haven.herokuapp.com/",
        github: "https://github.com/Fabscg/Bike-Haven",
        description: "Bike Haven was a group project. Six of us collaborated to develop a cycling/parts sales site.We used Node as the server, MySQL as the DB, Handlebars library for the templates, Bootstrap, bcript, express, Sequelize, dotenv dependencies, and Heroku for the deployment.My greatest personal challenge with this project was Handlebars, as I had never used it and wanted to use it for this project to challenge myself."
    },
    {
        id: 2,
        imgURL: missionPossible,
        title: "Mission: Possible",
        URL:"https://glacial-cliffs-90348.herokuapp.com/",
        github: "https://github.com/Fabscg/group-3-project",
        description: "In this app made with my team mates, we are tryin to enocurage people to help others in need. Being benefactors we anted to make this app that connect to 3 different charities, so people can have an option to donate to any of their choice.  I worked in this project with GraphQL and Front-end, but this project has different dexpendencies like."

    },
    {
        id: 3,
        imgURL: artisLyrics,
        title: "Artist & Lyrics",
        URL:"https://chamibia.github.io/lyrics-finder/",
        github: "https://github.com/Fabscg/lyrics-finder",
        description: "This was the first project that I participated in with a team. The six team members divided the work to   make this amazing page that enables users to type a musician's name and then several songs from that artist appear. Once a song is selected, the lyrics appear. Alternatively, a user can type the song title and the lyrics will show up. This site is good for singers who want to reproduce music by other artists, or for music enthusiasts who want to learn their favourite songs. I was responsible for the front-end, so I used flexbox in order to make it functional and responsive, too. We used two different APIs (iTunes and lyrics.ovh), HTML, CSS and JavaScript."
    },
    {
        id: 4,
        imgURL: drumKit,
        title: "Drum Kit",
        URL:"https://fabscg.github.io/drum-kit/",
        github: "https://github.com/Fabscg/drum-kit",
        description: "This is just a simple page wth some keys that can be used from your keyboard to create music. When the the user types the given keys, they will hear the sound from the drums as displayed in the page. This is a fun page that I developed in 2020 while studying independently, and was one of my first works. Developing this page got me even more interested coding, and more than anything, helped me to get into JavaScript. There is HTML, CSS and JavaScript."
    },
    {
        id: 5,
        imgURL: runBuddy,
        title: "Run Buddy",
        URL:"https://fabscg.github.io/run-buddy/",
        github: "https://github.com/Fabscg/run-buddy",
        description: "Run buddy was a design from my bootcamp. This was one of the first projects that I worked on, and as such, I found it to be a big challenge at the time. It was created for a gym company, and provides information about their trainers and the location, while also allowing people to sign up for newsletters. Languages used here are HTML and CSS style."
    },
    {
        id: 6,
        imgURL: techBlog,
        title: "Tech Blog",
        URL:"https://afternoon-crag-71461.herokuapp.com/login",
        github: "https://github.com/Fabscg/MVC-challenge-ITblog",
        description: "Tech Blog was another bootcamp assignment, that I made using my own style. This is a blog that can be used by anyone, not just IT people. Users can post any information, news, or anything about the IT world. A personal challenge for me was using Handlebars. I find it a little bit complicated having to use Handlebars with MySQL, but I managed to make it work. Dependencies installed are express-sessions, express-handlebars, MySQL, Sequelize, dotenv and connect-session-sequelize for the DB."
    },
    {
        id: 7,
        imgURL: passGenerator,
        title: "Password Generator",
        URL:"https://fabscg.github.io/passgenerator/",
        github: "https://github.com/Fabscg/passgenerator",
        description: "This project is for individuals who like to use difficult password, however have a hard time coming up with them. It can be used to generate a password for any social media account. The languages used for this project are HTML, CSS and JavaScript."
    },
]

