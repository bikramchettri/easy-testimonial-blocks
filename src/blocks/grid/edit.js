/* eslint-disable @wordpress/no-unsafe-wp-apis */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
	TabPanel,
	CardDivider,
	RangeControl,
	SelectControl,
	Card,
	CardBody,
	CardHeader,
	__experimentalBorderControl as BorderControl,
	TextControl,
} from '@wordpress/components';
const { Fragment } = wp.element;

// editor style
import './editor.scss';

// editor style
import '../../utilities/admin/editor.scss';

// editor styled components
import EtaGrid from './editor-styled';

// import components
import ColorControl from '../../utilities/components/colorcontrol/colorcontrol';
import IconPicker from '../../utilities/components/iconpicker/iconpicker';
import SingleInput from '../../utilities/components/singleinput/singleinput';
import ButtonsControl from '../../utilities/components/buttonscontrol/buttonscontrol';
import BorderBox from '../../utilities/components/bordercontrol/borderbox';

// import options
import barPositions from '../../utilities/options/barpositions';
import aligns from '../../utilities/options/aligns';
import flexaligns from '../../utilities/options/flexaligns';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		gridCols,
		gridGap,
		showIcon,
		icon,
		iconSizes,
		iconColor,
		iconOpacity,
		showNumericalRating,
		ratingColor,
		showBar,
		barPosition,
		barThickness,
		barColor,
		ttmFontSizes,
		ttmFontColor,
		ttmAlign,
		photoSizes,
		photoBorder,
		photoBorderRadius,
		infoAlign,
		nameFontSizes,
		nameFontColor,
		titleFontSizes,
		titleFontColor,
		companyFontSizes,
		companyFontColor,
		containerBorder,
		containerBorderRadius,
		containerPadding,
		enableBoxShadow,
		containerBg,
		zIndex,
		customClases,
	} = attributes;

	// set unique id
	setAttributes({
		id: 'etb-grid-' + clientId.slice(0, 8),
	});

	return (
		<Fragment>
			<InspectorControls>
				<TabPanel
					className="etb-tab-panel"
					initialTabName="etb_general"
					tabs={[
						{
							name: 'etb_general',
							title: __('General', 'easy-testimonial-blocks'),
							className: 'etb_tab etb_general',
						},
						{
							name: 'etb_advanced',
							title: __('Advanced', 'easy-testimonial-blocks'),
							className: 'etb_tab etb_advanced',
						},
					]}
				>
					{(tab) => {
						if (tab.name === 'etb_general') {
							return (
								<Fragment>
									<PanelBody initialOpen={true}>
										<SingleInput
											label={__(
												'Grid Columns',
												'easy-testimonial-blocks'
											)}
											attribute={gridCols}
											attributeName="gridCols"
											setAttributes={setAttributes}
											min={1}
											max={5}
											deskResetValue={2}
											tabResetValue={2}
											mobResetValue={1}
											unit=""
										/>
										<SingleInput
											label={__(
												'Grid Gap',
												'easy-testimonial-blocks'
											)}
											attribute={gridGap}
											attributeName="gridGap"
											setAttributes={setAttributes}
											min={0}
											max={200}
											deskResetValue={20}
											tabResetValue={20}
											mobResetValue={15}
											unit="px"
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Container',
											'easy-testimonial-blocks'
										)}
										initialOpen={false}
									>
										<SingleInput
											label={__(
												'Container Padding',
												'easy-testimonial-blocks'
											)}
											attribute={containerPadding}
											attributeName="containerPadding"
											setAttributes={setAttributes}
											min={10}
											max={200}
											deskResetValue={20}
											tabResetValue={20}
											mobResetValue={15}
											unit="px"
										/>

										<ColorControl
											label={__(
												'Container Background',
												'easy-testimonial-blocks'
											)}
											colorValue={containerBg}
											colorName="containerBg"
											setAttributes={setAttributes}
											disableAlpha={false}
										/>
										<CardDivider />
										<ToggleControl
											label={__(
												'Enable Box Shadow',
												'easy-testimonial-blocks'
											)}
											checked={enableBoxShadow}
											onChange={() =>
												setAttributes({
													enableBoxShadow:
														!enableBoxShadow,
												})
											}
											help={
												enableBoxShadow
													? __(
															'Box Shadow Enabled',
															'easy-testimonial-blocks'
													  )
													: __(
															'Box Shadow Disabled',
															'easy-testimonial-blocks'
													  )
											}
										/>
										<RangeControl
											label={__(
												'Border Radius',
												'easy-testimonial-blocks'
											)}
											value={containerBorderRadius}
											onChange={(value) =>
												setAttributes({
													containerBorderRadius:
														value,
												})
											}
											min={0}
											max={100}
											help={
												__(
													'border radius: ',
													'easy-testimonial-blocks'
												) +
												containerBorderRadius +
												'px'
											}
											allowReset={true}
											resetFallbackValue={5}
										/>

										<BorderBox
											label={__(
												'Container Border',
												'easy-testimonial-blocks'
											)}
											attribute={containerBorder}
											attributeName="containerBorder"
											setAttributes={setAttributes}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Testimonial Bar',
											'easy-testimonial-blocks'
										)}
										initialOpen={false}
									>
										<ToggleControl
											label={__(
												'Show Testimonial Item Bar',
												'easy-testimonial-blocks'
											)}
											checked={showBar}
											onChange={() =>
												setAttributes({
													showBar: !showBar,
												})
											}
											help={
												showBar
													? __(
															'testimonial bar is visible.'
													  )
													: __(
															'testimonial bar is invisible.'
													  )
											}
										/>
										{showBar && (
											<Fragment>
												<SelectControl
													label={__(
														'Bar Position',
														'easy-testimonial-blocks'
													)}
													value={barPosition}
													options={barPositions}
													onChange={(value) =>
														setAttributes({
															barPosition: value,
														})
													}
												/>
												<RangeControl
													label={__(
														'Bar Thickness',
														'easy-testimonial-blocks'
													)}
													value={barThickness}
													onChange={(value) =>
														setAttributes({
															barThickness: value,
														})
													}
													min={1}
													max={20}
													allowReset={true}
													resetFallbackValue={4}
													help={
														__(
															'Bar thickness: ',
															'easy-testimonial-blocks'
														) +
														barThickness +
														'px'
													}
												/>
												<CardDivider />
												<ColorControl
													label={__(
														'Bar Color',
														'easy-testimonial-blocks'
													)}
													colorValue={barColor}
													colorName="barColor"
													setAttributes={
														setAttributes
													}
													disableAlpha={true}
												/>
											</Fragment>
										)}
									</PanelBody>
									<PanelBody
										title={__(
											'Quote Icon',
											'easy-testimonial-blocks'
										)}
										initialOpen={false}
									>
										<ToggleControl
											label={__(
												'Show Quote Icon',
												'easy-testimonial-blocks'
											)}
											help={
												showIcon
													? __(
															'Showing quote icon.',
															'easy-testimonial-blocks'
													  )
													: __(
															'Hiding quote icon.',
															'easy-testimonial-blocks'
													  )
											}
											checked={showIcon}
											onChange={() =>
												setAttributes({
													showIcon: !showIcon,
												})
											}
										/>
										{showIcon && (
											<Fragment>
												<IconPicker
													label={__(
														'Select Quote Icon',
														'easy-testimonial-blocks'
													)}
													selectedIcon={icon}
													func={(value) =>
														setAttributes({
															icon: value,
														})
													}
												/>
												<SingleInput
													label={__(
														'Icon Size',
														'easy-testimonial-blocks'
													)}
													attribute={iconSizes}
													attributeName="iconSizes"
													setAttributes={
														setAttributes
													}
													min={1}
													max={200}
													deskResetValue={60}
													tabResetValue={48}
													mobResetValue={36}
													unit="px"
												/>
												<CardDivider />
												<ColorControl
													label={__(
														'Quote Icon Color',
														'easy-testimonial-blocks'
													)}
													colorValue={iconColor}
													colorName="iconColor"
													setAttributes={
														setAttributes
													}
													disableAlpha={true}
												/>
												<RangeControl
													label={__(
														'Icon Opacity',
														'easy-testimonial-blocks'
													)}
													value={iconOpacity}
													onChange={(value) =>
														setAttributes({
															iconOpacity: value,
														})
													}
													min={0.1}
													max={1}
													step={0.01}
												/>
											</Fragment>
										)}
									</PanelBody>
									<PanelBody
										title={__(
											'Rating',
											'easy-testimonial-blocks'
										)}
										initialOpen={false}
									>
										<ToggleControl
											label={__(
												'Show Number Rating',
												'easy-testimonial-blocks'
											)}
											checked={showNumericalRating}
											onChange={() =>
												setAttributes({
													showNumericalRating:
														!showNumericalRating,
												})
											}
											help={
												showNumericalRating
													? __(
															'Number rating is enabled.',
															'easy-testimonial-blocks'
													  )
													: __(
															'Number rating is disabled.',
															'easy-testimonial-blocks'
													  )
											}
										/>
										<CardDivider />
										<ColorControl
											label={__(
												'Rating Color',
												'easy-testimonial-blocks'
											)}
											colorValue={ratingColor}
											colorName="ratingColor"
											setAttributes={setAttributes}
											disableAlpha={true}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Testimonial Content',
											'easy-testimonial-blocks'
										)}
										initialOpen={false}
									>
										<SingleInput
											label={__(
												'Font Size',
												'easy-testimonial-blocks'
											)}
											attribute={ttmFontSizes}
											attributeName="ttmFontSizes"
											setAttributes={setAttributes}
											min={1}
											max={100}
											deskResetValue={20}
											tabResetValue={18}
											mobResetValue={16}
											unit="px"
										/>
										<ButtonsControl
											label={__(
												'Text Align',
												'easy-testimonial-blocks'
											)}
											attribute={ttmAlign}
											attributeName="ttmAlign"
											setAttributes={setAttributes}
											options={aligns}
										/>
										<CardDivider />
										<ColorControl
											label={__(
												'Content Color',
												'easy-testimonial-blocks'
											)}
											colorValue={ttmFontColor}
											colorName="ttmFontColor"
											setAttributes={setAttributes}
											disableAlpha={true}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Testimonial User Info',
											'easy-testimonial-blocks'
										)}
										initialOpen={false}
									>
										<ButtonsControl
											label={__(
												'Alignment',
												'easy-testimonial-blocks'
											)}
											attribute={infoAlign}
											attributeName="infoAlign"
											setAttributes={setAttributes}
											options={flexaligns}
										/>
										<Card>
											<CardHeader>
												<strong>
													{__(
														'User Photo',
														'easy-testimonial-blocks'
													)}
												</strong>
											</CardHeader>
											<CardBody>
												<SingleInput
													label={__(
														'Photo Size',
														'easy-testimonial-blocks'
													)}
													attribute={photoSizes}
													attributeName="photoSizes"
													setAttributes={
														setAttributes
													}
													min={1}
													max={300}
													deskResetValue={60}
													tabResetValue={48}
													mobResetValue={36}
													unit="px"
												/>
												<BorderControl
													label={__(
														'Photo Border',
														'easy-testimonial-blocks'
													)}
													onChange={(border) =>
														setAttributes({
															photoBorder: border,
														})
													}
													value={photoBorder}
													withSlider={true}
													disableUnits
												/>
												<CardDivider />
												<RangeControl
													label={__(
														'Photo Border Radius',
														'easy-testimonial-blocks'
													)}
													value={photoBorderRadius}
													onChange={(value) =>
														setAttributes({
															photoBorderRadius:
																value,
														})
													}
													min={0}
													max={100}
													help={
														__(
															'border radius: ',
															'easy-testimonial-blocks'
														) +
														photoBorderRadius +
														'%'
													}
													allowReset={true}
													resetFallbackValue={50}
												/>
											</CardBody>
										</Card>
										<Card>
											<CardHeader>
												<strong>
													{__(
														'User Info',
														'easy-testimonial-blocks'
													)}
												</strong>
											</CardHeader>
											<CardBody>
												<SingleInput
													label={__(
														'Name Font Size',
														'easy-testimonial-blocks'
													)}
													attribute={nameFontSizes}
													attributeName="nameFontSizes"
													setAttributes={
														setAttributes
													}
													min={1}
													max={100}
													deskResetValue={24}
													tabResetValue={20}
													mobResetValue={18}
													unit="px"
												/>
												<ColorControl
													label={__(
														'Name Color',
														'easy-testimonial-blocks'
													)}
													colorValue={nameFontColor}
													colorName="nameFontColor"
													setAttributes={
														setAttributes
													}
													disableAlpha={true}
												/>
												<CardDivider />
												<SingleInput
													label={__(
														'Designation Font Size',
														'easy-testimonial-blocks'
													)}
													attribute={titleFontSizes}
													attributeName="titleFontSizes"
													setAttributes={
														setAttributes
													}
													min={1}
													max={100}
													deskResetValue={18}
													tabResetValue={16}
													mobResetValue={14}
													unit="px"
												/>
												<ColorControl
													label={__(
														'Designation Color',
														'easy-testimonial-blocks'
													)}
													colorValue={titleFontColor}
													colorName="titleFontColor"
													setAttributes={
														setAttributes
													}
													disableAlpha={true}
												/>
												<CardDivider />
												<SingleInput
													label={__(
														'Company Font Size',
														'easy-testimonial-blocks'
													)}
													attribute={companyFontSizes}
													attributeName="companyFontSizes"
													setAttributes={
														setAttributes
													}
													min={1}
													max={100}
													deskResetValue={16}
													tabResetValue={15}
													mobResetValue={14}
													unit="px"
												/>
												<ColorControl
													label={__(
														'Company Color',
														'easy-testimonial-blocks'
													)}
													colorValue={
														companyFontColor
													}
													colorName="companyFontColor"
													setAttributes={
														setAttributes
													}
													disableAlpha={true}
												/>
											</CardBody>
										</Card>
									</PanelBody>
								</Fragment>
							);
						} else if (tab.name === 'etb_advanced') {
							return (
								<Fragment>
									<PanelBody initialOpen={true}>
										<RangeControl
											label={__(
												'Z Index',
												'easy-testimonial-blocks'
											)}
											value={zIndex}
											onChange={(value) =>
												setAttributes({
													zIndex: value,
												})
											}
											min={-999}
											max={999}
											allowReset={true}
											resetFallbackValue=""
											help={__(
												'Use this option to set the z-index of the testimonial. This is useful if you have overlapping elements on your page.',
												'easy-testimonial-blocks'
											)}
										/>
										<TextControl
											label={__(
												'Custom CSS Class(es)',
												'easy-testimonial-blocks'
											)}
											value={customClases}
											onChange={(value) =>
												setAttributes({
													customClases: value,
												})
											}
											help={__(
												'Separate multiple classes with a space.',
												'easy-testimonial-blocks'
											)}
										/>
									</PanelBody>
								</Fragment>
							);
						}
					}}
				</TabPanel>
			</InspectorControls>

			<EtaGrid
				{...useBlockProps({
					className: `${
						showBar ? 'etb-has-bar' + ' ' + barPosition : ''
					} ${enableBoxShadow ? 'has-box-shadow' : ''} ${
						customClases || ''
					}`,
				})}
				gridCols={gridCols}
				gridGap={gridGap}
				iconSizes={iconSizes}
				iconColor={iconColor}
				iconOpacity={iconOpacity}
				ratingColor={ratingColor}
				showBar={showBar}
				barColor={barColor}
				barThickness={barThickness}
				ttmFontSizes={ttmFontSizes}
				ttmFontColor={ttmFontColor}
				photoSizes={photoSizes}
				photoBorder={photoBorder}
				photoBorderRadius={photoBorderRadius}
				titleFontSizes={titleFontSizes}
				titleFontColor={titleFontColor}
				nameFontSizes={nameFontSizes}
				nameFontColor={nameFontColor}
				companyFontSizes={companyFontSizes}
				companyFontColor={companyFontColor}
				ttmAlign={ttmAlign}
				infoAlign={infoAlign}
				containerPadding={containerPadding}
				containerBg={containerBg}
				containerBorderRadius={containerBorderRadius}
				containerBorder={containerBorder}
				zIndex={zIndex}
			>
				<InnerBlocks
					allowedBlocks={['etb/grid-item']}
					template={[['etb/grid-item'], ['etb/grid-item']]}
				/>
			</EtaGrid>
		</Fragment>
	);
}
