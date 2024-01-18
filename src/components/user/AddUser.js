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

    const addUserHandler=(event)=>{    
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
setEnteredUsername(event.target.value)}
export default addUserHandler;
