const burgerBtn = document.querySelector('.burger-btn')
const navBar = document.querySelector('nav')
const navBtns = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')
const callBtn = document.querySelector('.contact__details-item--call')
const navBtn = document.querySelector('.contact__details-item--navigate')

function active() {
	navBar.classList.toggle('nav--active')

	navBtnBars.classList.remove('black-bars-color')

	navBtns.forEach(item => {
		item.addEventListener('click', () => {
			navBar.classList.remove('nav--active')
			handleNavItemsAnimation()
		})
	})

	handleNavItemsAnimation()
}

const handleCallButton = () => {
	const phoneNumber = '570 681 958'
	window.open(`tel:${phoneNumber}`)
}

const handleNavButton = () => {
	window.open(`https://www.google.com/maps/dir//Pan+ekspres+-+serwis+i+naprawa+ekspres%C3%B3w,+Prudnicka+25,+48-300+Nysa/@50.4685725,17.336327,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4711c56051469b15:0x6bb22e8ddac37a1f!2m2!1d17.3389019!2d50.4685691!3e0?entry=ttu`, `_blank`)
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	navBtns.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const handleObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars-color')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars-color')
		}
	})
}

handleCurrentYear()
burgerBtn.addEventListener('click', active)
window.addEventListener('scroll', handleObserver)
callBtn.addEventListener('click', handleCallButton)
navBtn.addEventListener('click', handleNavButton)
