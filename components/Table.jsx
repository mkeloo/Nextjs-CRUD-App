import TableRow from './TableRow';
import data from '../database/data.json';

const Table = () => {
  const heading = [
    { id: 1, head: 'Name' },
    { id: 2, head: 'Email' },
    { id: 3, head: 'Salary' },
    { id: 4, head: 'Date' },
    { id: 5, head: 'Status' },
    { id: 6, head: 'Actions' },
  ];

  return (
    <table className="max-w-lg mx-auto my-4 table-auto">
      <thead>
        <tr className="bg-gray-800">
          {heading.map(({ id, head }) => {
            return (
              <th key={id} className="px-4 py-2 text-white border-b-2">
                {head}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="bg-gray-200  ">
        {data?.map((item) => (
          <TableRow key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
