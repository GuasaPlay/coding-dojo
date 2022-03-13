function playVideo(video) {
	setTimeout(() => {
		video.play();
	}, 300);
}

function pauseVideo(video) {
	video.pause();
	video.currentTime = 0;
}
