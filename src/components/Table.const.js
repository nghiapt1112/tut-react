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
