'use strict';

window.addEventListener('load', () => {
	let x = document.createElement('video');

	x.setAttribute('loop', true);
	x.setAttribute('autoplay', true);

	let y = document.createElement('source');
	y.src = 'https://r1.apx.pub/sly/chart.mp4';

	let z = document.createElement('source');
	y.src = 'https://r1.apx.pub/sly/chart.webm';

	x.appendChild(y);
	x.appendChild(z);

	document.body.appendChild(x);
});
