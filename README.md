Describe: rangeNumber()

Test: "It should contain 1 number, if the given number is 0."
Code:
const num=0;
rangeNumber(num);
Expected Output: 0

Test: "It should contain 6 numbers if the given number is 5."
code:
const num=2;
rangeNumber(num);
Expected Output: 0,1,2,3,4,5

Test: "It should return 'Beep' if the display number contains 1 in a number with one digit."
code:
const num=1;
rangeNumer(num);
Expected output: 0, Beep!

Test: "It should return 'Boop' if the display number contains 2 in a number with one digit."
code:
const num=2;
rangeNumber(num);
Expected output: 0, Beep!, Boop

Test: "It should retrun 'Won't you be my neighbor? if the display number contains 3 in a number with one digit."
code:
const num=3;
rangeNumber(num);
Expected output: 0, Beep!, Boop, Won't you be my neighbor?

Test: "It should return 'won't you be my neighbor?' if the display number constains 3 in a number with more than 1 digit"
code:
const num=13;
rangeNumber (num);
Expected output: 0, Beep!, Boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, 10, 11, 12, Won't you be my neighbor?

Test: "It should return 'Boop' if the display number contains 2 and doesn't have 3"
code:
const num=14;
rangeNumber (num);
Expected output: 0, Beep!, Boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, 10, 11, Boop, Won't you be my neighbor?, 14

Test: "It should return 'Beep!' if the display number contains 1 and doesn't have 2 and 3"
code:
const num=15;
rangeNumber (num);
Expected output: 0, Beep!, Boop, Won't you be my neighbbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop, Won't you be my neighbor?, Beep!, Beep!