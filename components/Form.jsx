import AddUserForm from './AddUserForm';
import UpdateUserForm from './UpdateUserForm';

const Form = () => {
  const isAddingUser = true;

  return (
    <div className="container mx-auto py-5">
      {isAddingUser ? <AddUserForm /> : <UpdateUserForm />}
    </div>
  );
};

export default Form;
