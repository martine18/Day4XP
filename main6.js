//section 1
hotelcost()

function hotelcost(){
    let answer

    while (Number(answer) == NaN){
        answer = prompt("how many night would you like to stay")
    }
    const numberofNights = Number(answer)
    const costPerNight = 140
    const totalPrice = numberofNights + costPerNight
    console.log("totalPrice")
   return totalPrice
}

function isOnlynumber(str){
    const regex = new RegExp(/[0-9]*$/)
    return regex.test(str)
}


//section 2

 const price = planeRideCost()
function planeRideCost(){
    let destination = ""

    while (destination == ""|| includeNumbers(destination)) {
        destination = prompt("where are you going?")
    }
    console.log("your destination is",destination)
    if(destination ==="London") return "108$"
    if(destination ==="London") return "220$"
    return"300$"
}

//section 3

function rentalcarcost(){
    let answer

    while (!isOnlyNumbers(answer)){
        answer = prompt("How many days would you like to rent the car")
    }
    const dailyPrice = 40
    const numberOfDays = Number(answer)

    let discount = 0
    if (numberOfDays >= 10) discount = 0.05

    const totalPrice = dailyPrice * numberOfDays * (1 - discount)
    console.log("totalPrice:",totalPrice)
    return totalPrice
}


//section4

function totalVacationCost(){
    const carprice = rentalcarcost()
    const hotelprice = hotelcost()
    const planeprice = planeRideCost()

    console.log(`hotelprice:`,hotelPrice)
    console.log(`carPrice:`,carPrice)
    console.log(`planeprice:`,planePrice)

}
totalVacationCost()













