
const anchors = document.querySelectorAll('.nav');

anchors.forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        anchors.forEach(a => {
            a.classList.remove('active');
        });
        this.classList.add('active');
    });
});
