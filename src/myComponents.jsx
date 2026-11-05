import { useState, Fragment } from 'react';

function CustomInput({ label, inputValue, onChange}){
  return (
    <div>
      <label>{label}</label>
      <input value = {inputValue} onChange = {onChange}></input>
    </div>
  )
}

function Person() {
  const [age, setAge] = useState(27);
  const [firstName, setFirstName] = useState('Joshua');
  const [lastName, setLastName] = useState("O'Brien");

  const fullName = `${firstName} ${lastName}`;

  const handleIncreaseAge = () => {
    setAge(age + 1);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  return (
    <div className='person'>
      <h1>{fullName}</h1>
      <h2>{age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      
      <CustomInput 
        label = "First name:"
        inputValue = {firstName}
        onChange = {handleFirstNameChange}
      />
      <CustomInput 
        label = "Last name:"
        inputValue = {lastName}
        onChange = {handleLastNameChange}
      />
    </div>
  );
}

export { Person }


