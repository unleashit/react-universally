/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/html-has-lang */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * The is the HTML shell for our React Application.
 */
function HTML(props) {
  const { htmlAttributes, headerElements, bodyElements, children } = props;

  return (
    <html {...htmlAttributes}>
      <head>{headerElements}</head>
      <body>
        <div id="app">{children}</div>
        {bodyElements}
      </body>
    </html>
  );
}

HTML.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  htmlAttributes: PropTypes.object,
  headerElements: PropTypes.node,
  bodyElements: PropTypes.node,
  children: PropTypes.node,
};

HTML.defaultProps = {
  htmlAttributes: null,
  headerElements: null,
  bodyElements: null,
  children: null,
};

// EXPORT

export default HTML;
