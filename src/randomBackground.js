const backgroundImages = [
	'1.png',
	'2.png',
	'3.png',
	'4.png',
	'5.png',
	'6.png',
	'7.png',
	'8.png',
	'9.png',
	'10.png',
];

const body = document.querySelector('body');
const container = document.getElementsByClassName('container');
const button = document.querySelector('#backgroundChange');
const length = backgroundImages.length;
const chosenImage = backgroundImages[Math.floor(Math.random() * length)];
const bgImg = document.createElement('img');

bgImg.src = `./background-images/${chosenImage}`;
document.body.appendChild(bgImg);
