function myFunction() {
	const image = document.createElement('img');
	image.src= './images/photo.png';

	var parent = document.getElementById("mydiv100");
	parent.appendChild(image);
    
    }