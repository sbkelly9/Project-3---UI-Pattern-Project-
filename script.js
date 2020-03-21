const baseUrl = 'https://swapi.co/api/people'

function fetchCharacter(event) {
	const id = event.target.getAttribute("data-charid")
	const url = `${baseUrl}/${id}`

	fetch(url)
		.then(res => {
			let response = res.json();
			response.then(characterInfo => {
				event.preventDefault();
				this.blur(); // Manually remove focus from clicked link.

				const html = $('#ex1')
				const elementIdArray = ["name", "height", "mass", "hair_color", "skin_color", "eye_color", "birth_year", "gender"]

				elementIdArray.forEach(elemId => {
					$(`#${elemId}`).text(`${elemId}: ${characterInfo[elemId]}`)
				})

				$(html).appendTo('body').modal()
			});
		})
		.catch(err => {
			console.log("something went wrong...", err);
		});
}

document.querySelectorAll(".container").forEach(element => {
	$(element).click(fetchCharacter)
})








