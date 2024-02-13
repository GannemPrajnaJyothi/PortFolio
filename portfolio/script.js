document.querySelector('.home-btn').addEventListener('click', function () {
    this.classList.add('active');
    document.querySelector('.home-content').classList.add('active');
});
document.querySelector('.about-btn').addEventListener('click', function () {
    this.classList.add('active');
    document.querySelector('.about-content').classList.add('active');
});
document.querySelector('.skills-btn').addEventListener('click', function () {
    this.classList.add('active');
    document.querySelector('.skills-content').classList.add('active');
});
document.querySelector('.project-btn').addEventListener('click', function () {
    this.classList.add('active');
    document.querySelector('.project-content').classList.add('active');
});
document.querySelector('.contact-btn').addEventListener('click', function () {
    this.classList.add('active');
    document.querySelector('.contact-content').classList.add('active');
});