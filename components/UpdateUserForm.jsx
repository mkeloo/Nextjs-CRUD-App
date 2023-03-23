import { useReducer } from 'react';
import { BiBrush } from 'react-icons/bi';
import Success from './Success';
import Error from './Error';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const UpdateUserForm = () => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(formData).length == 0) {
      console.log('Please fill the form');
    }
    console.log(formData);
  };

  if (Object.keys(formData).length > 0) {
    return <Success message={'Data Added Successfully'} />;
  }

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          name="firstname"
          placeholder="First Name"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          name="lastname"
          placeholder="Last Name"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <input
          type="email"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          name="email"
          placeholder="Email"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          name="salary"
          placeholder="Salary"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          className="border px-5 py-3 focus:outline-none rounded-md"
          name="date"
          placeholder="Date"
          onChange={setFormData}
        />
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            value="active"
            id="radioDefault1"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            name="status"
            onChange={setFormData}
          />
          <label
            htmlFor="radioDefault1"
            className="inline-block text-gray-800 "
          >
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            value="inactive"
            id="radioDefault2"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            name="status"
            onChange={setFormData}
          />
          <label
            htmlFor="radioDefault2"
            className="inline-block text-gray-800 "
          >
            Inactive
          </label>
        </div>
      </div>

      <button className="flex justify-center text-md w-2/6 bg-yellow-400 text-blue-500  px-4 py-2 border rounded-md hover:bg-blue-600 hover:border-yellow-500 hover:text-yellow-300 transition duration-300">
        Update{' '}
        <span className="px-1">
          <BiBrush size={24} />
        </span>
      </button>
    </form>
  );
};

export default UpdateUserForm;
