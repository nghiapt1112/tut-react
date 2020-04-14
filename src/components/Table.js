import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Table.css';

const meta = [
  {
    key: 'id',
    text: 'ID',
    sort: true
  },
  {
    key: 'name',
    text: 'Automobile Company',
    sort: true
  },
  {
    key: 'age',
    text: 'Years Since Purchase',
    sort: true
  },
  {
    key: 'color',
    text: 'Color',
    sort: true
  }
];
const data = [
  { name: 'Porsche', age: 2, color: 'Blue' },
  { name: 'BMW', age: 1, color: 'Grey' },
  { name: 'Renault', age: 2, color: 'Yellow' },
  { name: 'Volkswagen', age: 7, color: 'Matte Red' },
  { name: 'Porsche', age: 2, color: 'Silver Grey' },
  { name: 'Jaguar', age: 6, color: 'Electric Blue' },
  { name: 'Mistubishi', age: 4, color: 'Black' },
  { name: 'Toyota', age: 9, color: 'Copper' },
  { name: 'Honda', age: 12, color: 'Biege' }
].map((d, id) => ({ ...d, id }));

function TableHeader({ headers }) {
  return (
    <thead className="table-row">
      {headers.map(d => (
        <TableCell data={d} />
      ))}
    </thead>
  );
}

function TableData({ data, meta }) {
  const headerOrder = meta.map(m => m.key);
  return (
    <tbody>
      {data.map(row => (
        <tr className="table-row">
          {row.map((_, i) => (
            <TableCell data={row.find(r => r.key === headerOrder[i])} />
          ))}
        </tr>
      ))}
    </tbody>
  );
}

function TableCell({ data }) {
  return (
    <td className="table-cell" onClick={data.sortFunc}>
      {data.text}
    </td>
  );
}

function Table({ normalizeData }) {
  const [headerMeta, setHeaderMeta] = useState(meta);
  const [tableData, setTableData] = useState([]);
  const [sortBy, setSortBy] = useState({ key: null, order: '>' });
  const compare = {
    '>': (d1, d2) => d1 > d2,
    '<': (d1, d2) => d1 < d2
  };

  useEffect(() => {
    // sorts raw data > normalizes data > sets as tableData
    setTableData(
      normalizeData(
        data.sort((d1, d2) =>
          compare[sortBy.order](d1[sortBy.key], d2[sortBy.key])
        )
      )
    );
  }, [sortBy]);

  useEffect(() => {
    setTableData(normalizeData(data), meta);
  }, []);

  setHeaderMeta(
    currentHeaderMeta => {
      // changes the meta the header uses to pass the approriate sort function
      currentHeaderMeta.map(m =>
        m.sort ? { ...m, sortFunc: () => sortFunc(m) } : m
      );
    },
    [sortBy]
  );

  function normalizeData(data) {
    return data.map(td => {
      const keys = Object.keys(td);
      return keys.map(key => ({ key, text: td[key] }));
    });
  }

  return (
    <div className="container">
      <TableHeader headers={headerMeta} />
      <TableData data={tableData} meta={meta} />
    </div>
  );
}

export default Table;
TableHeader.propTypes = {
  headers: PropTypes.array
};
TableData.propTypes = {
  data: PropTypes.object,
  meta: PropTypes.object
};
TableCell.propTypes = {
  data: PropTypes.object
};
Table.propTypes = {
  normalizeData: PropTypes.func
};
