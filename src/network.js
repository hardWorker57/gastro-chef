// const url = 'https://ind-nutrient-api1.p.rapidapi.com/food?limit=10';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6be32b6585msh739088a21dcd723p1cf50cjsn8c4f40ca3427',
// 		'X-RapidAPI-Host': 'ind-nutrient-api1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// let songId = "";
let getData = async () => {
    fetch('https://ind-nutrient-api1.p.rapidapi.com/food?limit=10', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6be32b6585msh739088a21dcd723p1cf50cjsn8c4f40ca3427',
            'X-RapidAPI-Host': 'ind-nutrient-api1.p.rapidapi.com'
        }
	})
	.then(response => response.json())
    .then(response => {
        console.log(response);
		// console.log(response);
		
		// document.querySelector('.song-card-image').src = response.album.cover_big;
		// document.querySelector('.song__title').innerHTML = response.title;
		// document.querySelector('.song__author').innerHTML = response.contributors[0].name;
	})
	.catch(err => {
		console.log(err);
	});
}
console.log(getData());
//  node network.js