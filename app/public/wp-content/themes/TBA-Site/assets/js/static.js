gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer)
ScrollTrigger.config({
	autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize',
	syncInterval: 1
})

const AnimationGsap = () => {

	const menuToggle = () => {
		const hambuger = document.querySelector('.hambuger');
		const closeHambuger = document.querySelector('.close-menu-button');
		const menu = document.querySelector('.nav');
		if (menu) {
			const links = menu.querySelectorAll('.nav__li');
			var tl = gsap.timeline({ paused: true });
			tl.to(menu, {
				duration: 0.6,
				zIndex: 99,
				opacity: 1,
				width: '100vw',
				ease: 'expo.inOut',
			})
			tl.from(links, {
				opacity: 0,
				y: 20,
			}).to(links, {
				duration: 0.4,
				opacity: 1,
				y: 0,
				stagger: 0.1,
				ease: 'expo.inOut',
			});
			tl.reverse();

			hambuger.addEventListener('click', () => {
				tl.reversed(!tl.reversed());
			});
			closeHambuger.addEventListener('click', () => {
				tl.reversed(!tl.reversed());
			});

			jQuery('.header .nav__ul a[href="#"]').click(function (e) {
				e.preventDefault();
				tl.reversed(!tl.reversed());

				let link = jQuery(this).closest('li').attr('link')
				jQuery('.header .nav__ul li').removeClass('active');
				jQuery('.header .nav__ul li[link="' + link + '"]').addClass('active');

				jQuery('html,body').animate({
					scrollTop: jQuery("#" + link).offset().top,
				}, 'slow');
			})
		}

	}
	const homeSection1Heading = () => {

		let wrapper = jQuery(".home1");
		let eleContent = jQuery(".home1 .home3__content");
		let eleTitle = jQuery(".home1 .home2__title");
		let eleLink = jQuery(".home1 .home3__link a");
		ScrollTrigger.create({
			trigger: wrapper,
			start: "top top",
			end: "bottom bottom",
		});

		gsap.fromTo(eleContent, {
			y: -10,
			opacity: 0,
		}, {
			y: 0,
			opacity: 1,
			duration: 1,
		});

		// gsap.from(eleTitle, {
		// 	y: -10,
		// 	duration: 1,
		// 	opacity: 0,
		// });
		// gsap.from(eleLink, {
		// 	y: -10,
		// 	duration: 1,
		// 	opacity: 0,
		// });

	}
	const homeSection2Heading = () => {
		//Creative Event Agency
		//Pioneering the best customer experience through innovative ideas and making them a reality

		let triggerElement = jQuery(".header_text-move");
		let targetElement = jQuery(".header_text-move");

		// ScrollTrigger.create({}); //chi chay lan dau

		let tl = gsap.timeline({
			scrollTrigger: {
				id: 'home2',
				// markers: true,
				trigger: triggerElement,
				start: "top 80%",
				end: "bottom 100%",
				invalidateOnRefresh: true,
				onToggle: scrollTrigger => {
					scrollTrigger.refresh()
				},
			},
			defaults: {
				ease: "power1.inOut",
			}

		});

		tl.fromTo(targetElement, {
			yPercent: 100,
			opacity: 0
		}, {
			yPercent: 0,
			opacity: 1
		})


		function ONENTER() {
			// console.log('onEnter');
			tl.fromTo(targetElement, {
				yPercent: 100,
				opacity: 0
			}, {
				yPercent: 0,
				opacity: 1
			})
		}
		function ONENTERBACK() {
			// console.log('onEnterBack');//hien ra
			tl.from(targetElement, {
				yPercent: 0,
				opacity: 1
			})
		}
		function ONLEAVE() {
			// console.log('ONLEAVE');//hien ra
			tl.from(targetElement, {
				yPercent: 0,
				opacity: 1
			})
		}
		function ONLEAVEBACK() {
			// console.log('ONLEAVEBACK');//hien ra
			tl.from(targetElement, {
				yPercent: 0,
				opacity: 1
			})
		}

	};
	const achiveSectionSlider = () => {
		let home4 = jQuery(".home-achive");
		let home4SliderText = jQuery(".home-achive .slider-text-wrapper");

		// heading left 
		let tl2 = gsap.timeline({
			scrollTrigger: {
				id: 'home4',
				trigger: home4,
				start: "top 70%",
				end: "top 80%",
				scrub: true,
				// markers: true,
				invalidateOnRefresh: true,
				toggleActions: "restart none reverse reverse",
				endTrigger: home4,
				onToggle: scrollTrigger => {
					scrollTrigger.refresh()
				},
			}, defaults: {
				ease: 'power4.in',
				duration: 1,
			}
		});
		tl2.fromTo(home4SliderText, {
			xPercent: 8,
		}, { xPercent: 0 });
	}
	const ourWorks = () => {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

		/*Heading scroll to scale */
		const scrollToScaleHeadingOurWorks = () => {
			const x = jQuery('.landing-wrap .logo').offsetHeight
			const logo = document.querySelector(".landing-wrap .logo");
			const inner = document.querySelector(".landing-wrap");
			const section = document.querySelector(".landing");

			ScrollTrigger.matchMedia({

				/*desktop*/
				"(min-width: 991px)": function () {
					const scale = 50;
					gsap.to(logo, { scaleX: 1, scaleY: 1, duration: 0.01 });
					gsap.to(logo, {
						scrollTrigger: {
							trigger: section,
							scrub: true,
							start: "top top",
							end: "+=100%",
							id: "zoom",
							scrub: 1,
							pin: section,
							// markers: true,
						},
						scaleX: scale,
						scaleY: scale,
						transformOrigin: "44% 53%",
						// transformOrigin: "56.7% 49%",
						// transformOrigin: "56.7% 54%",
						ease: "none"
					});
				},

				/*mobile*/
				"(max-width: 991px)": function () {
					let tl = gsap.timeline({
						scrollTrigger: {
							trigger: section,
							scrub: true,
							start: "top 50%",
							end: "bottom 80%",
							id: "zoom-mb",
							scrub: 1,
							// markers: true,
						}
					});
					tl.fromTo(logo,
						{
							yPercent: -10,
							opacity: 0
						},
						{
							yPercent: 0,
							opacity: 1,
							ease: 'ease',
							duration: 1,
						}
					)
				},
			});
		}
		scrollToScaleHeadingOurWorks()

	}
	const testSliderHoziScroll = () => {
		gsap.registerPlugin(ScrollTrigger);
		const sectionsWrap = document.querySelector('.slider-hozi-scroll');
		if (sectionsWrap) {
			const process = document.querySelector('.slider-hozi-scroll .process');
			let sections = gsap.utils.toArray('.slider-hozi-scroll .process__item');

			ScrollTrigger.matchMedia({

				// desktop
				"(min-width: 991px)": function () {

					// opacity when to start 
					gsap.timeline({
						scrollTrigger: {
							id: 'slide-start',
							trigger: sectionsWrap,
							scrub: 1,
							invalidateOnRefresh: true,
							start: "top top",
							end: "bottom +=100%",
						},
					}).fromTo(sectionsWrap, {
						opacity: 0,
						duration: 1
					}, {
						opacity: 1,
						duration: 1
					})


					const spacing = document.querySelector(".slider-hozi-scroll .process")?.offsetWidth;
					console.log({ spacing });

					if ((typeof (process) != 'undefined' && process != null)) {
						let sections = gsap.utils.toArray('.slider-hozi-scroll .process__item');
						gsap.to(sections, {
							xPercent: -60 * (sections.length - 1),
							transformOrigin: "center center",
							ease: "none",
							scrollTrigger: {
								toggleClass: { targets: '.slider-hozi-scroll', className: "active" },
								id: 'scroll',
								trigger: process,
								// markers: true,
								scrub: 1,
								pin: true,
								snap: 1 / (sections.length - 1),
								end: () => "+=" + spacing
							},
						});
					}
				},

				//mobile
				"(max-width: 991px)": function () {
					let mbstatic_menu = document.querySelector('.slider-hozi-scroll.mb-static .nav-works')
					let mbstatic_process__item = gsap.utils.toArray(".slider-hozi-scroll.mb-static .process__item")

					let tl = gsap.timeline({
						scrollTrigger: {
							trigger: '.slider-hozi-scroll.mb-static',
							start: "top 50%",
							end: "bottom 80%",
							id: "zoom-mb",
						}
					});
					tl.fromTo(mbstatic_menu, {
						yPercent: -10,
					}, {
						yPercent: 0,
						ease: 'ease',
						duration: 1,
					}
					)
					tl.fromTo(mbstatic_process__item, {
						yPercent: -10,
						opacity: 0,
					}, {
						yPercent: 0,
						ease: 'ease',
						duration: 0.1,
						stagger: 0.5,
						opacity: 1,
					}
					);
				}
			});
		}

	}
	const ourClients = () => {

		const ourClientsHeading = () => {
			// text "OUR WORKS"
			let home5 = document.querySelector(".home5");
			let links = gsap.utils.toArray(".home5__side");

			links.forEach((a, i) => {
				let stl = gsap.timeline({
					scrollTrigger: {
						trigger: home5,
						// markers: true,
						scrub: 0.5,
						id: 'home5',
						start: "top 60%",
						end: "top 40%",
					}
				});

				const spacing = 250;
				if (i == 0) {
					stl.fromTo('.' + a.classList[1], {
						xPercent: -spacing,
						ease: 'none',
					}, {
						xPercent: 0,
						ease: 'none',
					})
				} else {
					stl.fromTo('.' + a.classList[1], {
						xPercent: spacing,
						ease: 'none',
					}, {
						xPercent: 0,
						ease: 'none',
					})
				}
			});
		}
		ourClientsHeading()

		const ourClientsListItem = () => {

			const listHome5 = gsap.utils.toArray('.home5__item')
			listHome5.forEach(function (item, i) {
				const child = item.querySelector('.home5__img')

				let temp = gsap.timeline({
					scrollTrigger: {
						id: 'home5-list',
						trigger: child,
						// markers: true,
						start: "top 60%",
						end: "bottom 15%",
						// toggleActions: "restart none reverse none",
					},
				});
				temp.fromTo(child, {
					left: "-100%",
				}, {
					left: "0",
					duration: 0.35,
					ease: "none"
				});

			})

		}
		ourClientsListItem()

	}

	const testCats = () => {
		//test-cats
		gsap.registerPlugin(ScrollTrigger);


		//Horizontal Scroll Galleries
		if (document.getElementById("portfolio")) {
			const horizontalSections = gsap.utils.toArray('.horiz-gallery-wrapper')

			horizontalSections.forEach(function (sec, i) {

				const pinWrap = sec.querySelector(".horiz-gallery-strip");

				let pinWrapWidth;
				let horizontalScrollLength;

				function refresh() {
					pinWrapWidth = pinWrap.scrollWidth;
					horizontalScrollLength = pinWrapWidth - window.innerWidth;
				}

				// window.addEventListener("load", function () {
				refresh();
				// Pinning and horizontal scrolling
				let scrollTween = gsap.to(pinWrap, {
					scrollTrigger: {
						scrub: true,
						trigger: sec,
						pin: sec,
						start: "center center",
						end: () => `+=${pinWrapWidth}`,
						invalidateOnRefresh: true
					},
					x: () => -horizontalScrollLength,
					ease: "none"
				});

				pinWrap.querySelectorAll("[data-speed-x]").forEach((el, i) => {
					// let speed = parseFloat(el.getAttribute("data-speed-x"));
					let speed = 1;
					gsap.to(el, {
						x: () => (1 - speed) * (window.innerWidth + el.offsetWidth),
						ease: "none",
						scrollTrigger: {
							containerAnimation: scrollTween,
							trigger: el,
							onRefresh: self => {
								let start = Math.max(0, self.start);
								self.setPositions(start, start + (self.end - self.start) / Math.abs(speed)); // adjust for how long it'll stay in view
								self.animation.progress(0);
							},
							scrub: true
						}
					});
				});


				ScrollTrigger.addEventListener("refreshInit", refresh);
				// });
			});
		}
	}
	testCats()

	menuToggle()
	homeSection1Heading()
	homeSection2Heading()
	achiveSectionSlider()
	ourWorks()
	testSliderHoziScroll()
	ourClients()
}



