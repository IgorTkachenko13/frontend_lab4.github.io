document.addEventListener('DOMContentLoaded', () => {
    const generalInfo = document.getElementById('general-info');
    generalInfo.addEventListener('click', function() {
        this.style.backgroundColor = getRandomColor();
        this.style.color = getRandomColor();
    });

    const firstInfo = document.querySelector('.info');
    firstInfo.addEventListener('click', function(e) {
        e.stopPropagation();
        this.style.backgroundColor = getRandomColor();
        this.style.color = getRandomColor();
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addImage() {
    const imgContainer = document.getElementById('city-link');
    if (!document.getElementById('city-image')) {
        const img = document.createElement('img');
        img.id = 'city-image';
        img.src = 'https://aws-travel-guide.s3.eu-west-1.amazonaws.com/default_image_size/6042a289a49a2_%D0%9A%D0%B8%D1%97%D0%B2.jpeg';
        img.alt = 'Kyiv';
        imgContainer.appendChild(img);
    }
}

function increaseImage() {
    const img = document.getElementById('city-image');
    if (img) {
        img.style.width = (img.clientWidth + 10) + 'px';
    }
}

function decreaseImage() {
    const img = document.getElementById('city-image');
    if (img && img.clientWidth > 10) {
        img.style.width = (img.clientWidth - 10) + 'px';
    }
}

function removeImage() {
    const img = document.getElementById('city-image');
    if (img) {
        img.remove();
    }
}
