const clockTitle = document.querySelector('#js-clock');

function clock() {
	const date = new Date();
	// const months = String(date.getMonth()).padStart(2, '0');
	// const day = String(date.getDay()).padStart(2, '0');
	// const year = String(date.getFullYear()).padStart(2, '0');
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');
	clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

clock();
setInterval(clock, 1000);
