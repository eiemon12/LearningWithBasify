
//Task-1
let a=10, b=5;
console.log("Add: ",a+b);
console.log("Sub: ",a-b);
console.log("Mul: ",a*b);
console.log("Div: ",a/b);

//Task-2
let celsius=35;
console.log("Fahrenheit: ",(celsius*9/5)+32);

//Task-3
let num=prompt("Input any number: ");
if(num==0){
    console.log("The number is zero");
}
else if(num<0){
    console.log("The number is Negative");
}
else if(num>0){
    console.log("The number is Positive");
}
else{
    console.log("This is not a number");
}

//Task-4
let grade=prompt("Input a number between 1-100: ");
if(grade<=100 && grade>=90){
    console.log("Your grade is: A");
}
else if(grade<90 && grade>=80){
    console.log("Your grade is: B");
}
else if(grade<80 && grade>=70){
    console.log("Your grade is: C");
}
else if(grade<70 && grade>=60){
    console.log("Your grade is: D");
}
else if(grade<60 && grade>=0){
    console.log("Your grade is: F");
}
else{
    console.log("Invalid input");
}

//Task-5
let num2=prompt("Input any number: ");
if(num2%2==0){
    console.log("This is even number");
}
else{
    console.log("This is odd number");
}