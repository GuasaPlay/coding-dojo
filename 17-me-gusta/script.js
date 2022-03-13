const likes = [9, 12, 9];
const spans = [document.querySelector('#post-1'), document.querySelector('#post-2'), document.querySelector('#post-3')];

const like = (id) => {
	likes[id]++;
	spans[id].innerHTML = likes[id] + 'like(s)';
};
