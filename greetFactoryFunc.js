function greetingsFunction(){
    let name = '';

    function setName(theName){
        name = theName;
    }

    function getName(){
        return name;
    }
    
    const language = () => {
        return {
            Tshivenda: `Ndi matsheloni ${getName()}`,
            English: `Hello ${getName()}`,
            IsiZulu: `Sawubona ${getName()}`,
            Sepedi: `Thobela ${getName()}`,
            SeSotho: `Dumelang ${getName()}`,
        }
    };

    return{
        setName,
        getName,
        language,
        theName
    }
}