// Polyfill pour l'utilisation de forEach dans des éléments de type NodeList

if (NodeList.prototype.forEach === undefined) {
	NodeList.prototype.forEach = Array.prototype.forEach
}

// 1. Test pour comprendre le fonctionnement de l'intersectionObserver sur la console

let observer = new IntersectionObserver(function(entries){
	entries.forEach(function(entry){
		if (entry.intersectionRatio > 0.1) {
			entry.target.classList.remove('not-visible')
			// observer.unobserve(entry.target)
			console.log('item visible')
		}else{
			entry.target.classList.add('not-visible')
		}
	})
	console.log(entries)
},{
	threshold: [0.1]
	// La console affiche qqchose quand le ration est supérieur à 0.5 et que l'image apparaît au scrolling
	// La console affiche qqchose quand le ration est inférieur à 0.5 et que l'image disparait au scrolling
})

// On le fait pour l'ensemble des items qui ont la classe title

let items = document.querySelectorAll('.title')
items.forEach(function(item){
	item.classList.add('not-visible')
	observer.observe(item)
})
console.log('test');

// On le fait pour l'ensemble des items qui ont la classe container-content

let itemsContainer = document.querySelectorAll('.container-content')
itemsContainer.forEach(function(itemContainer){
	itemContainer.classList.add('not-visible')
	observer.observe(itemContainer)
})


// On le fait pour l'ensemble des items qui ont la classe project-container-content
let itemProjectContainer = document.querySelector('.project-container-content')
itemProjectContainer.classList.add('not-visible')

observer.observe(document.querySelector('.project-container-content'))
