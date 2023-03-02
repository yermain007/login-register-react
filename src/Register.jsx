import React, {useState} from "react";
export const Register = (props) => {
const [email,setEmail]=useState('');
const [pass, setPass]= useState('');
const [name, setName]= useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
}



    return(
        <div className="container">
        <form className="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="name">full name</label> 
            <input value={name} onChange={(e)=> setName(e.target.value)}   type="name" placeholder="name" id="name" name="name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)}   type="email" placeholder="email" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password" />
           
        </form>
        <button onClick={() =>props.onFormSwitch('login')}>already have an account? login here</button>
        </div>
    )
}