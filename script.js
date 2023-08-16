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
		let modalImage = document.querySelector(".modalImage");
		let src = e.target.getAttribute("src");
		modalImage.src = src;

		const modal = new bootstrap.Modal(
			document.querySelector("#staticBackdrop")
		);
		modal.show();
	});
}
