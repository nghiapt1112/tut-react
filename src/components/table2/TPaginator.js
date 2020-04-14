import React from 'react';
import PropTypes from 'prop-types';

export default function TPaginator({ theme, page, setPage, size }) {
  return (
    <ul>
      {Array(size)
        .fill(0)
        .map((_, i) => (
          <li style={theme.paginator} key={i} onClick={() => setPage(i)}>
            {i}
          </li>
        ))}
    </ul>
  );
}

TPaginator.propTypes = {
  theme: PropTypes.object,
  page: PropTypes.number,
  setPage: PropTypes.func,
  size: PropTypes.number
};
