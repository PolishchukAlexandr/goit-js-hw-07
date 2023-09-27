import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
		<a class="gallery__link" href="${original}">
			<img
				class="gallery__image"
				src="${preview}"
				data-source="${original}"
				alt="${description}"
			/>
		</a>
	</li>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }

  const source = event.target.getAttribute("data-source");
  console.log(source);
  const instance = basicLightbox.create(
    `<img src="${source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        document.addEventListener("keyup", onEscKeyPress);
      },
      onClose: (instance) => {
        document.removeEventListener("keyup", onEscKeyPress);
      },
    }
  );

  instance.show();

  function onEscKeyPress(event) {
    console.log(event.code);
    if (event.key === "Escape") {
      instance.close();
    }
  }
}


// import { galleryItems } from "./gallery-items.js";

// console.log(galleryItems);

// const galleryEl = document.querySelector(".gallery");

// const renderListGallery = (makeImageItems) =>
//   makeImageItems.reduce(
//     (acc, { preview, original, description }) =>
//       acc +
//       `<li class="gallery__item"><a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"/>
//   </a>
// </li>`,
//     ""
//   );

// galleryEl.insertAdjacentHTML("afterbegin", renderListGallery(galleryItems));

// /*событие*/

// galleryEl.addEventListener("click", onAllGalleryClick);

// function onAllGalleryClick(e) {
//   const imageLink = e.target.dataset.source;

//   e.preventDefault();

//   if (!e.target.classList.contains("gallery__image")) {
//     return;
//   }
//   const makeImage = `<img
//       src="${imageLink}"
//       width="800"
//       height="600"
//       >`;

//   const instance = basicLightbox.create(makeImage, {
//     onShow: () => {
//       window.addEventListener("keydown", onEscKeyClick);
//     },
//     onClose: () => {
//       window.removeEventListener("keydown", onEscKeyClick);
//     },
//   });
//   instance.show();

//   function onEscKeyClick(e) {
//     const ESC_KEY_CODE = "Escape";
//     const isEscKey = e.code === ESC_KEY_CODE;
//     if (isEscKey) {
//       instance.close();
//     }
//   }
// }