let playVideoOnMobile = function () {
	const screenWidth = jQuery(window).width();
	let timeout;
	const videoEle = document.querySelector('video');
	if (screenWidth < 767) {
		if (videoEle) {
			videoEle.pause()
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				videoEle.play()
			}, 500);
		}
	}
}

let lazyLoadImage = function () {
	function preload_image(img) {
		img.src = img.dataset.src;
	}

	const config_opts = {
		rootMargin: "0px 0px 250px 0px",
	};

	let observer = new IntersectionObserver(function (entries, self) {
		for (entry of entries) {
			if (entry.isIntersecting) {
				let elem = entry.target;
				preload_image(elem);
				self.unobserve(elem);
			}
		}
	}, config_opts);

	let images = document.querySelectorAll('.lazy-load');

	for (image of images) {
		observer.observe(image);
	}
}

function randomVideo() {
	let xvideos = jQuery('.videos').data('videos')
	let temp1 = xvideos?.split(',');
	const myvideos = temp1.filter((x) => x != '')
	const arrVideos = myvideos

	var video = document.querySelector('.video-test');
	var sources = video.getElementsByTagName('source');

	const recallMe = () => {
		const random = Math.floor(Math.random() * arrVideos.length);
		const resultRan = arrVideos[random]
		sources[0].src = "../videos/short/" + resultRan;
		video.load();
		setTimeout(function () {
			video.play()
		}, 150);
	}

	recallMe()

	video.addEventListener("ended", function (e) {
		recallMe()
	});

}

