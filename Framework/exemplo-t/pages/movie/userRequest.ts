import { isEmail , checkMinMaxLength } from "./check";

export function userRequest(_name:any , _email:any , _username:any , confirmPassword:any){
    
    if(checkMinMaxLength(_name , 3 , 25) == false){
        return{Response: false , message: 'naome invalido'};
    }

    if (isEmail(_email)==false){
        return{Response: false, message: 'email invalido'};

    }

    if (checkMinMaxLength(_username , 6 , 15)== false){
        return{Response: false , message:'email invalido'}
    }

    if (checkMinMaxLength(_password, 8 , 32)){
        return(Response: false , massage: 'senha invalida')
    }

    if(checkMinMaxLength(_confirmpassword , 8, 32)){
        return(Response: false , message: 'segunda senha invalida')

    }

    return{Response: true};
    
}