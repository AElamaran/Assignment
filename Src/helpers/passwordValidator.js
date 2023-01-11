export function passwordValidator(password){
    if(password.length<8)return'password atleast 8 character long'
    if(!password)return'password cannot be empty'
    return''
}