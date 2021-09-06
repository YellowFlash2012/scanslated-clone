const staffInfoToggle = document.querySelectorAll('.info-btn');

const staffInfo = document.querySelectorAll('.staff-info');

staffInfoToggle.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.nextElementSibling.classList.toggle('active');
    })
})