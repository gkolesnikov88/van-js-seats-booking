const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seats:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelector = document.getElementById('movie');

let ticketPrice = +movieSelector.value;

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie selet event
movieSelector.addEventListener('click', e => {
    ticketPrice = +e.target.value;
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
