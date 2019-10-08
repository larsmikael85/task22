class Main {

	constructor() {
		this.init()
	}

	init() {
		fetch("/data/petjson")
		.then(res => res.json())
		.then(data => this.printData(data))
	}

	printData(petObject) {
		const petInfo = document.getElementsByClassName("petInfo")

		let nameP = document.createElement("p")
		let ageP = document.createElement("p")
		let likesP = document.createElement("p")
		let hatesP = document.createElement("p")
		let raceP = document.createElement("p")

		nameP.innerHTML = `My dogs name is ${petObject.name}.`
		ageP.innerHTML = `He is ${petObject.age}.`
		likesP.innerHTML = `He does like ${petObject.likes}.`
		hatesP.innerHTML = `He does not like ${petObject.hates}.`
		raceP.innerHTML = `He is an ${petObject.race}.`

		if (petInfo[0] != null) {
			petInfo[0].appendChild(nameP);
			petInfo[0].appendChild(ageP);
			petInfo[0].appendChild(likesP);
			petInfo[0].appendChild(hatesP);
			petInfo[0].appendChild(raceP);
		}

	}

}

window.addEventListener("DOMContentLoaded", () => {
	new Main()
})