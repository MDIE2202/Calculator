function calculate(fn) {
    return new Function('return ' + fn)();
  }

clean = () =>{
    const disp = document.querySelector('.display');
    disp.innerHTML = ''
}

back = () =>{
    const disp = document.querySelector('.display');
    disp.innerHTML = ''
}

button = (sign) => {
    const disp = document.querySelector('.display');
    if (sign == '+'){
        disp.innerHTML += '' + sign
    }else if( sign == '-'){
        disp.innerHTML += '' + sign
    }else if(sign == '*'){
        disp.innerHTML += '' + sign
    }else if(sign == '/'){
        disp.innerHTML += '' + sign
    }else if(sign == '='){
        disp.innerHTML = calculate(disp.innerHTML.replaceAll(/(\r\n|\n|\r)/gm,'').replaceAll(' ',''))
        console.log(disp.innerHTML)
    }
    else{
        disp.innerHTML += '' + sign
    }
}

const btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('click', function(){ button(this.innerHTML)}));

const clear = document.querySelector('.clear');
clear.addEventListener('click', function(){clean()})

const back = document.querySelector('.back');
clear.addEventListener('click', function(){back()})