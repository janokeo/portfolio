document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelector('#logo').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

document.querySelector('nav ul').addEventListener('click', function(e) {
    if (e.target.nodeName === 'A') {
        document.querySelector('nav ul').classList.remove('active');
    }
});
