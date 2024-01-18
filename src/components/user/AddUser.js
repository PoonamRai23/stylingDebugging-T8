import React,{useState} from 'react';
import React,{useState,useEffect} from 'react';
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
const AddUser=(props)=>{
    const [enteredUsername,setEnteredUsername]=useState('')
    const [enteredAge,setEnteredAge]=useState('')
    const [enteredCollegeName,setEnteredCollegeName]=useState('')
    const [error, setError] = useState();
    const [isFormValid, setIsFormValid] = useState(true);

    useEffect(() => {      
      setIsFormValid(enteredCollegeName.trim().length !== 0);
    }, [enteredCollegeName]);

    const addUserHandle=(event)=>{    
    event.preventDefault();
    if(enteredUsername.trim().length===0||enteredAge.trim().length===0||enteredCollegeName.trim().length===0){
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).',
          });
        return
    }
    if(+enteredAge<1){
        setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (> 0).',
          });
        return 
    }
    props.onAddUser(enteredUsername,enteredAge,enteredCollegeName)
    setEnteredAge('')
    setEnteredUsername('')
    setEnteredCollegeName('')
}
//     const addUserHandler=(event)=>{    
//     event.preventDefault();
//     if(enteredUsername.trim().length===0||enteredAge.trim().length===0||enteredCollegeName.trim().length===0){
//         setError({
//             title: 'Invalid input',
//             message: 'Please enter a valid name and age (non-empty values).',
//           });
//         return
//     }
//     if(+enteredAge<1){
//         setError({
//             title: 'Invalid age',
//             message: 'Please enter a valid age (> 0).',
//           });
//         return 
//     }
//     props.onAddUser(enteredUsername,enteredAge,enteredCollegeName)
//     setEnteredAge('')
//     setEnteredUsername('')
//     setEnteredCollegeName('')
// }
const addUserHandler = (event) => {
  event.preventDefault();
  if (
    enteredUsername.trim().length === 0 ||
    enteredAge.trim().length === 0 ||
    !isFormValid ||
    +enteredAge < 1
  ) {
    setError({
      title: 'Invalid input',
      message: 'Please enter valid values for all fields.',
    });
    return;
  }

  props.onAddUser(enteredUsername, enteredAge, enteredCollegeName);
  setEnteredAge('');
  setEnteredUsername('');
  setEnteredCollegeName('');
  setError(null);  // Clearing the error state
};
const usernameChangeHandler=(event)=>{
setEnteredUsername(event.target.value)
}
const collegeChangeHandler=(event)=>{
  setEnteredCollegeName(event.target.value)
  }
const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value)
    }
    const errorHandler = () => {
        setError(null);
      };
return(
    <Wrapper>
    {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler}/>
        <label htmlFor='age'>Age(years)</label>
        <input id='age' type='number'value={enteredAge} onChange={ageChangeHandler}/>
        <label htmlFor='college'>College Name</label>
        <input id='college' type='text' value={enteredCollegeName} onChange={collegeChangeHandler}/>
        
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
    </Wrapper>
)}
export default AddUser