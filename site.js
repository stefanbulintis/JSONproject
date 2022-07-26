// // /*let persoana = {
// //     nume: "Petre",
// //     varsta: 26,
// //     adresa:{
// //         oras: "Cluj",
// //         strada: "1 Dec. 1918",
// //     },
// //     salut: function(){
// //         console.log(`salut. ma numesc ${this.nume} si am ${this.varsta} ani`)
// //     }
// // }

// // console.log(persoana);

// // let json = JSON.stringify(persoana);
// // console.log(json);

// // let p = JSON.parse(json);
// // console.log(p);*/

// // /*var cerere = new XMLHttpRequest();
// // cerere.onreadystatechange = function () {
// //     if (this.readyState == 4 && this.status == 200) {
// //         let arr = JSON.parse(cerere.responseText);
// //         let html = ``;
// //         for (let i = 0; i < arr.length; i++) {
// //             html += `<li>${arr[i].nume}</li>`;
// //         }
// //         let ul = document.getElementById('lista');
// //         ul.innerHTML = html;
// //     }
// // };
// // cerere.open("GET", "persoane.json", true);
// // cerere.send();*/

// // //CALLBACKS
// // /*function log() {
// //     console.log('Task-ul este gata!');
// // }

// // function task(callback) {
// //     for (let i = 0; i < 10; i++) {
// //         console.log(i);
// //     }
// //     callback();
// // }
// // task(log);*/

