//validation
const validation = (name , value )=>{
    var phone;
       /** Call the plugin */
            if(value === ''){
                alert (`Please enter value`);
            }
          if (name === 'fn'){
              if(value.match(/^[0-9\s]+$/)){
                alert (`Please enter only characters...`);
              } 
          }

          else if(name === 'ln'){
            if(value.match(/^[0-9\s]+$/)){
            alert ('Please enter only characters...');
            } 
        }

        else if(name === 'no'){
            if(value.match(/^[a-zA-Z\s]/)){
                alert ('Please enter valid mobile no...');
            } 
            else if(value.length > 10){
                alert (`Please enter valid mobile no...`)
            }
        }
        else if(name == 'password'){
            if(value === '9999999999' || value === 'admin'){
                alert (`Please enter valid password Admin...!`)
            }
        }
}

export default validation; 