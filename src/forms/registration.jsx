import {useState} from 'react';
import validation from './validation';

const Reg = ()=>{
   
    //creating schema to stored value....         
const [userRegistered , setUser] = useState({
    fn : '',
    ln : '',
    state : '',
    city : '',
    dob : '',
    em : '',
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
        <h1>You need to registered yourself first...💬</h1>
        <from className='form-background' action='#' onSubmit={handleSubmit}>
        <table border='1' width='70%' className='table-style'>
        <h4 className='header'>📖 Registretion form </h4>

            <input 
            className='form-control' 
            onChange={handleInput} 
            autoComplete='off' type='text' 
            name='fn' 
            value = {userRegistered.fn}
            placeholder="Enter First Name"/><br/>

            <input 
            className='form-control' 
            onChange={handleInput} 
            autoComplete='off' 
            type='text' 
            name='ln' 
            value = {userRegistered.ln}
            placeholder="Enter Last Name"/><br/>
            <select className='form-control' onChange={handleInput} name='state'  value = {userRegistered.state}>
                <option value=''>Select State</option>
                <option value='Gujarat'>Gujarat</option>
                <option value='Maharastra'>Maharastra</option>
                <option value='Rajasthan'>Rajastan</option>
                <option value='Punjab'>Punjab</option>
                <option value='UP'>UP</option>
            </select><br/>
            <select className='form-control' onChange={handleInput} name='city'  value = {userRegistered.city}>
                <option value=''>Select City</option>
                <option value='Ahmedabad'>Ahmedabad</option>
                <option value='Vadodara'>Vadodara</option>
                <option value='Anand'>Anand</option>
            </select><br/>
            <input className='form-control' onChange={handleInput}  type='date' name='dob'  value = {userRegistered.dob}/><br/>
            <input className='form-control' onChange={handleInput} autoComplete='off' type='email' name='em'  value = {userRegistered.em} placeholder='Enter your Mail ID'/><br/>
            <input className='form-control' onChange={handleInput} autoComplete='off' type='text' name='no'  value = {userRegistered.no} placeholder='Enter your contanct no'/><br/>
            <input className='form-control' onChange={handleInput} autoComplete='off' type='password' name='password'  value = {userRegistered.password} placeholder='Enter your Password'/><br/>
            <input className='form-control form-button' type='submit' value='Register'/>
            </table>
            <a href='/login'>Already registered login from here...</a>
        </from>
        
       
    
        </div>
    )
}

export default Reg;