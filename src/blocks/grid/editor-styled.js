import styled from 'styled-components';

const EtaGrid = styled.div`
	${(props) => props.zIndex && `z-index: ${props.zIndex};`}

	.wp-block-etb-grid-item {
		${(props) => props.containerBg && `background: ${props.containerBg};`}
		border-radius: ${(props) => props.containerBorderRadius}px;
		${(props) =>
			props.containerBorder.width !== 0 &&
			`border: ${props.containerBorder.width}px ${props.containerBorder.style} ${props.containerBorder.color};`}
	}

	.quote-icon svg {
		${(props) => props.iconColor && `fill: ${props.iconColor};`}
		opacity: ${(props) => props.iconOpacity};
	}

	.react-rater-star.is-active,
	.react-rater-star.is-active-half::before,
	.rating-value {
		${(props) => props.ratingColor && `color: ${props.ratingColor};`}
	}

	${(props) =>
		props.showBar &&
		`
		&.etb-has-bar {
			&.etb_left {
				.wp-block-etb-grid-item {
					${props.barColor && `border-left-color: ${props.barColor};`}
					border-left-width: ${props.barThickness}px;
				}
			}
			&.etb_right {
				.wp-block-etb-grid-item {
					${props.barColor && `border-right-color: ${props.barColor};`}
					border-right-width: ${props.barThickness}px;
				}
			}
			&.etb_top {
				.wp-block-etb-grid-item {
					${props.barColor && `border-top-color: ${props.barColor};`}
					border-top-width: ${props.barThickness}px;
				}
			}
			&.etb_bottom {
				.wp-block-etb-grid-item {
					${props.barColor && `border-bottom-color: ${props.barColor};`}
					border-bottom-width: ${props.barThickness}px;
				}
			}
		}
	`}

	.testimonial-message {
		${(props) => props.ttmFontColor && `color: ${props.ttmFontColor};`}
		text-align: ${(props) => props.ttmAlign};
	}

	.reviewer-info {
		justify-content: ${(props) => props.infoAlign};
	}

	.reviewer-photo {
		${(props) =>
			props.photoBorderRadius &&
			`border-radius: ${props.photoBorderRadius}%;`}

		${(props) =>
			props.photoBorder.width !== '0px' &&
			`border: ${props.photoBorder.width} ${
				props.photoBorder.style ? props.photoBorder.style : 'solid'
			} ${props.photoBorder.color ? props.photoBorder.color : '#fa0'};`}
	}

	.reviewer-name {
		${(props) => props.nameFontColor && `color: ${props.nameFontColor};`}
	}
	.reviewer-title {
		${(props) => props.titleFontColor && `color: ${props.titleFontColor};`}
	}
	.reviewer-company {
		${(props) =>
			props.companyFontColor && `color: ${props.companyFontColor};`}
	}

	@media (min-width: 1025px) {
		.block-editor-block-list__layout {
			grid-template-columns: ${(props) =>
				`repeat(${props.gridCols.desktop}, 1fr)`};
			gap: ${(props) => props.gridGap.desktop}px;
		}
		.wp-block-etb-grid-item {
			padding: ${(props) => props.containerPadding.desktop}px;
		}
		.quote-icon svg {
			width: ${(props) => props.iconSizes.desktop}px;
		}
		.testimonial-message {
			font-size: ${(props) => props.ttmFontSizes.desktop}px;
		}
		.reviewer-photo {
			width: ${(props) => props.photoSizes.desktop}px;
			height: ${(props) => props.photoSizes.desktop}px;
		}
		.reviewer-name {
			font-size: ${(props) => props.nameFontSizes.desktop}px;
		}
		.reviewer-title {
			font-size: ${(props) => props.titleFontSizes.desktop}px;
		}
		.reviewer-company {
			font-size: ${(props) => props.companyFontSizes.desktop}px;
		}
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		.block-editor-block-list__layout {
			grid-template-columns: ${(props) =>
				`repeat(${props.gridCols.tablet}, 1fr)`};
			gap: ${(props) => props.gridGap.tablet}px;
		}
		.wp-block-etb-grid-item {
			padding: ${(props) => props.containerPadding.tablet}px;
		}
		.quote-icon svg {
			width: ${(props) => props.iconSizes.tablet}px;
		}
		.testimonial-message {
			font-size: ${(props) => props.ttmFontSizes.tablet}px;
		}
		.reviewer-photo {
			width: ${(props) => props.photoSizes.tablet}px;
			height: ${(props) => props.photoSizes.tablet}px;
		}
		.reviewer-name {
			font-size: ${(props) => props.nameFontSizes.tablet}px;
		}
		.reviewer-title {
			font-size: ${(props) => props.titleFontSizes.tablet}px;
		}
		.reviewer-company {
			font-size: ${(props) => props.companyFontSizes.tablet}px;
		}
	}

	@media (max-width: 767px) {
		.block-editor-block-list__layout {
			grid-template-columns: ${(props) =>
				`repeat(${props.gridCols.mobile}, 1fr)`};
			gap: ${(props) => props.gridGap.mobile}px;
		}
		.wp-block-etb-grid-item {
			padding: ${(props) => props.containerPadding.mobile}px;
		}
		.quote-icon svg {
			width: ${(props) => props.iconSizes.mobile}px;
		}
		.testimonial-message {
			font-size: ${(props) => props.ttmFontSizes.mobile}px;
		}
		.reviewer-photo {
			width: ${(props) => props.photoSizes.mobile}px;
			height: ${(props) => props.photoSizes.mobile}px;
		}
		.reviewer-name {
			font-size: ${(props) => props.nameFontSizes.mobile}px;
		}
		.reviewer-title {
			font-size: ${(props) => props.titleFontSizes.mobile}px;
		}
		.reviewer-company {
			font-size: ${(props) => props.companyFontSizes.mobile}px;
		}
	}
`;

export default EtaGrid;
