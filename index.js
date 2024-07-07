const colourCode =document.getElementById('color-code');
const colourBox = document.getElementById('color-box');
const copyHex  = document.getElementById('copy-btn');


function generateBtn() {
         const hexChars = '0123456789ABCDEF'
         let hexColor  = '#';

         for (let i = 0; i < 6; i++) {
         hexColor += hexChars [Math.floor(Math.random() * 16)];
};

colourBox.style.backgroundColor = hexColor;
colourCode.innerHTML = hexColor;
colourCode.style.color = hexColor;
}

//This is the func... that copy hexcode
function copyHEX() {
         const colorText = colourBox.style.backgroundColor;
         const hexCode = rgbtoHex(colorText);
         const tempInput =document.createElement('input')
         document.body.appendChild(tempInput);
         tempInput.value = hexCode;
         tempInput.select();
         document.execCommand('copy');
         document.body.removeChild(tempInput)
         alert('Color copied to clipboard: ' + hexCode)
} 

function rgbtoHex(rgbColor) {
         const regex = /rgb\((\d+), (\d+), (\d+)\)/;
         const matches = regex.exec(rgbColor);
         const r = parseInt(matches[1]);
         const g = parseInt(matches[2]);
         const b = parseInt(matches[3]);
         return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

}


function componentToHex(c) {
         const hex = c.toString(16);
         return hex.length == 1 ? "0" + hex : hex;
         
}
function copyRGB() {
         const colorText = colourBox.style.backgroundColor;
         const rgbCode =colorText;
         const tempInput =document.createElement('input')
         document.body.appendChild(tempInput);
         tempInput.value = rgbCode;
         tempInput.select();
         document.execCommand('copy');
         document.body.removeChild(tempInput)
         alert('Color copied to clipboard: ' + rgbCode)
} 
function resetBtn() {
         colourBox.style.backgroundColor = 'inherit';
         colourCode.innerHTML = '';      

}