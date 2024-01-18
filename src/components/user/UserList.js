import React from 'react'
import Card from '../UI/Card'
import classes from './UserList.module.css'
const UserList=props=>{
    return (
    <Card className={classes.users}>
    <ul>        
        {props.users.map((user)=> (
        <li key={user.id}>{user.name}({user.age} years old)</li>   
        <li key={user.id}>Username:-{user.name} , User Age:- ({user.age} years old), User College:- {user.college}</li>   
        ))}       
    </ul>
    </Card>
    )
}
export default UserList;