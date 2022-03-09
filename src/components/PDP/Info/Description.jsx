import React from 'react';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

export default class Description extends React.Component {
	render () {
		return (
			<div id="description">
				{ this.parseString(this.props.description) }
			</div>
		);
	}

	parseString (htmlString) {
		const cleanHtmlString = DOMPurify.sanitize(
			htmlString,
			{ USE_PROFILES: { html: true } }
		);
		const html = parse(cleanHtmlString);
		return html;
	}
}
