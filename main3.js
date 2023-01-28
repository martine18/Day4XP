//Exercise 3 : Find The Numbers Divisible By 23



function isDivisible(){
    let sum = 0
for (let i = 0;i < 500; i++){
    if (i % 23 === 0) {
        console.log(i)
        sum = sum + i
}
}
console.log("the sum od number divided by 23 is",sum)

}
isDivisable()


