// // /*let arr = [-1, 2, 3, 4, 5];
// // function numerePare(arr) {
// //     let res = [];
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] % 2 == 0) {
// //             res.push(arr[i]);
// //         }
// //     }
// //     return res;
// // }

// // function numereImpare(arr) {
// //     let res = [];
// //     for (let i = 0; i < arr.length; i++) {
// //         if (Math.abs(arr[i] % 2) == 1) {
// //             res.push(arr[i]);
// //         }
// //     }
// //     return resImpare;
// // }

// // function filtreaza(arr, callback) {
// //     let res = [];
// //     for (let i = 0; i < arr.length; i++) {
// //         if (callback(arr[i])) {
// //             res.push(arr[i]);
// //         }
// //     }
// //     return res;
// // }
// // function pare(nr) {
// //     return nr % 2 == 0;
// // }
// // let res = filtreaza(arr, pare);
// // console.log(res);*/

// // /*let arr = [-1, 2, 3, 4, 5];

// // function contineNumerePare(arr) {
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] < 0) {
// //             return true;
// //         }
// //     }
// //     return false;
// // }

// // function oricare(arr, callback) {
// //     for (let i = 0; i < arr.length; i++) {
// //         if(callback(arr[i])) {
// //             return true;
// //         }
// //     }
// //     return false;
// // }

// // //function numereMici(n) {
// //   //  if (n < -1) {
// //     //    return true;
// //     //}
// //     /return false;
// // //}
// // let res = oricare(arr, (n) => n < -1);
// // console.log(res);*/



// // //Programare sincrona/asincrona
// // /*function task1() {
// //     let date = new Date();
// //     while((new Date() - date) <= 3000) {

// //     }
// //     console.log('task1 gata');
// // }

// // function task2() {
// //     console.log('task2 gata');
// // }

// // console.log(1);
// // console.log(2);
// // setTimeout(() => {
// //     console.log('task1 gata');
// // }, 3000);
// // console.log(3);
// // console.log(4);
// // task2();*/


// // //1. XMLHttpRequest cu PROMISE
// // // const getPosts = function (id) {
// // //     let res = new Promise(function (resolve, reject) {
// // //         const request = new XMLHttpRequest();
// // //         request.addEventListener('load', (e) => {
// // //             if (request.status == 200) {
// // //                 resolve(JSON.parse(request.responseText));
// // //             } else {
// // //                 reject(`Error ${request.status}`);
// // //             }
// // //         });
// // //         request.open('GET', `https://jsonplaceholder.typicode.com/users/${id}/posts`);
// // //         request.send();
// // //     });
// // //     return res;
// // // };

// // // let res = Promise.all([getPosts(1), getPosts(2)]).then(arr => {
// // //     console.log(...arr);
// // //     return getPosts(3);
// // // }).then(posts => {
// // //     console.log(posts);
// // // });


// // /*getPosts(1).then((posts) => {
// //     console.log("Promisiunea 1: ", posts);
// //     return getPosts(1);
// // }).then(posts => {
// //     console.log("Promisiunea 2: ", posts);
// //     return getPosts(2);
// // }).then(posts => {
// //     console.log("Promisiunea 3: ", posts);
// //     return getPosts(3);
// // }).catch((err) => {
// //     console.log(err);
// // })*/
// // /*
// // getPosts(1, (err, res) => {
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log(res);

// //         getPosts(2, (e, r) => {
// //             console.log(r);

// //             getPosts(3, (e, r) => {
// //                 console.log(r);
// //             })
// //         })
// //     }
// // });*/

// // /*getPosts(1, (err, res) => {
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log(res);
// //     }
// // });

// // getPosts(2, (e, r) => {
// //     console.log(r);
// // });

// // getPosts(3, (e, r) => {
// //     console.log(r);
// // });*/

// // //PROMISIUNI
// // /*let a = 7;
// // let p = new Promise(function(resolve, reject) {
// //     if (a < 5){
// //         resolve("am apelat resolve");
// //     }else {
// //         reject("am apelat reject");
// //     }
// // });

// // p.then((res) => {
// //     console.log(`Promisiunea este indeplinita: ${res}`);
// // },(err) => {
// //     console.log(`Promisiunea este incalcata: ${err}`);
// // });*/


// // // const getPosts = function (id) {
// // //     let res = new Promise(function (resolve, reject) {
// // //         const request = new XMLHttpRequest();
// // //         request.addEventListener('load', (e) => {
// // //             if (request.status == 200) {
// // //                 resolve(JSON.parse(request.responseText));
// // //             } else {
// // //                 reject(`Error ${request.status}`);
// // //             }
// // //         });
// // //         request.open('GET', `https://jsonplaceholder.typicode.com/users/${id}/posts`);
// // //         request.send();
// // //     });
// // //     return res;
// // // };


// // //2. fetch API
// // fetch(`https://jsonplaceholder.typicode.com/users/2/postss`).then(res => {
// //     if (res.ok){
// //         return res.json();
// //     }else {
// //         throw new Error("Eroare");
// //     }
// // }).then(posts => {
// //     console.log(posts);
// // }).catch(err => {
// //     console.log(err);
// // });

// // //3. libraria externa(AXIOS)
// // //4. JQUERY


// //async & await
// async function getResult(num) {
//     return `rezultat ${num}`;
// }

// async function getAllResults() {
//     console.log("aduna rezultate");

//     let res = getResult(1);
//     let res2 = getResult(2);

//     let arr = await Promise.all([res, res2]);
//     console.log(arr);
// }

// getAllResults();


//GESTIONAREA ERORILOR
// const btn = document.getElementById('btn');
// btn.addEventListener('click', (e) => {
//     const culori = ['red', 'orange', 'green', 'purple', 'blue'];
//     const txt = document.getElementById('txtNume');

//     //1.Schimba culoarea
//     let nr = random(0, culori.length);
//     try {
//         txt.style.color = culori[nr];
//         console.log('Am setat culoarea');
//     } catch (e) {
//         console.log(e.name);
//         console.log(e.message);
//     } finally {
//         console.log('Finally se executa tot timpul');
//     }

//     //2.Afiseaza alerta
//     alert(`Culoarea este ${culori[nr]}`);
// });

// function random(min, max) {
//     return Math.floor(min + Math.random() * (max - min));
// }


//MODULE
import Cont, { afiseazaCont } from './cont.js';
import { Patrat, afiseaza as afiseazaPatrat } from './patrat.js';

let c = new Cont('Dan', 125);
afiseazaCont(c);

let p = new Patrat(5);
afiseazaPatrat(p);