// Qn1. Ask user’s age and check if eligible to vote
//      If age >= 18 → “Eligible”, else → “Not eligible”
// Solution:

// let age = prompt("Enter age: ");
// if(age ===null || age.trim().length === 0 || isNaN(age))
//     console.error("Please enter a valid age.");
// else {
//     age = Number(age);
//     if (age <= 0)
//         console.log("Age can't be 0 or negative.");
//     else if (age < 18)
//         console.log("Not eligible.");
//     else
//         console.log("Eligible.");
// }
// *******************************************


// Qn2. Print multiplication table of 5 using loop
// Solution:

// for(let i = 1; i<=10;i++){
//     console.log(`5 x ${i} = ${5*i}`)
// }
// *******************************************



// Qn3. Count how many numbers between 1 and 15 are greater than 8 ,Loop and count conditionally.
// Solution:

// let count = 0;
// for(let i = 1;i<=15;i++){
//     if(i>8) count++;
// }
// console.log(count);
// *******************************************


// Qn4. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.
// Solution:

// let correctPass = "Shiva_Pradhan";
// let user = prompt("Enter your password: ");
// if(user === null || user.trim()==="" )
//     console.error("Enter your password: ");
// else {
//     if( user.trim() === correctPass) console.log("Welcome");
//     else console.log("Wrong Password")
// }
// *******************************************



// Qn5. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”
// Solution:

// let correctPass = "Shiva_Pradhan";
// let attempt = 0;
// let flag = false;
// while(attempt < 3){
//     attempt++;
//     let user = prompt("Enter your password: ");
//     if(user === correctPass) 
//         {console.log("Welcome to your account");
//             flag = true;
//     break;}
// }
// if(!flag) console.log("Account Locked");
// *******************************************



// Qn6. Ask user for words until they type “stop”. Count how many times they typed “yes”
//Loop until "stop" is typed. Count "yes".
// Solution:

// let count = 0;
// while(true){
//     let user = prompt("Enter a word: ");
//     if(user === null) break;
//     if(user.trim() === "yes") count++;
//     else if( user.trim()==="stop") break;
// }
// console.log(`Yes printed ${count} times.`);
// *******************************************



// Qn7. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.
// Solution:

// for(let i = 1; i<=50; i++){
//     if(i%7===0) console.log(i);
// }
// *******************************************



// Qn8. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
// Solution:

// let oddCount = 0;
// for(let i = 1; i<=30 ;i++){
//     if(i%2!==0) oddCount++;
// }
// console.log(`Total odd numbers from 1 to 30: ${oddCount}`)
// *******************************************



// Qn9. Keep asking number until user enters an even number, Use while loop. Stop only if input is even.
// Solution:

// while(true){
//     let user = prompt("Enter a number: ");
//     if(user === null) 
//         break;
//     else if(+user.trim()%2===0) 
//         break;
// }
// *******************************************



// Qn10. Print numbers between two user inputs
// Input start and end using prompt() → print all between.
// Solution:

// let start = +prompt("Enter starting number: ");
// let end = +prompt("Enter ending number: ");
// if(start > end) 
//         { console.log("Starting number can't be bigger than ending number.")
//             }
// else {
//     while(start <= end){
//         console.log(start)
//         start++;
//     }
// }
// *******************************************


// Qn11. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.
// Solution:

// let oddCount = 0;
// for(let i = 1; i<=20;i++){
//     if(oddCount===3) break;
//     else if(i%2!=0) {
//         oddCount++;
//         console.log(i);
// }}
// *******************************************



// Qn12. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.
// Solution: #Note= +null === 0 in js

// let posCount = 0;
// for(let i = 1;i<=5;i++){
//     let user = prompt("Enter a number: ");
//     if(user===null) break;
//     else if(+user.trim() > 0) posCount++;
// }
// console.log(`Total positive numbers found ${posCount}`)
// *******************************************



// Qn13. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times. If enough balance → deduct ,Else → print “Insufficient balance”
// Solution:

let cb = 1000;
let attempt = 0;
while(attempt < 3){
    attempt++;
    let wb = prompt("Enter withdrawal amount: ");

    if(wb === null) break;
    wb = Number(wb);

    if(wb === 0)
        console.log(`Available Balance ${cb}`);
    else if(wb <= cb){
        cb = cb - wb;
        console.log(`Transaction Successful \nAvailable Balance ${cb}`);
    }
    else
        console.log(`Insufficient Balance. \nAvailable Balance ${cb}`);

    console.log(`${3-attempt} attempts left`);
}

