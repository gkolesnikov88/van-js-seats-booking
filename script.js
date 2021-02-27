const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelector = document.getElementById('movie');

let ticketPrice = +movieSelector.value;

// Set selected movie and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))
    localStorage.setItem('selectedSeats', seatsIndex);
    
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie selet event
movieSelector.addEventListener('click', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

// Seat click event
container.addEventListener('click', e => {
    if(e.target.classList.contains('seat')
    && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');        

        updateSelectedCount();
    }
});
