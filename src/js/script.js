const burgerBtn = document.querySelector('.burger-btn')
const navBar = document.querySelector('nav')
const navBtns = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')
let delayTime

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

const handleNavItemsAnimation = () => {
	delayTime = 0

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
