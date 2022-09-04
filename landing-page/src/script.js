function toggleVideo() {
    const trailer = document.querySelectorAll('.trailer');
    const video = document.querySelector('.video');
    trailer.classList.toggle('active');

    video.currentTime = 0;
    video.pause();
}