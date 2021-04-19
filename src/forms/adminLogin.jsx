import {useState} from 'react';
import validation from './validation';


const AdminLogin = ()=>{
    const [userRegistered , setUser] = useState({
        no : '',
        password : '',
    });
    
    
    const [record , setRecord ] = useState({}) //Use to store users...
    
    // handling user inputs and Updates....
    const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value);
    setUser({ ...userRegistered, [name] :value}); //update value from console
     validation(name,value);
    }
    
    //stored data
    const handleSubmit = (e)=>{
    e.preventDefault();
    console.log('this is handle submit');
    const newRecord = { ...userRegistered , id : new Date().getTime().toString()}
    setRecord([ ...record , newRecord]); //stored users + add new users (array)
    console.log(record);
    alert (record);
    }
    
    return(
        <div className='App-header'>
        
        <from className='form-background' onSubmit = {handleSubmit}>
        <table border='1' width='50%' className='table-style'>
        <h4 className='header'> 🤵 Administrator Login</h4>
            <input className='form-control'  onChange={handleInput}  value = {userRegistered.no} autoComplete='off' type='email' name='em' placeholder='Username'/><br/>
            <input className='form-control'  onChange={handleInput}  value = {userRegistered.password} autoComplete='off' type='password' name='password' placeholder='Password'/><br/>
            <button className='form-control form-button' type='submit' value='Registered'>Login</button>
            </table>
        </from>
        </div>
    )
}

export default AdminLogin;