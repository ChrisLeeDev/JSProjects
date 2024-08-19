//Components for Item number 1
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => {
    //populate variables
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let telephone = document.getElementById("telephone").value
    let major = document.getElementById("major").value

    let x = `Hello! ${name}, I see that you are form ${address} and you are also pursuing your degree ${major} and you can be contacted using ${telephone}.`
    document.getElementById("output").innerHTML = x
})

//Components for Item number 2
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {

    let sales = document.getElementById("sales").value
    let profit = sales * 0.23
    let x = `Your Annual profit is ${profit}.`
    document.getElementById("outputsales").innerHTML = x
})


//Components for Item number 3
const btn3 = document.getElementById("btn3")
btn3.addEventListener("click", () => {

    let speed = document.getElementById("speed").value


    let fiveHrs = speed * 5
    let eightHrs = speed * 8
    let twelveHrs = speed * 12


    let a = `The distance the car will travel ${fiveHrs}.`
    let b = `The distance the car will travel ${eightHrs}.`
    let c = `The distance the car will travel ${twelveHrs}.`
    
    document.getElementById("display1").innerHTML = a
    document.getElementById("display2").innerHTML = b
    document.getElementById("display3").innerHTML = c
})

//Components for Item number 4
const btn4 = document.getElementById("btn4")
btn4.addEventListener("click", () => {

    let miles = document.getElementById("miles").value
    let gas = document.getElementById("gas").value

    let result = miles / gas

    let a = `Miles-per-gallon = ${miles} /  ${gas}  =  ${result}.`

    document.getElementById("resultmpg").innerHTML = a
})

//Components for Item number 5
const btn5 = document.getElementById("btn5")
btn5.addEventListener("click", () => {

    let celsius = document.getElementById("celsius").value

    let farenheit = (9/5) * celsius + 32

    let a = `Farenheit = ${farenheit}`

    document.getElementById("displayF").innerHTML = a
})

//Components for Item number 6
const btn6 = document.getElementById("btn6")
btn6.addEventListener("click", () => {

    let cookies = document.getElementById("cookies").value

    let calories = 300
    let bagofcookies = 40
    let servings = 10

    let computation = calories / (bagofcookies/servings) * cookies

    let a = `The total of cookies you have eaten is ${cookies} and it is composed of total calories ${computation}`

    document.getElementById("displaycal").innerHTML = a

})


//Components for Item number 7
const btn7 = document.getElementById("btn7")
btn7.addEventListener("click", () => {

    let male = document.getElementById("male").value
    let female = document.getElementById("female").value

    let total = parseInt(male) + parseInt(female)
    let malepop = male / total * 100
    let femalepop = female / total * 100

    let a = `The Percentage of Male Population is ${malepop.toFixed(2)} while the Female Percentage is ${femalepop.toFixed(2)}`

    document.getElementById("percentage").innerHTML = a

})







