const cookie = document.querySelector('.cookie');

const loading = () => alert('Loading weather report...');

const accept = () => cookie.remove();

const randomF = (temp) => Math.round((9 / 5) * temp + 32);

const randomC = (temp) => Math.round((5 / 9) * (temp - 32));

const convert = (element) => {
	for (let i = 1; i < 9; i++) {
		const temp = document.querySelector('#temp' + i);
		const tempValue = parseInt(temp.innerText);
		if (element.value == '°C') {
			temp.innerText = randomC(tempValue);
		} else {
			temp.innerText = randomF(tempValue);
		}
	}
};
