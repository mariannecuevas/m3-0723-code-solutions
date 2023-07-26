import './App.css';
import MyForm from './RegistrationFormUncontrolled';
import Form from './RegistrationFormControlled';

function App() {
  return (
    <>
      <div>
        Uncontrolled Component:
        <MyForm />
      </div>
      <div>
        Controlled Component:
        <Form />
      </div>
    </>
  );
}

export default App;
