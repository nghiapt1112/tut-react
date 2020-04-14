import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TRow({ rowIndex, theme, customRenderer, columns, row }) {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <tr
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      style={
        hover
          ? { backgroundColor: '#c0c0c0' }
          : rowIndex % 2 === 0
          ? theme.rowEven
          : theme.rowOdd
      }
    >
      <td key={rowIndex} style={theme.cell}>
        {rowIndex + 1}
      </td>

      {Object.keys(row).map((cell, ndx) => {
        if (columns[ndx + 1].type === 'custom') {
          return (
            <td key={ndx + 1} style={theme.cell}>
              {customRenderer(row)}
            </td>
          );
        } else {
          return (
            <td key={ndx + 1} style={theme.cell}>
              {row[cell]}
            </td>
          );
        }
      })}
    </tr>
  );
}
export default TRow;

TRow.propTypes = {
  theme: PropTypes.object,
  customRenderer: PropTypes.func,
  columns: PropTypes.array,
  rowIndex: PropTypes.number,
  key: PropTypes.number,
  row: PropTypes.object
};
