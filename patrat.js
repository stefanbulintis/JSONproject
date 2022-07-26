class Patrat {
    constructor(latura) {
        this.latura = latura;
    }
}
function afiseaza(patrat) {
    console.log(`Acesta este un patrat cu latura de ${patrat.latura} cm`);
}

export { Patrat, afiseaza };