import { BiEdit, BiTrashAlt } from 'react-icons/bi';

function TableRow({ id, name, avatar, email, salary, date, status }) {
  return (
    <tr key={id} className="bg-gray-50 text-center border-b-2 ">
      <td className="px-16 py-2 flex flex-row items-center  ">
        <img
          src={avatar || '#'}
          alt={name || 'Unknown'}
          className="rounded-lg"
        />
        <span className="text-center ml-2 font-semi-bold">
          {name || 'Unknown'}
        </span>
      </td>
      <td className="px-16 py-2">
        <span>{email || 'Unknown'}</span>
      </td>
      <td className="px-16 py-2">
        <span>{salary || 'Unknown'}</span>
      </td>
      <td className="px-16 py-2">
        <span className="">{date || 'Unknown'}</span>
      </td>
      <td className="px-16 py-2 ">
        <button className="cursor">
          <span className="bg-green-500 text-white px-5 py-1 rounded-full">
            {status || 'Unknown'}
          </span>
        </button>
      </td>
      <td className="px-16 py-2">
        <div className="flex justify-between items-center gap-10 flex-row">
          <button className="cursor">
            <BiEdit className="text-blue-500" size={23} />
          </button>
          <button className="cursor">
            <BiTrashAlt className="text-red-500" size={23} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
