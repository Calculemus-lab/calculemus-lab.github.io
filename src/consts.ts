// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Calculemus Team';
export const SITE_DESCRIPTION = 'Leiden University AI Team';
export const SITE_TAGLINE = 'Computing the future of AI. We build and connect.';

export const ORGANIZATION = {
	name: 'Calculemus',
	university: 'Leiden University',
	department: 'LIACS',
	fullUniversity: 'Leiden University (LIACS)',
} as const;

export const NAV_ITEMS = [
	{ href: '/', label: 'Home' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/events', label: 'Events' },
	{ href: '/team', label: 'Team' },
] as const;

export const SOCIAL_LINKS = {
	instagram: 'https://instagram.com/calculemus_team',
	linkedin: 'https://www.linkedin.com/company/calculemus-leiden/about/',
	email: 'mailto:calculemus@liacs.leidenuniv.nl',
} as const;
