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
            return "This name has been greeted"
    }

    function selectingTheLanguage(){
        return 'Please select the language';
    }
    
    function messageAfterTheResetBtnClicked(){
        return 'You have deleted all the names';
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
        selectingTheLanguage,
        messageAfterTheResetBtnClicked
    }
}