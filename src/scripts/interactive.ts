export function setupInteractions() {
	if (typeof window === 'undefined') return;

	// 1. Mouse coordinates CSS variables for proximity lighting
	window.addEventListener('mousemove', (e) => {
		document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
		document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
	});

	// 2. Subtle 3D Tilt Effect on Cards & Logo (excluding Blog posts/lists)
	const tiltElements = document.querySelectorAll<HTMLElement>(
		'.card, .project-card, .event-card, .hero-logo'
	);

	tiltElements.forEach((el) => {
		el.style.transition = 'transform 0.2s ease-out, box-shadow 0.2s ease-out';
		el.style.transformStyle = 'preserve-3d';

		el.addEventListener('mousemove', (e: MouseEvent) => {
			const rect = el.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			const centerX = rect.width / 2;
			const centerY = rect.height / 2;

			const rotateX = ((y - centerY) / centerY) * -3.5;
			const rotateY = ((x - centerX) / centerX) * 3.5;

			el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;
		});

		el.addEventListener('mouseleave', () => {
			el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
		});
	});

	// 3. Magnetic Buttons
	const buttons = document.querySelectorAll<HTMLElement>('.btn');
	buttons.forEach((btn) => {
		btn.addEventListener('mousemove', (e: MouseEvent) => {
			const rect = btn.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;

			btn.style.transform = `translate3d(${x * 0.2}px, ${y * 0.2}px, 0)`;
		});

		btn.addEventListener('mouseleave', () => {
			btn.style.transform = 'translate3d(0, 0, 0)';
		});
	});

	// 4. Scroll Reveal via IntersectionObserver
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('revealed');
				}
			});
		},
		{ threshold: 0.1 }
	);

	const revealElements = document.querySelectorAll('.reveal-on-scroll');
	revealElements.forEach((el) => observer.observe(el));
}

// Auto-run setup
setupInteractions();
document.addEventListener('astro:page-load', setupInteractions);
