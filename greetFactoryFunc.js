function greetingsFunction(){
    let name = '';

    function setName(theName){
        name = theName;
    }

    function getName(){
        return name;
    }
    return{
        setName,
        getName,
    }
}