const backgroundImages = [
	'1.jpg',
	'2.jpg',
	'3.jpg',
	'4.jpg',
	'5.jpg',
	'6.jpg',
	'7.jpg',
	'8.jpg',
	'9.jpg',
	'10.jpg',
];

const body = document.querySelector('body');
const container = document.getElementsByClassName('container');
const button = document.querySelector('#backgroundChange');
const length = backgroundImages.length;
const chosenImage = backgroundImages[Math.floor(Math.random() * length)];
const bgImg = document.createElement('img');

bgImg.src = `./background-images/${chosenImage}`;
document.body.appendChild(bgImg);
