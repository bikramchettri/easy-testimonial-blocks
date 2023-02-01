import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import metadata from './block.json';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

/**
 * Block Registration
 */

registerBlockType(metadata, {
	icon: {
		src: (
			<svg width="24" height="24" fillRule="evenodd" clipRule="evenodd">
				<path d="M15 21c5.252-1.039 9-4.905 9-10.609v-7.391h-9.983v10h3.983c0 2.211-1.563 4.932-3.996 5.849l.996 2.151zm-14 0c5.252-1.039 8.983-4.905 8.983-10.609v-7.391h-9.983v10h4c0 2.211-1.563 4.932-3.995 5.849l.995 2.151zm.567-1.156l-.241-.52c2.394-1.391 3.674-4.159 3.674-6.324v-1h-4v-8h7.983v6.391c0 4.687-2.82 8.248-7.416 9.453m14 .001l-.241-.521c2.394-1.391 3.674-4.159 3.674-6.324v-1h-3.983v-8h7.983v6.391c0 4.686-2.827 8.247-7.433 9.454" />
			</svg>
		),
		foreground: '#5c4fdb',
	},
	edit: Edit,
	save: Save,
});
