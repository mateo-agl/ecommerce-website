import React from 'react';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

export const Description = ({ description }) => {
	const parseString = (htmlString) => {
		const cleanHtmlString = DOMPurify.sanitize(
			htmlString,
			{ USE_PROFILES: { html: true } }
		);
		const html = parse(cleanHtmlString);
		return html;
	};

	return (
		<div id="description">
			{ parseString(description) }
		</div>
	);
};