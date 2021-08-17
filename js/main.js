"use strict"
window.onload = function () {
	const parallax = document.querySelector('.collaborate__reviews')

	// const parallax2 = document.querySelector('.started')

	if (parallax || parallax2) {
const content = document.querySelector('.collaborate__reviews-img');

// const content2 = document.querySelector('.started__img')


// coificients кол во пикселей
const forContent = 40;

const speed = 1.3;

// объявление переменных
let positionX = 0, positionY = 0;
let coordXprocent = 0, coordYprocent = 0;
// функция ответственная за анимацию при движении мыши
function setMouseParallaxStyle() {
	// разница в положении 
	const distX = coordXprocent - positionX;
	const distY = coordYprocent - positionY;

	positionX = positionX + (distX * speed);
	positionY = positionY + (distY * speed);

	// передаем стили
	content.style.cssText = `transform: translate(${positionX / forContent}%,${positionY / forContent}%);`;

	// content2.style.cssText = `transform: translate(${positionX / forContent}%,${positionY / forContent}%);`;
	requestAnimationFrame(setMouseParallaxStyle);

}
setMouseParallaxStyle();
parallax.addEventListener('mousemove', function(e) {
	// получение ширины и высоты блока
	const parallaxWidth = parallax.offsetWidth;
	const parallaxHeight = parallax.offsetHeight;

	// ноль на середине
	const coordX = e.pageX - parallaxWidth / 2;
	const coordY = e.pageY - parallaxHeight / 2;

	// получаем проценты
	coordXprocent = coordX / parallaxWidth * 100;
	coordYprocent = coordY / parallaxHeight * 100;
});
// parallax2.addEventListener('mousemove', function(e) {
// 	// получение ширины и высоты блока
// 	const parallaxWidth = parallax.offsetWidth;
// 	const parallaxHeight = parallax.offsetHeight;

// 	// ноль на середине
// 	const coordX = e.pageX - parallaxWidth / 2;
// 	const coordY = e.pageY - parallaxHeight / 2;

// 	// получаем проценты
// 	coordXprocent = coordX / parallaxWidth * 100;
// 	coordYprocent = coordY / parallaxHeight * 100;
// });
// scroll

// let thresholdSets = [];
// for (let i = 0; i <= 1.0; i += 0.005) {
// 	thresholdSets.push(i);
// }
// const callback = function (entries, observer) {
// 	const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
// 	setMouseParallaxItemsStyle(scrollTopProcent);

// };
// const observer = new IntersectionObserver(callback, {
// 	threshold: thresholdSets
// });
// observer.observe(document.querySelector('.collaborate__items'));

// function setMouseParallaxItemsStyle(scrollTopProcent) {
// 	content.parentElement.style.cssText = `transform: translateX(${scrollTopProcent/ 6}%);`;

// }

	}
}


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
$(window).ready(function () {
	if ($(window).width() > 651) {
		$(window).scroll(function(){
			// if($(this).scrollTop()> $('.design__reviews').offset().top - 800) {
		// $('.design__reviews').addClass('anim');	
	// };
	if($(this).scrollTop()> $('.design').offset().top - 400) {
		// $('.design__items').children('.slide-left , .slide-right , .slide-up').addClass('anim');
		// $('.slide-left , .slide-right , .slide-up').addClass('anim');	
	};
	// if($(this).scrollTop()> $('.collaborate .row__bottom-item').offset().top - 400) {
	// 	$('.row__bottom-item').addClass('anim');	
	// };
	// if($(this).scrollTop()> $('.systems__reviews').offset().top - 300) {
	// 	$('.systems__reviews').addClass('anim');
	// };
	// if($(this).scrollTop()> $('.collaborate').offset().top - 100) {
	// 	$('.collaborate__reviews').addClass('anim');
	// };

		})


	}
});

