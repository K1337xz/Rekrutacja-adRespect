window.onload = () => {
	const grid = document.querySelector(".grid");

	const masonry = new Masonry(grid, {
		itemSelector: ".grid-item",
		gutter: 43,
		originTop: true,
		fitWidth: true,
	});
};
