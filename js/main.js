
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
	
});
$('.started__btn').mouseover(function(){
	$('.started__img').css('transform', 'scale(2.5)');
});
$('.started__btn').mouseleave(function(){
	$('.started__img').css('transform', 'scale(1)');
})
$(window).ready(function () {
	if ($(window).width() > 651) {
		$(window).scroll(function(){
		
	if($(this).scrollTop()> $('.design').offset().top - 400) {
		$('.design__items').children('._slide-left , ._slide-right , ._slide-up').addClass('anim');
			};
	if($(this).scrollTop()> $('.collaborate').offset().top - 400) {
		$('.collaborate__row-bottom').children('._slide-left , ._slide-right').addClass('anim');		
	};
	if($(this).scrollTop()> $('.systems').offset().top - 400) {
		$('.systems__item-inner').find('._slide-up').addClass('anim');	
		$('.systems__row-bottom').children('._slide-left').addClass('anim');
	};
	if($(this).scrollTop()> $('.systems__reviews').offset().top - 600){
		$('.systems__reviews').addClass('anim');	
		
	}
	if($(this).scrollTop()> $('.extension__card').offset().top - 600) {
		$('.extension__card').addClass('anim');	

	};

		})
	}
});

$(document).ready(function(){
	$('.header').addClass('anim');
	$('.header__title-accent').addClass('anim');
})
let menu = $('.menu__list');
	let menuBtn = $('.menu__btn');
	let menuLink = $('.menu__list-link');
	let dropmenu = $('.dropdown');

	$(menuBtn).on('click', function () {
		$(menu).toggleClass('open');
		$(this).toggleClass('open');
	});
	$(menuLink).on('click', function(){
		$(menu).removeClass('open');
		$(menuBtn).toggleClass('open');

	});
	$(dropmenu).click(function(){
		$(this).toggleClass('open');
	})

	$(document).mouseup(function (e) {
		if (!menuBtn.is(e.target) && menuBtn.has(e.target).length === 0 &&
			!menu.is(e.target) && menu.has(e.target).length === 0 &&
			!dropmenu.is(e.target) && dropmenu.has(e.target).length === 0 

		) {
			menu.removeClass('open');
			$(menuBtn).removeClass('open');
			dropmenu.removeClass('open')
		}
	});
	$(window).scroll(function () {
		let scrollTop = $(window).scrollTop();
		if (scrollTop > 50) {
            $(menuBtn).removeClass('open');
            $(menu).removeClass('open');
			dropmenu.removeClass('open');
        }
    });

	$(window).ready(function () {
		if ($(window).width() < 401) {
			$(".closed").toggleClass("show").children(".footer__list-title");

	$(".footer__list-title").click(function(){
	if ($(this).parent().hasClass("show")) {
		$(".footer__list-item").addClass("show").children(".footer__dropdown-list").hide("medium");
		$(this).parent().toggleClass("show").children(".footer__dropdown-list").slideToggle("medium");
		$(".footer__list-item").addClass("show").children(".footer__list-title").css("color",'rgba(0, 0, 0, 0.85)');
		$(this).parent().toggleClass("show").children(".footer__list-title").css("color", '#FF7843');
		}
	
	else {
		$(this).parent().toggleClass("show").children(".footer__dropdown-list").slideToggle("medium");
		$(this).parent().toggleClass("show").children(".footer__list-title").css("color",'rgba(0, 0, 0, 0.85)');
		}
	});

		}
	});

});
