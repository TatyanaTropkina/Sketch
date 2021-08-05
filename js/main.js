
$(function(){
	$(document).ready(function () {
		let $preloader = $('.preloader'),
		$loader = $preloader.find('.preloader__loader');
		$loader.fadeOut();
		$preloader.delay(250).fadeOut(200);
});

$('.extension-slider').slick({
	slidesToShow: 7,
	slidesToScroll: 6,
	swipeToSlide: 5,
	centerMode: true,
	centerPadding: '30px',
	arrows: false,
	loop: true,
	infinite: true,
	autoplay:true,
	autoplaySpeed: 1900,
	
		responsive: [
			{
				breakpoint: 860,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 651,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 351,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	
})

$('.screens__bottom').mouseover(function(){
	$(this).siblings('.screens__top').css('transform', 'translateX(-50%)')
});
$('.screens__bottom').mouseleave(function(){
	$(this).siblings('.screens__top').css('transform', 'translateX(0)')
})
$(document).ready(function(){
	$('.header').addClass('anim');
$('.header__title-accent').addClass('anim');
})
$(window).scroll(function(){
	if($(this).scrollTop()> $('.test').offset().top - 500) {
		$('.test').addClass('anim');
		$('.col__left').addClass('anim');

		
	}
});
$(window).scroll(function(){
	if($(this).scrollTop()> $('.design__reviews').offset().top - 1000) {
	
		$('.design__reviews').addClass('anim');

		
	}
});
$('.card-right').children().addClass('slide-right');
$('.card-left').children().addClass('slide-left');

$(window).scroll(function(){
	// if($(this).scrollTop()> $('.slide-left').offset().top - 300) {
		// $('.slide-left')
		// $('.slide-left').addClass('anim');
		// $('.slide-right').addClass('anim');
		// $('.slide-left')

	// };
	if($(this).scrollTop()> $('.systems__reviews').offset().top - 300) {
		$('.systems__reviews').addClass('anim');
	};
	if($(this).scrollTop()> $('.systems').offset().top - 400) {
		$('.systems__card').addClass('anim');
	};
	if($(this).scrollTop()> $('.collaborate').offset().top - 100) {
		$('.collaborate__reviews').addClass('anim');
	};
	// if($(this).scrollTop()> $('.collaborate').offset().top - 400) {
	// 	$('.collaborate .row__top-img').addClass('anim');
	// };
	if($(this).scrollTop()> $('.collaborate__card').offset().top - 400) {
		$('.collaborate__card').children().addClass('anim');
	};


});
$(window).ready(function () {
	if ($(window).width() > 769) {
		if($(this).scrollTop()> $('.collaborate').offset().top - 400) {
		$('.collaborate .row__top-img').addClass('anim');
	};
	} 
	else {
	//   код для окна меньше 1280 пикселей
	}
  });
let menu = $('.menu__list');
	let menuBtn = $('.menu__btn');
	let menuLink = $('.menu__list-link');
	// let header = $('.header');

	$(menuBtn).on('click', function () {
		$(menu).toggleClass('open');
		$(this).toggleClass('open');
	});
	$(menuLink).on('click', function(){
		$(menu).removeClass('open');
		$(menuBtn).toggleClass('open');

	})
	$(document).mouseup(function (e) {
		if (!menuBtn.is(e.target) && menuBtn.has(e.target).length === 0 &&
			!menu.is(e.target) && menu.has(e.target).length === 0
		) {
			menu.removeClass('open');
			$(menuBtn).removeClass('open');
		}
	});
	$(window).scroll(function () {
		let scrollTop = $(window).scrollTop();
		if (scrollTop > 50) {
            $(menuBtn).removeClass('open');
            $(menu).removeClass('open');
        }
    });
});

$(function () {
	$(document).ready(function () {
		new WOW().init();
	});
});
