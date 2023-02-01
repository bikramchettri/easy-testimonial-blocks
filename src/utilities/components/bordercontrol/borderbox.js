import borderstyles from '../../options/borderstyles';
import { __ } from '@wordpress/i18n';
import {
	Card,
	CardHeader,
	CardBody,
	SelectControl,
	RangeControl,
	Popover,
	ColorPicker,
	ColorIndicator,
} from '@wordpress/components';
import { Fragment, useState } from '@wordpress/element';

//import style
import './borderbox.scss';
const BorderBox = ({ label, attribute, attributeName, setAttributes }) => {
	const [visible, setVisible] = useState(false);
	return (
		<Card>
			<CardHeader>
				<p className="etb-label">{label}</p>
			</CardHeader>
			<CardBody>
				<div className="etb-border-control">
					<div className="border-width">
						<RangeControl
							label={__(
								'Border Width',
								'easy-testimonial-blocks'
							)}
							value={attribute.width}
							onChange={(value) =>
								setAttributes({
									[attributeName]: {
										...attribute,
										width: value,
									},
								})
							}
							min={0}
							max={100}
							help={
								__(
									'border width: ',
									'easy-testimonial-blocks'
								) +
								attribute.width +
								'px'
							}
						/>
					</div>
					{attribute.width > 0 && (
						<Fragment>
							<div className="border-style">
								<SelectControl
									label={__(
										'Border Style',
										'easy-testimonial-blocks'
									)}
									value={attribute.style}
									options={borderstyles}
									onChange={(value) => {
										setAttributes({
											[attributeName]: {
												...attribute,
												style: value,
											},
										});
									}}
								/>
							</div>
							<div className="border-color">
								<div className="etb-color-wrapper">
									<div className="color-header">
										<p className="etb-label no-margin">
											{__(
												'Border Color',
												'easy-testimonial-blocks'
											)}
										</p>
										<button
											className="color-indicator"
											onClick={() => setVisible(true)}
										>
											<ColorIndicator
												colorValue={attribute.color}
											/>
										</button>
									</div>

									{visible && (
										<Popover
											onFocusOutside={() =>
												setVisible(false)
											}
											position="bottom left"
										>
											<div className="color-picker">
												<ColorPicker
													color={attribute.color}
													onChangeComplete={(value) =>
														setAttributes({
															[attributeName]: {
																...attribute,
																color: value.hex,
															},
														})
													}
													disableAlpha={true}
												/>
											</div>
										</Popover>
									)}
								</div>
							</div>
						</Fragment>
					)}
				</div>
			</CardBody>
		</Card>
	);
};

export default BorderBox;
