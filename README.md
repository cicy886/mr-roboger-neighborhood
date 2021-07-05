# Mr.Roboger's Neighborhood
___________
#### By Sisi Vieira
## Discription
This project includes one HTML file, one custom CSS file, one custom JS file, bootstrap.css, jquery-3.6.0.js, and one MD file. This webpage is supposed to replace the digits that contain 3 to "Won't you be my neighbor?". Replace all the digits that contain 2 but not 3 to "Boop" and replace all the digits that contain 1, but not 2 and 3 to "Beep!". You can add more content to the HTML file, the CSS file can decorate the webpage, and the JS file can make the webpage interactive with users.
## Program Steup instruction
On GitHub, navigate to the main page of the repository. Above the list of files, click **Code**. Click **Download ZIP** and download the files onto your machine. Open the HTML file or/and the CSS file with VS code or other coding applications you preferred.
## Known Bugs
The result may not be correct if the number contains too many digits.
## Github page website
https://cicy886.github.io/mr-roboger-neighborhood/
## Lisence
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Sisi Vieira


## The following are my specs
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