let checkVideoWhenEnd = function () {
	const videos = jQuery('.home2 input[name="videos-list"]')?.val()?.toString();
	if (videos) {
		let n = 0;
		let array_vis = [];
		if (videos) {
			let temp1 = videos?.split(',');
			array_vis = temp1.filter((x) => x != '');
		}

		var video = document.querySelector('.video-item');
		var sources = video?.getElementsByTagName('source');

		let videoLoop = function () {
			if (array_vis.length > 0) {

				if (n === 0) {
					sources[0].src = array_vis[n];
					video.load();
					setTimeout(function () {
						video.play();
					}, 150);
				}

				video.addEventListener("ended", function (e) {
					n = (n === array_vis.length - 1) ? 0 : n + 1;
					sources[0].src = array_vis[n];
					video.load();
					setTimeout(function () {
						video.play();
					}, 150);

				});
			}
		}

		videoLoop()
	}
}

// let checkNamePageForHeader = function () {
//   const url = location.href;
//   let result = url.includes("work");

//   if (result === false) {
//     jQuery('.header').addClass('only-toggle')
//   }
// }

// click and go to block with ID ---------------------------------------------
let goToBlock = function (eClick, eToGo) {
	jQuery(eClick).click(function (e) {
		e.preventDefault()
		jQuery('html, body').animate({
			scrollTop: jQuery(eToGo).offset().top
		}, 1000);
	});
}

