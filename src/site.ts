export const siteTitle = 'parantaja.fi';

export const defaultDescription = 'parantaja.fi';

export interface NavigationItem {
	label: string;
	href?: string;
	children?: NavigationItem[];
}

export const navigation: NavigationItem[] = [
	{ href: '/', label: 'Etusivu' },
	{
		href: '/pekka-ilmari',
		label: 'Pekka-Ilmari',
		children: [
			{ href: '/sanottua', label: 'Minusta sanottua' },
			{ href: '/meista', label: 'Kuka minä olen?' },
			{ href: '/maailmankuva', label: 'Maailmankuvani' },
		],
	},
	{
		href: '/palvelut',
		label: 'Palvelut',
		children: [
			{ href: '/hoidot', label: 'Ihmisten parantaminen' },
			{ href: '/yksinkertaistaminen', label: 'Yksinkertaistaminen' },
			{ href: '/eu-rahoitus', label: 'EU-rahoitus' }
		],
	},
	{
		href: '/hinnasto',
		label: 'Hinnattomuus',
		children: [
			{ href: '/sopimusehdot', label: 'Sopimuksettomuus' },
			{ href: '/lisenssit', label: 'Avoimuus'}
		]
	},
	{ href: '/yhteys', label: 'Yhteystiedot' },];
