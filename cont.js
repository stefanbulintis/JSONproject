class Cont {
    constructor(nume, suma) {
        this.nume = nume;
        this.suma = suma;
    }
    depunde(val) {
        this.suma += val;
    }
    extrage(val) {
        if(this.suma - val < 0)
            this.suma = 0;
        else  
            this.suma -= val;
    }
}

function afiseaza(cont) {
    console.log(`Contul lui ${cont.nume} are ${cont.suma} lei`);
}

function dubleazaSuma(cont) {
    cont.depune(cont.suma);
}

export default Cont;
export { afiseaza as afiseazaCont };