// contact form ---------------------------------------------
let contactForm = function () {
	// form contact -> chưa làm ------------------------------------------------
	function isValidForm(form) {
		isValid = true;
		var REX_IS_NUMBER = new RegExp('^[0-9]*jQuery');
		var REX_LOWERCASE = new RegExp('(?=.*[a-z])');
		var REX_UPPERCASE = new RegExp('(?=.*[A-Z])');
		var REX_NUMBER = new RegExp('(?=.*[0-9])');
		var REX_SPECIAL = new RegExp('(?=.[!@#\jQuery%\^&])');
		var REX_INTERGER = new RegExp('^[0-9]*jQuery');
		var REX_PHONE = new RegExp('^(0|84)[0-9]*jQuery');
		var REX_EMAIL = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))jQuery/);
		var REX_URL = new RegExp(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.​\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[​6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1​,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00​a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u​00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?jQuery/i);


		form.forEach(function (input) {
			var value = jQuery(input.name).val();
			input.validators.forEach(function (validator) {
				switch (validator) {
					case 'required':
						if (value === '') {
							isValid = false;
						}
						break;
					case 'isNumber':
						if (REX_IS_NUMBER.test(value) === false) {
							isValid = false;
						}
						break;
					case 'min':
						if (+value < input.min) {
							isValid = false;
						}
						break;
					case 'max':
						if (+value > input.max) {
							isValid = false;
						}
						break;
					case 'minLength':
						if (value.length < input.minLength) {
							isValid = false;
						}
						break;
					case 'maxLength':
						if (value.length > input.maxLength) {
							isValid = false;
						}
						break;
					case 'email':
						if (REX_EMAIL.test(value) === false) {
							isValid = false;
						}
						break;
				}
			});
		});

		return isValid;
	}

	function validateForm(jQuerysubmit, form) {

		function updateView() {
			jQuery(jQuerysubmit).attr("disabled", !isValidForm(form));
		}

		var arrElement = [];
		form.forEach(function (element) {
			arrElement.push(element.name);
		});

		jQuery(arrElement.join(",")).on("change keyup", function () {
			updateView();
		});
		updateView();
	}

	let contactValidateForm = function () {
		console.log('contactValidateForm');
		var form = [{
			name: '.contact .firstname',
			validators: ['required']
		}, {
			name: '.contact .lastname',
			validators: ['required']
		}, {
			name: '.contact .phone',
			validators: ['required', 'isNumber'],
		}, {
			name: '.contact .email',
			validators: ['required']
		}]
		var jQuerysubmit = ".contact .submit";
		validateForm(jQuerysubmit, form);
	}
}

