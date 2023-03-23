import { BiCheck } from 'react-icons/bi';

const Error = ({ message }) => {
  return (
    <div className="success container mx-auto">
      <div className="flex justify-center mx-auto border border-red-300 bg-red-500 w-3/6 text-gray-900 text-md my-4 py-2 bg-opacity-5">
        {message} <BiCheck className="text-red-500" size={25} />
      </div>
    </div>
  );
};

export default Error;
