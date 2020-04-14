import React, { useEffect, useState } from 'react';
import THead from './THead';
import TBody from './TBody';
import { columns, sampleData, options } from './SampleData';
import { theme } from './Table.Style';
import TPaginator from './TPaginator';
import { Form, Field } from 'react-final-form'

function Table() {
  const [size, setSize] = useState(10);
  const [currenttheme, setCurrentTheme] = useState(theme.light);
  const [currentPage, setCurrentPage] = useState(0);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    console.log('current page:' + currentPage);
    setTableData(
      sampleData.slice(currentPage * size, (currentPage + 1) * size)
    );
  }, [currentPage]);

  function onChangeSize () {
    console.log('Changed size');
  }
  const customRenderer = row => {
    return <a href={row.url}>{row.title}</a>;
  };

  const columnRenderer = column => {
    return column.slice(0, 1).toUpperCase() + column.slice(1, column.length);
  };

  function clickTitle() {
    alert('clicked title');
  }
  const switchTheme = ({ target }) => {
    if (target.innerText.toUpperCase() === 'LIGHT') {
      setCurrentTheme(theme.light);
    } else if (target.innerText.toUpperCase() === 'DARK') {
      setCurrentTheme(theme.dark);
    }
  };
  return (
    <>
      <Form>
      <div>
        <button style={currenttheme.button} onClick={switchTheme}>
          Light
        </button>
        <button style={currenttheme.button} onClick={switchTheme}>
          Dark
        </button>
      </div>
      <table style={currenttheme.table}>
        <THead
          theme={currenttheme}
          columnRenderer={columnRenderer}
          columns={columns}
          onClick={clickTitle}
        />
        <TBody
          theme={currenttheme}
          customRenderer={customRenderer}
          columns={columns}
          rows={tableData}
        />
      </table>
      <TPaginator
        theme={currenttheme}
        page={1}
        setPage={setCurrentPage}
        size={Math.ceil(sampleData.length / size)}
      />
        div>
        <label>Toppings</label>
        <Field name="toppings" component="select" multiple>
          <option value="chicken">🐓 Chicken</option>
          <option value="ham">🐷 Ham</option>
          <option value="mushrooms">🍄 Mushrooms</option>
          <option value="cheese">🧀 Cheese</option>
          <option value="tuna">🐟 Tuna</option>
          <option value="pineapple">🍍 Pineapple</option>
        </Field>
      </div>
      <

      </Form>
  );
}
export default Table;
