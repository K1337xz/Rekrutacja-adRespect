window.onload = () => {
	const grid = document.querySelector(".grid");

	const masonary = new Masonry(grid, {
		itemSelector: ".grid-item",
		gutter: 10,
	});
};
