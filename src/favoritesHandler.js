function toggleFavoriteIcon(isFavorite, el) {
  el.classList.toggle("fa", isFavorite); //добавление класса когда выбран в избранное
  el.classList.toggle("far", !isFavorite); //добавление класса когда удален из избранного
}

function showFavoriteCard(quote, author, container) {
  //создаем новую карточку
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = ` <p>${quote}</p> <p class="author">${author}</p> `;
  container.appendChild(favoriteCard); //добавляет дочерний элемент в конец родительского элемента.  (prepend - в начало)
}

function hideFavoriteCard(quote) {
  //удаление карточки с избранных
  const favoriteCards = document.querySelectorAll(".favorite-card");
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

export { toggleFavoriteIcon, showFavoriteCard, hideFavoriteCard };
