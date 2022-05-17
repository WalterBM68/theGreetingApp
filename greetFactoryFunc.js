function greetingsFunction(){
    let name = '';

    function setName(theName){
        name = theName;
    }

    function getName(){
        return name;
    }

    function checkingTheName(){
        if(getName() === '')
            return 'Name is required!';
    }

    function checkingTheNumber(){
        if(getName() == Number(getName()))
            return 'Enter the name not the number';
    }

    function greetingUserForSecondTime(){
        if(getName() === getName())
            return "This name has been greeted before"
    }

    function selectingTheLanguage(){
        return 'Please select the language';
    }
    
    const languages = () => {
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
        languages,
        checkingTheName,
        checkingTheNumber,
        greetingUserForSecondTime,
        selectingTheLanguage
    }
}