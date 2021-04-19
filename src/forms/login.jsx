



const Login = ()=>{
    return(
        <div className='App-header'>
        
        <from className='form-background' >
        <table border='1' width='50%' className='table-style'>
        <h4 className='header'>👱‍♂️ Login from here...! </h4>
            <input className='form-control'  autoComplete='off' type='email' name='em' placeholder='Enter mobile no'/><br/>
            <input className='form-control' autoComplete='off' type='password' name='password' placeholder='Password'/><br/>
            <button className='form-control form-button' type='submit' value='Registered'>Login</button>
            </table>
        </from>
        </div>
    )
}

export default Login;