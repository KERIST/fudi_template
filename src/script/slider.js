(function () {
    document.addEventListener('DOMContentLoaded', function () {
        window.a = new Slider([{
            txt: "“I am so happy because I found this recipe, and it just made my life easier. Thanks  so much for sharing!”",
            author: "- Michael Dawson, San Francisco, CA -",
            img: "images/slider-images.jpg"
        }, {
            txt: "“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur cum cupiditate deserunt dolorem.”",
            author: "- Dawson Michael , San Francisco, CA -",
            img: "images/slider-img1.jpg"
        }, {
            txt: "“ Ad consequuntur cum cupiditate deserunt dolorem ducimus expedita illo maxime mollitia nostrum perferendis.”",
            author: "- Mike Hyper, San Francisco, CA -",
            img: "images/slider-img2.jpg"
        }]);
    });


    function Slider(data) {
        this.data = data;
        this.currentSlide = 0;
        this.slideAmount = this.data.length;
        this.txtContainer = document.querySelector('.slider__txt');
        this.authorContaier = document.querySelector('.slider__author');
        this.imgContainer = document.querySelector('.slider__img');
        this.dotContainer = document.querySelector('.slider__controls');
        this.init();
    }

    Slider.prototype.init = function () {
        var __me = this,
            intervalId;

        this.startAutoChange();
        this.dotContainer.addEventListener('click', function (e) {
            if (e.target.classList.contains('slider__dot')) {
                var id = e.target.dataset.id;
                __me.currentSlide = id;
                __me.changeSlide(id);
                __me.stopAutoChange();
                __me.startAutoChange();
            }
        });
    };

    Slider.prototype.startAutoChange = function () {
        var __me = this;

        this.__changeId = setInterval(function () {
            __me.nextSlide();
        }, 5000);
    };

    Slider.prototype.stopAutoChange = function () {
        clearInterval(this.__changeId);
    };

    Slider.prototype.nextSlide = function () {
        this.currentSlide = (this.currentSlide + 1) % this.slideAmount;
        this.changeSlide(this.currentSlide);
    };

    Slider.prototype.changeSlide = function (index) {
        var inf = this.data[index];
        this.txtContainer.classList.add('slider_hide');
        this.authorContaier.classList.add('slider_hide');
        this.imgContainer.classList.add('slider_hide');
        this.dotContainer.querySelector('.slider__dot_selected').classList.remove('slider__dot_selected');
        this.dotContainer.querySelectorAll('.slider__dot')[index].classList.add('slider__dot_selected');
        setTimeout(function (txt, author, img) {
            txt.textContent = inf.txt;
            author.textContent = inf.author;
            img.setAttribute('src', inf.img);
            txt.classList.remove('slider_hide');
            author.classList.remove('slider_hide');
            img.classList.remove('slider_hide');
        }, 300, this.txtContainer, this.authorContaier, this.imgContainer);
    };

})();