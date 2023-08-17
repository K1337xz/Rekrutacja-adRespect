window.onload = () => {
	const grid = document.querySelector(".grid");
	const masonry = new Masonry(grid, {
		itemSelector: ".grid-item",
		gutter: 43,
		originTop: true,
		fitWidth: true,
	});
};

const galleryItem = document.querySelectorAll(".grid-item");

for (let i = 0; i < galleryItem.length; i++) {
	galleryItem[i].addEventListener("click", (e) => {
		let modalImage = document.querySelectorAll(".modalCarusel");
		for (let z = 0; z < modalImage.length; z++) {
			let src = e.target.getAttribute("src");
			if (modalImage[z].classList.contains("active")) {
				let childrenSrc = modalImage[z].children[0];
				childrenSrc.src = src;
				const modal = new bootstrap.Modal(
					document.querySelector("#staticBackdrop")
				);
				modal.show();
			} else {
				console.log("err");
			}
		}
	});
}

const openSearch = document.querySelector(".search--btn");

openSearch.addEventListener("click", () => {
	const form = document.querySelector(".navbar__form");
	form.classList.add("active");
	openSearch.classList.add("active");
});

const closeSearch = document.querySelector(".search--close ");

closeSearch.addEventListener("click", () => {
	const form = document.querySelector(".navbar__form");
	form.classList.remove("active");
	openSearch.classList.remove("active");
});

//open more projects

const showMoreProjects = document.querySelector(".projects__fade--button");

showMoreProjects.addEventListener("click", () => {
	const arrowUp = "\uF148";
	const arrowDown = "\uF128";
	const fade = document.querySelector(".projects__fade");
	const gridLower = document.querySelector(".grid__lower");

	if (gridLower.style.display !== "block") {
		gridLower.style.display = "block";
		fade.classList.add("unActive");
		showMoreProjects.innerHTML = `Zwiń ${arrowUp}`;
		//reload masonry layout
		const grid = document.querySelector(".grid");
		const masonry = new Masonry(grid, {
			itemSelector: ".grid-item",
			gutter: 43,
			originTop: true,
			fitWidth: true,
		});
	} else {
		gridLower.style.display = "none";
		fade.classList.remove("unActive");
		showMoreProjects.innerHTML = `Rozwiń ${arrowDown}`;
		//reload masonry layout
		const grid = document.querySelector(".grid");
		const masonry = new Masonry(grid, {
			itemSelector: ".grid-item",
			gutter: 43,
			originTop: true,
			fitWidth: true,
		});
		grid.scrollIntoView(true);
		window.scrollY();
	}
});
