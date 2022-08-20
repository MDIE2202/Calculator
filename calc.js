function calculate(fn) {
    return new Function('return ' + fn)();
  }

clean = () =>{
    const disp = document.querySelector('.display');
    disp.innerHTML = ''
}

back = () =>{
    const disp = document.querySelector('.display');
    disp.innerHTML = disp.innerHTML.slice(0, -1)
}

button = (sign) => {
    const disp = document.querySelector('.display');
    allowed = ['1','2','3','4','5','6','7','8','9','0','+','-','/','*','(',')']
    if (allowed.includes(sign)){
        disp.innerHTML += '' + sign
    }else if(sign == '=' || sign == 'Enter'){
        disp.innerHTML = calculate(disp.innerHTML.replaceAll(/(\r\n|\n|\r)/gm,'').replaceAll(' ',''))
        console.log(disp.innerHTML)
    }else if(sign == 'Backspace'){
        back()
    }
    else{
        disp.innerHTML += ''
    }
}

const btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('click', function(){ button(this.innerHTML)}));

const clear = document.querySelector('.clear');
clear.addEventListener('click', function(){clean()})

const back_button = document.querySelector('.back');
back_button.addEventListener('click', function(){back()})

document.addEventListener('keydown', (event)=>{button(event.key)});