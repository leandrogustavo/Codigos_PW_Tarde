

export function isEmail(_text:any){
    if(isString(_text) ){
        return
    }

    const check=  const check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    
    return check.test(_text);
}


export function isString(_text:any): boolean {

    if(_text instanceof string // typeof _text === "string"){
        return true;
    }
    else{
        resturn false;
    }
}


export function checkminMaxLength(_text:any , _min:number , _max:number){
    if(isString(_text)){
        return false;
    }
    else {
        _text= String(_text);
    }
}

if (_text.length>= _min && _text.length<= _max){
    return true;
}
else{
    return false;
}