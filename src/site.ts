export const siteTitle = 'parantaja.fi';

export const defaultDescription = 'parantaja.fi';

export interface NavigationLink {
	href: string;
	label: string;
}

export interface NavigationGroup {
	label: string;
	children: NavigationLink[];
}

export type NavigationItem = NavigationLink | NavigationGroup;

export const navigation: NavigationItem[] = [
	{ href: '/', label: 'Etusivu' },
	{
		label: 'Pekka-Ilmari',
		children: [
			{ href: '/sanottua', label: 'Minusta sanottua' },
			{ href: '/meista', label: 'Kuka minä olen?' },
			{ href: '/maailmankuva', label: 'Maailmankuvani' },
		],
	},
	{ href: '/palvelut', label: 'Palvelut' },
	{ href: '/hinnasto', label: 'Hinnattomuus' },
	{ href: '/yhteys', label: 'Yhteystiedot' },];
