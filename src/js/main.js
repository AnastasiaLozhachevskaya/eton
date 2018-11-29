const initMenu = () => {
		const mainNavLinks = Array.from(document.querySelectorAll('.js-nav-link'));
		const header = document.querySelector('.js-header');
		const headerNav = document.querySelector('.js-header-nav');
		const body = document.body;

		mainNavLinks.forEach(link => {
				link.addEventListener('click', e => {
						e.preventDefault();
						header.classList.add('opened');
						mainNavLinks.forEach(link => link.classList.remove('active'));
						link.classList.add('active');
				});
		});

		body.addEventListener('click', () => {
				header.classList.remove('opened');
				mainNavLinks.forEach(link => link.classList.remove('active'));
		});

		headerNav.addEventListener('click', e => e.stopPropagation());
};

window.onload = () => {
  initMenu();
};
