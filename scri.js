class espada{
    constructor(tipo,dama){
        this.tipo=tipo
        this.dama=dama
    }

    get tip(){
        return this.tipo
    }

    set tip(tipe){
        this.tipo = tipe
    }
    
    get damage(){
        return this.dama
    }

    set damage(Damage){
        this.dama = Damage
    }

    vida(){

    }

    pershin(){

    }

    critico (){
        const cri = this.dama * 0.10 
        return cri
    }
}

class dai extends espada{
    constructor(tipo,dama,diamante){
        super(tipo,dama,diamante)
        this.diamante=diamante
    }
}

class orr extends espada{
    constructor(tipo,dama,oro){
        super(tipo,dama,oro)
        this.oro=oro
    }
}


document.getElementById('attackButton').addEventListener('click', function() {
    document.querySelector('.sword').style.transform = 'rotate(-45deg)';

document.querySelector(".zombie").style.transform = 'rotate(100deg)';


    setTimeout(function() {
      document.querySelector('.sword').style.transform = 'rotate(0deg)';
    }, 100);
  });

let t = espada
let d = -45
let di = diaman  
const daimon = new dai(l,d,di)
