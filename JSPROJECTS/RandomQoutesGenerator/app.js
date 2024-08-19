const qoutes = ["Character is power",
"Never be limited by other people’s limited imaginations",
"You have within you, right now, everything you need to deal with whatever the world can throw at you.",
"Only a life lived for others is a life worthwhile.",
"“If you fell down yesterday, stand up today.",
"“Dream as if you’ll live forever, live as if you’ll die today."
]
const btn = document.getElementById("btn")
const qoute = document.querySelector(".qoute")

btn.addEventListener("click", () => {
    console.log(document.body)
    qoute.textContent = qoutes[getRandomNumber()]
})

getRandomNumber = () => {
    return Math.floor(Math.random() * qoutes.length)
}