// slider on our works page -> chưa làm-----------------------------------
let ourWorkSlider = function () {

	// const quantityEle = jQuery('.work-detail [data-quantity]');
	// const quantityNumber = parseInt(quantityEle[0]?.attributes["data-quantity"].value)

	jQuery(".work-detail .slider-single").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		useTransform: true,
		asNavFor: ".work-detail .slider-nav"
	});
	jQuery(".work-detail .slider-nav").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: ".work-detail .slider-single",
		arrows: true,
		focusOnSelect: true
	});

	jQuery('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		autoplay: true
	});

	jQuery(".slider-wrapper").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		autoplay: true,
		arrows: false,
		dots: false
	});
	jQuery(".slider-text-wrap").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		autoplay: false,
		arrows: true,
		dots: false,
		prevArrow: jQuery('.slider-text .prev'),
		nextArrow: jQuery('.slider-text .next')
	});

}

let turnOffVideoOnLocal = function () {
	// playVideoOnMobile();
	// checkVideoWhenEnd()
}

jQuery(window).on('resize', function () {
	ScrollTrigger.refresh();
	lazyLoadImage();
	AnimationGsap()

	turnOffVideoOnLocal()

})

jQuery(document).ready(function () {
	ScrollTrigger.refresh();
	goToBlock('.home1 .home3__link', ".home2")
	goToBlock('.home2 .home2__arrow', ".home3")

	lazyLoadImage();
	ourWorkSlider()
	contactForm()

	turnOffVideoOnLocal()

})

document.addEventListener("DOMContentLoaded", function () {
	window.onload = function () {
		jQuery('.loading').removeClass('active');
		window.requestAnimationFrame(function () {
			AnimationGsap()
			turnOffVideoOnLocal()
		})
	}
})

document.addEventListener("resize", function () {
	window.onload = function () {

		window.requestAnimationFrame(function () {
			AnimationGsap()
		})
	}
})

jQuery(window).on("scroll", function () {
	// activeMenuOnScroll()
});


// Animation page by Gsap  -------------------------------------------------------
class AppAnimation {
	constructor() {
		this.innitialize()
		this.render()
	}
	createLenis() {
		this._lenis = new Lenis({
			lerf: 0.1
		})
	}
	innitialize() {
		this.createLenis()
	}

	render(time) {
		this._lenis.raf(time)
		requestAnimationFrame(this.render.bind(this))
	}
}
new AppAnimation()


/*Scroll and change background color */
const scrollChangeBgOurWorks = () => {
	const colorBefore = 'linear-gradient(180deg, rgb(20, 69, 196) 0%, rgb(101, 195, 255) 50%, rgb(255, 255, 255) 100%)'
	const colorAfter = 'black'
	gsap.timeline({
		scrollTrigger: {
			id: 'zoom-bg',
			trigger: '.landing-wrap svg.logo',
			// markers: true,
			start: "top 10%",
			end: "bottom 15%",
			invalidateOnRefresh: true,

			onEnter: () => {
				gsap.to('.landing-wrap', {
					background: colorAfter
				})
			},

			onLeaveBack: () => {
				gsap.to('.landing-wrap', {
					background: colorBefore
				})
			},
		}
	});

}
// scrollChangeBgOurWorks()

/*list projects scrolling - old*/
const scrollOurWorks = () => {
	const sections = document.querySelector(".section-works");
	const projects = document.querySelector(".section-projects");
	const projectsSlides = gsap.utils.toArray(projects?.querySelectorAll("div"));
	if (projects) {
		const projectsSlidesDistance = () => {
			let lastItemBounds = projectsSlides[
				projectsSlides.length - 1
			].getBoundingClientRect();
			let containerBounds = projects?.getBoundingClientRect();
			return Math.max(0, lastItemBounds.right - containerBounds.right);
		};
		gsap.to(projects, {
			ease: "none",
			x: () => -projectsSlidesDistance(),
			scrollTrigger: {
				id: 'our-project',
				trigger: projects,
				pin: sections,
				start: "top top",
				invalidateOnRefresh: true,
				toggleActions: 'play complete reverse reset',
				end: () => `+=${projectsSlidesDistance()} 10%`,
				scrub: true,
				// markers: true
			}
		});
	}
}
// scrollOurWorks()