$(document).ready(function(){
	$('.header').addClass('anim');
	$('.header__title-accent').addClass('anim');
})
// ??
$(window).scroll(function(){

	
	// if($(this).scrollTop()> $('.collaborate__card').offset().top - 400) {
	// 	$('.collaborate__card').children().addClass('anim');
	// };
	
	// if($(this).scrollTop()> $('.systems').offset().top - 400) {
	// 	$('.systems__card').addClass('anim');
	// };

});

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
		// $('.design__reviews-wrapper').css('transform', 'translateX(10%)')

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
	// $(window).scroll(function() {
	// 	if($(this).scrollTop()> $('.design__reviews').offset().top - 300){  
	// 		$('.design__reviews').addClass("anim");
	// 	  }
	// 	  else{
	// 		$('.design__reviews').removeClass("anim");
	// 	  }
	// 	});
});
(function (window, document) {

	/**
	 * Variables
	 */
	var items = document.querySelectorAll('.item'),
		windowHeight = window.document.documentElement.clientHeight;

	/**
	 * A simple forEach() implementation for Arrays, Objects and NodeLists.
	 */
	var forEach = function ( collection, callback, scope ) {
		if ( Object.prototype.toString.call( collection ) === '[object Object]' ) {
			for ( var prop in collection ) {
				if ( Object.prototype.hasOwnProperty.call( collection, prop ) ) {
					callback.call( scope, collection[prop], prop, collection );
				}
			}
		} else {
			for ( var i = 0, len = collection.length; i < len; i++ ) {
				callback.call( scope, collection[i], i, collection );
			}
		}
	};

	/**
	 * Get the height of the `document` element
	 */
	var _getDocumentHeight = function () {
		return Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		);
	};

	/**
	 * Get the document's vertical scroll position
	 */
	var _scrollTop = function () {
		return Math.max(
			document.body.scrollTop,
			document.documentElement.scrollTop
		);
	};

	/**
	 * A Loop for items
	 */
	var _items = function () {

		forEach(items, function (item) {

			var scrollTop = _scrollTop(),
				elementTop = item.offsetTop,
				documentHeight = _getDocumentHeight(),

				// Transform the item based on scroll
				rotationFactor =  Math.max(0, scrollTop - elementTop),
				rotation = ( rotationFactor / (documentHeight - windowHeight) * 360),
				transform = 'translateX(' + rotation + '%)';
        // rotationFactor =  Math.max(0, scrollTop - elementTop),
		// 		rotation = ( rotationFactor / (documentHeight - windowHeight) * 360),
		// 		transform = 'rotate(' + rotation + 'deg)';

			// Elements off the top edge.
			if(scrollTop > elementTop) {
				item.classList.add('scrolling');
				item.style.webkitTransform = transform;
			} else {
				item.classList.remove('scrolling');
				item.style.webkitTransform = null; // Reset the transform
			}

		});

	};

	/**
	 * Event handlers
	 */
	document.addEventListener('scroll', _items, false);

}(this, this.document));


// (function (window, document) {

// 	/**
// 	 * Variables
// 	 */
// 	var items = document.querySelectorAll('.design'),
// 		windowHeight = window.document.documentElement.clientHeight;

// 	/**
// 	 * A simple forEach() implementation for Arrays, Objects and NodeLists.
// 	 */
// 	var forEach = function ( collection, callback, scope ) {
// 		if ( Object.prototype.toString.call( collection ) === '[object Object]' ) {
// 			for ( var prop in collection ) {
// 				if ( Object.prototype.hasOwnProperty.call( collection, prop ) ) {
// 					callback.call( scope, collection[prop], prop, collection );
// 				}
// 			}
// 		} else {
// 			for ( var i = 0, len = collection.length; i < len; i++ ) {
// 				callback.call( scope, collection[i], i, collection );
// 			}
// 		}
// 	};

// 	/**
// 	 * Get the height of the `document` element
// 	 */
// 	var _getDocumentHeight = function () {
// 		return Math.max(
// 			document.body.scrollHeight,
// 			document.documentElement.scrollHeight,
// 			document.body.offsetHeight,
// 			document.documentElement.offsetHeight,
// 			document.body.clientHeight,
// 			document.documentElement.clientHeight
// 		);
// 	};

// 	/**
// 	 * Get the document's vertical scroll position
// 	 */
// 	var _scrollTop = function () {
// 		return Math.max(
// 			document.body.scrollTop,
// 			document.documentElement.scrollTop
// 		);
// 	};

// 	/**
// 	 * A Loop for items
// 	 */
// 	var _items = function () {
// let item1 = document.querySelectorAll('.design__reviews');
// // $('.design__reviews').attr('style', 'transform:translateX(90%)')



// 		forEach(item1, function (item) {

// 			var scrollTop = _scrollTop(),
// 				elementTop = item.offsetTop -500,
			
// 				// elementTop = item.offsetTop,

// 				rotationFactor =  Math.max(0, scrollTop - elementTop),
// 				documentHeight = _getDocumentHeight(),

// 				// transform = 'translateX(0)';
//         // rotationFactor =  Math.max(0, scrollTop - elementTop),
// 				rotation =(rotationFactor / (documentHeight - windowHeight)* 400) - 90,
// 				// test = rotation - 90,
// 				transform = 'translateX(' + rotation + '%)' ;
// 				// transform = 'translateX(calc(-90% +' + rotation + '%))' ;
				

// // console.log(scrollTop);
// // console.log(elementTop);
// console.log(transform);


// 			// Elements off the top edge.
// 			if(scrollTop > elementTop){
				
// 					item.classList.add('scrolling');
// 				item.style.webkitTransform = transform;
				
				
// 			} else {
// 				item.classList.remove('scrolling');
// 				item.style.webkitTransform = null; // Reset the transform
// 			}

// 		});

// 	};

// 	/**
// 	 * Event handlers
// 	 */
// 	document.addEventListener('scroll', _items, false);

// }(this, this.document));

// const background = document.querySelector('.background');

// document.addEventListener('scroll', () => {
//     const scrollY = window.scrollY;
    
//     if(scrollY !== 0) {
//         background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`;
//     } else {
//         background.style.backgroundPosition = '';
//     }
// });
