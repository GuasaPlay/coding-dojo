const requests = document.querySelector('#requests');
const connections = document.querySelector('#connections');
const myname = document.querySelector('#myname');

const accept = (id) => {
	const element = document.querySelector(id);
	element.remove();
	requests.innerText--;
	connections.innerText++;
};

const ignore = (id) => {
	const element = document.querySelector(id);
	element.remove();
	requests.innerText--;
};

const edit = () => {
	username.innerText = 'Marisa G';
};
