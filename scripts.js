(function virtualKeyboard() {

    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    const keyboardContainer = document.createElement('div');
    keyboardContainer.classList.add('keyboardContainer');

    document.body.appendChild(textarea);
    textarea.focus();
    document.body.appendChild(keyboardContainer);

    


    const keyboardKeysCodes = [192,49,50,51,52,53,54,55,56,57,48,189,187,8,9,81,
        87,69,82,84,89,85,73,79,80,219,221,220,46,20,65,83,68,70,71,72,74,75,76,186,222,13,
        16,90,88,67,86,66,78,77,188,190,191,38,16,17,92,18,32,18,17,37,40,39];
    
    const enLangLayout = [
        '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 
        'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
        'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
        'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '⇑', 'Shift',
        'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '⇐', '⇓', '⇒'
    ];

    const enLangShiftLayout = [
        '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 
        'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
        'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
        'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '⇑', 'Shift',
        'Ctrl', 'Win', 'AltLeft', 'Space', 'Alt', 'Ctrl', '⇐', '⇓', '⇒'
    ];

    const enLangCapsLayout = [
        '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 
        'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
        'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
        'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '⇑', 'Shift',
        'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '⇐', '⇓', '⇒'
    ];


    const ruLangLayout = [
        'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 
        'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
        'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter',
        'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '⇑', 'Shift',
        'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '⇐', '⇓', '⇒'
    ];

    const ruLangShiftLayout = [
        'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 
        'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
        'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'Enter',
        'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '⇑', 'Shift',
        'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '⇐', '⇓', '⇒'
    ];

    const ruLangCapsLayout = [
        'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 
        'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
        'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'Enter',
        'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '⇑', 'Shift',
        'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '⇐', '⇓', '⇒'
    ];

    

    if (localStorage.getItem('language') === undefined) {
        localStorage.setItem('language', 'en');
    }

    let language = localStorage.getItem('language');
  

    let currentKeysLayout = (language) ? enLangLayout : ruLangLayout;

    keyboardKeysCodes.map((item, idx) => {
        let keyBlock = document.createElement('div');
        keyBlock.classList.add('key');
        keyBlock.setAttribute('code', item);
        keyBlock.textContent = currentKeysLayout[idx];
        keyboardContainer.appendChild(keyBlock);
    });

   let paragraph = document.createElement('p');
   paragraph.classList.add('notice');
   paragraph.textContent = 'Change language - Shift + Alt';
   keyboardContainer.appendChild(paragraph);

    let keys = document.querySelectorAll('.key');
    keys.forEach((key) => {
        switch (key.textContent) {
            case 'CapsLock':
                key.classList.add('capslock');
            break;
            case 'Tab':
                key.classList.add('tab');
            break;
            case 'Shift':
                key.classList.add('shift');
            break;
            case 'Enter':
                key.classList.add('enter');
            break;
            case 'Space':
                key.classList.add('space');
            break;
            case 'Backspace':
                key.classList.add('backspace');
            break;
            case 'Ctrl':
                key.classList.add('ctrl');
            break;
            case 'Del':
                key.classList.add('del');
            break;
            default:
                key.textContent += '';
            break;
        }
    })
    
    function languageToggle(currentKeysLayout) {
        if (localStorage.getItem('language') === 'en') {
            localStorage.setItem('language', 'ru');
            currentKeysLayout = ruLangLayout;
            console.log(localStorage.getItem('language'));

        } else if (localStorage.getItem('language') === 'ru') {
            localStorage.setItem('language', 'en');
            currentKeysLayout = enLangLayout;
            console.log(localStorage.getItem('language'));
        }
        
        let currentKeys = [...document.querySelectorAll('.key')];
        currentKeys.map((item, idx) => {
            item.textContent = currentKeysLayout[idx];
        });
    }


    let caps = false;
    let shift = false;

    function capsToggle(lang, currentKeysLayout) {
        
        if (caps === false) {
            caps = true;
            currentKeysLayout = (lang) ? enLangCapsLayout : ruLangCapsLayout;
        } else if (caps === true) {
            caps = false;
            currentKeysLayout = (lang) ? enLangLayout : ruLangLayout;
        }
        let currentKeys = [...document.querySelectorAll('.key')];
        currentKeys.map((item, idx) => {
            item.textContent = currentKeysLayout[idx];
        });
    }

    function shiftToggle(lang, currentKeysLayout) {

        if (shift === false) {
            shift = true;
            currentKeysLayout = (lang === 'en') ? enLangShiftLayout : ruLangShiftLayout;
        } else if (shift === true) {
            shift = false;
            currentKeysLayout = (lang === 'en') ? enLangLayout : ruLangLayout;
            
        }

        let currentKeys = [...document.querySelectorAll('.key')];
        currentKeys.map((item, idx) => {
            item.textContent = currentKeysLayout[idx];
        });
    }


    document.addEventListener('keydown', (event) => {
        event.preventDefault();
        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') shiftToggle(localStorage.getItem('language'), currentKeysLayout);
        let keysCollection = document.querySelectorAll(`div[code="${event.keyCode}"]`);
        if (keysCollection.length < 2) {
            let keyItem = keysCollection[0];
            keyItem.classList.add('key-active');
            switch (keyItem.textContent) {
                case 'Enter':
                    textarea.value += '\n';
                break;
                case 'Space':
                    textarea.value += ' ';
                break;
                case 'Tab':
                    textarea.value += '  ';
                break;
                case 'Backspace':
                    textarea.value = textarea.value.slice(0,-1);
                break;
                case 'Del':
                    textarea.value = textarea.value.slice(0,-1);
                break;
                case 'Alt':
                    textarea.value += '';
                break;
                case 'Ctrl':
                    textarea.value += '';
                break;
                case 'Shift':
                    textarea.value += '';
                break;
                case 'CapsLock':
                    capsToggle(localStorage.getItem('language'), currentKeysLayout);
                break;
                default:
                    textarea.value += keyItem.textContent;
                break;
            } 
        } else {
            switch(event.code) {
                case 'ShiftLeft':
                    keysCollection[0].classList.add('key-active');
                    
                break;
                case 'ShiftRight':
                    keysCollection[1].classList.add('key-active');
                break;
                case 'AltLeft':
                    keysCollection[0].classList.add('key-active');
                break;
                case 'AltRight':
                    keysCollection[1].classList.add('key-active');
                break;
                case 'ControlLeft':
                    keysCollection[0].classList.add('key-active');
                break;
                case 'ControlRight':
                    keysCollection[1].classList.add('key-active');
                break;
                case 'MetaLeft':
                    keysCollection[0].classList.add('key-active');
                break;
                default:
                    keysCollection[0].classList.add('key-active');
                break;
            }
        }

        if (event.shiftKey && event.altKey) languageToggle(localStorage.getItem('language'), currentKeysLayout);
    });

    

    
    document.addEventListener('keyup', (event) => {
        let activeKeys = document.querySelectorAll(`div[code="${event.keyCode}"]`);
        activeKeys.forEach((item) => item.classList.remove('key-active'));
    });

    keyboardContainer.addEventListener('mousedown', (event) => {
        let target = event.target;
        if (target.getAttribute('code') === 16) shiftToggle(localStorage.getItem('language'), currentKeysLayout);
        if (target.classList.contains('key')) {

            target.classList.add('key-active');
            switch (target.textContent) {
                case 'Enter':
                    textarea.value += '\n';
                break;
                case 'Space':
                    textarea.value += ' ';
                break;
                case 'Tab':
                    textarea.value += '  ';
                break;
                case 'Alt':
                    textarea.value += '';
                break;
                case 'Shift':
                    textarea.value += '';
                break;
                case 'Backspace':
                    textarea.value = textarea.value.slice(0,-1);
                break;
                case 'Del':
                    textarea.value = textarea.value.slice(0,-1);
                break;
                case 'CapsLock':
                    capsToggle(localStorage.getItem('language'), currentKeysLayout);
                break;
                default:
                    textarea.value += target.textContent;
                break;
            } 
            
        }
    }); 

    keyboardContainer.addEventListener('mouseup', (event) => {
        let target = event.target;
        if (target.classList.contains('key-active')) {
            target.classList.remove('key-active');
        }
    });

    console.log(localStorage.getItem('language'));

    window.addEventListener('beforeunload', () => {
        localStorage.setItem('language', localStorage.getItem('language'));
    })

    





})();