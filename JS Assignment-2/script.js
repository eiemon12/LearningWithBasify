//Sum of numbers(loop)
let n=prompt("Input a number: "),count=0;
for(let i=0;i<=n;i++){
    count=count+i;
}
console.log("The number is: ",count);

//Object properties
let book={
    title: prompt("Title of Book: "),
    author: prompt("Author Name: "),
    year: prompt("Year of publication: ")
}
function viewDetails(book){
    return console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
}

viewDetails(book);

//Array reversal
let arr=[1,2,3,4,5];
for(let i=arr.length;i>-1;i--){
    console.log(arr[i]);
}

//Count Occurences(1D Array)
function countOccurences(arr){
    var occurences={};
    for(let i=0;i<arr.length;i++){
        var string=arr[i];
        if(occurences[string]){
            occurences[string]++;
        }
        else{
            occurences[string]=1;
        }
    }
    return occurences;
}

var result = countOccurences(['apple', 'banana', 'apple']);
console.log(result);

//Multiplication table(2D Array)
function multiplicationTable(n) {
    var table = new Array(n);

    for (var i = 0; i < n; i++) {
        table[i] = new Array(n); 
        for (var j = 0; j < n; j++) {
            table[i][j] = (i + 1) * (j + 1); 
        }
    }
    return table;
}
var result = multiplicationTable(3);
console.log(result);

//Average of array(1D)
function average(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum / arr.length;
    return avg;
}

var result = average([1, 2, 3, 4, 5]);
console.log(result); 

//Flatten a 2D Array
function flatten(arr) {
    var flattenedArray = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            flattenedArray.push(arr[i][j]);
        }
    }
    return flattenedArray;
}

var result = flatten([[1, 2], [3, 4]]);
console.log(result); 
