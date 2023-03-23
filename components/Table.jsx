import { BiEdit, BiTrashAlt } from 'react-icons/bi';

const Table = () => {
  const heading = [
    { id: 1, head: 'Name' },
    { id: 2, head: 'Email' },
    { id: 3, head: 'Salary' },
    { id: 4, head: 'Birthday' },
    { id: 5, head: 'Status' },
    { id: 6, head: 'Actions' },
  ];

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          {heading.map(({ id, head }) => {
            return (
              <th key={id} className="px-4 py-2 text-white">
                {head}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        <tr className="bg-gray-50 text-center">
          <td className="px-16 py-2 flex flex-row items-center">
            <img src="#" alt="" />
            <span className="text-center ml-2 font-semi-bold">Moksh Keloo</span>
          </td>
          <td className="px-16 py-2">
            <span>mokshkeloo@gmail.com</span>
          </td>
          <td className="px-16 py-2">
            <span>$40000</span>
          </td>
          <td className="px-16 py-2">
            <span>03-16-2023</span>
          </td>
          <td className="px-16 py-2">
            <button className="cursor">
              <span className="bg-green-500 text-white px-5 py-1 rounded-full">
                Active
              </span>
            </button>
          </td>
          <td className="px-16 py-2 flex justify-around gap-3">
            <button className="cursor">
              <BiEdit className="text-blue-500" size={23} />
            </button>
            <button className="cursor">
              <BiTrashAlt className="text-red-500" size={23} />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
