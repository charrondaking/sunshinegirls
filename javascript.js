var i = 0,
	girls = document.getElementsByClassName('carousel_girl');

	setInterval(function() {
		girls[i].style.display = 'block';
		if(i >= girls.length - 1){
			i = 0;
		} else {
			i++;
		}
	}, 3000);
