export const siteLang = 'fi';

const footnoteLocalizations = {
	fi: {
		footnoteLabel: 'Huomautukset',
		footnoteLabelProperties: {
			className: ['footnotes-label'],
		},
		footnoteBackLabel(referenceIndex, rereferenceIndex) {
			const referenceNumber = referenceIndex + 1;
			const repeatedReferenceSuffix = rereferenceIndex > 1 ? `-${rereferenceIndex}` : '';

			return `Takaisin viitteeseen ${referenceNumber}${repeatedReferenceSuffix}`;
		},
	},
};

export const markdownRemarkRehype = footnoteLocalizations[siteLang];
