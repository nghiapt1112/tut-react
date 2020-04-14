import React from 'react';
import TRow from './TRow';
import PropTypes from 'prop-types';

export default function TBody({ theme, customRenderer, columns, rows }) {
  return (
    <tbody>
      {rows.map((row, ndx) => (
        // eslint-disable-next-line react/jsx-key
        <TRow
          rowIndex={ndx}
          theme={theme}
          customRenderer={customRenderer}
          columns={columns}
          row={row}
        />
      ))}
    </tbody>
  );
}
TBody.propTypes = {
  theme: PropTypes.object,
  customRenderer: PropTypes.func,
  columns: PropTypes.array,
  rows: PropTypes.array
};
