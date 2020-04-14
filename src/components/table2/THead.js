import React from 'react';
import PropTypes from 'prop-types';

export default function THead({ theme, columnRenderer, columns, onClick }) {
  return (
    <thead>
      <tr style={theme.column}>
        {columns.map(col => (
          <th style={theme.cell} key={col.name} onClick={onClick}>
            {columnRenderer(col.name)}
          </th>
        ))}
      </tr>
    </thead>
  );
}
THead.propTypes = {
  theme: PropTypes.object,
  columnRenderer: PropTypes.func,
  columns: PropTypes.array,
  onClick: PropTypes.func
};
