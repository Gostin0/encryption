//------------------Числові проміжки для 2 Лаби-------------------
// масив псевдорамдомного розміщення символів

  let alfs = ["j","r","g","m","a","w","f","s","q","c","i","h","x","d","t","y","v","z","p","n","e","o","l","b","k","u"];
    
//------------------Числові проміжки для 3 Лаби-------------------
// масив ймовірності появи
// [початкове значення, кінцеве значення]

  let alf = [
//     a        b        c         d        e
    [0, 4],  [5, 8],  [9, 12], [13, 16],[17, 20],
//     f        g        h         i        j    
    [21, 24],[25, 28],[29, 32],[33, 36],[37, 40],
//     k        l        m         n        o    
    [41, 44],[45, 48],[49, 52],[53, 56],[57, 60],
//     p        q        r         s        t    
    [61, 64],[65, 68],[69, 72],[73, 76],[77, 80],
//      u        v        w        x        y    
    [81, 84],[85, 88],[89, 92],[93, 96],[97, 100],
//       z
    [101, 104]];
//----------------------------------------------------------------

//----------------------------ЛАБА№1------------------------------
function zakod() {	
  let outputbin=document.getElementById("kodbin");
  let outputbinz=document.getElementById("kodbinz");
  let outputzak=document.getElementById("kodzak");
  outputbin.value = "";
  outputbinz.value = "";
  outputzak.value = "";
  let zsuv = 2;
  let kod = document.getElementById('kod').value;
  for (i = 0; i < kod.length; i++) {
    let zm = (+kod[i].charCodeAt(0).toString(10) + zsuv);
    outputbin.value +=(kod[i].charCodeAt(0).toString(2) + " ");
    if (zm <= 122){
      outputbinz.value +=(zm.toString(2) + " ");
      outputzak.value +=(String.fromCharCode(zm));
    }
    else {
      outputbinz.value +=((zm-26).toString(2) + " ");
      outputzak.value +=(String.fromCharCode(zm-26));
    }
	}
}
//----------------------------ЛАБА№2------------------------------
function zakoduvaty2() {
  let ded;
  zakodslov.value = "";
  let inputsm = document.getElementById('slov').value;
  for (i = 0; i < inputsm.length; i++) {
  let ascii =  (inputsm[i].charCodeAt(0)) - 97;
  ded = zakodslov.value += alfs [ascii];  
  }
  (document.getElementById('zakodslovo')).value = ded.replace(/(\s*)$/g, '');
}
//-------------------------Розкодування----------------------------
function rozkoduvaty2() {
  rez.value = "";
  let mas;
   let masznach = document.getElementById('zakodslovo').value;
   for (i = 0; i < masznach.length; i++) {
     let zn = 1;
     for (si = 0; si < zn; si++) {
       if (masznach[i] == alfs[si]){
        rez.value +=(String.fromCharCode(si + 97));
      }
      else{zn = zn+1;}
    }
   }
}
//----------------------------ЛАБА№3------------------------------

//---------------------------Кодування----------------------------
function zakoduvaty() {
    zakodslov.value = "";
    let ded;
    let inputsm = document.getElementById('slov').value;
    for (i = 0; i < inputsm.length; i++) {
    let ascii =  (inputsm[i].charCodeAt(0)) - 97;
    let min = alf [ascii] [0]; // початкове значення появи символу і мінімальне значення для випадкового вибору
    let max = alf [ascii] [1]; // кінцеве значення появи символу і максимальне значення для випадкового вибору
    let ramreng = (Math.floor(Math.random() * (max - min + 1)) + min);
    ded = zakodslov.value +=ramreng + " ";
    }
    (document.getElementById('zakodslovo')).value = ded.replace(/(\s*)$/g, '');
  }
  //-------------------------Розкодування----------------------------
  function rozkoduvaty() {
    rez.value = "";
    let masznach = (document.getElementById('zakodslovo').value).split(' ');
    for (i = 0; i < masznach.length; i++) {
      let zn = 1;
      let mas = +masznach[i];
      for (si = 0; si < zn; si++) {
         let min = alf [si] [0];
         let max = alf [si] [1];
        if (mas >= min && mas <= max){
          rez.value +=(String.fromCharCode(si + 97));
        }
        else{zn = zn+1;}
      }
    }
  }
  
//----------------------------ЛАБА№4------------------------------
  
//-------Матриця з ключом ----------------------------------------
  
  let maskey = [['g',  'o',  'd', 'a', 'y'],
                ['b',  'c',  'e', 'f', 'h'],
                ['i',  'k',  'l', 'm', 'n'],
                ['p',  'q',  'r', 's', 't'],
                ['u',  'v',  'w', 'x', 'z']];
  
  function zakoduvaty4() {
  let inputsm = document.getElementById('slov').value;

//-------Зміні для роботи ---------------------------------------
  
  let ded;
  let inputsmh = ['0'];
  let inputsmc = ['0'];
  let zmich = 0;
  let flagh = 0;
  let flagc = 0;
  let kordpx = 0;
  let kordpy = 0;
  let korddx = 0;
  let korddy = 0;
  
  //-------Почерговий запуску функцій------------------------------

  zakodslov.value = "";
  for (i = 0; i < inputsm.length;  i++) {      
    inputsmh[i] = inputsm[i];
    if (inputsmh[i] == 'j'){inputsmh[i] = 'i'}} 

  bigram();
  para();
  search()
  
  //-------Робить парну кількість символів у рядку-----------------
  
  function para(){
    if (inputsmh.length%2 == 1){
      inputsmh[inputsmh.length] = 'q';
      if (inputsmh[inputsmh.length-2] == 'q'){inputsmh[inputsmh.length-1] = 'x';}
    }
  }   
  
  //-------Запобігає повтореню символів у біграмі------------------
  
  function bigram(){
    zmich = 0;
    for (i = 0; i < inputsmh.length;  i++) {
      inputsmc[i + zmich] = inputsmh[i];
      if(inputsmh[i] == inputsmh[i + 1] && i%2 == 0 && flagh == 0){
        inputsmc[i + zmich + 1] = 'x';
        zmich = zmich + 1;
        flagh = 1;
      }
        if (inputsmh.length-1 == i && flagh == 1){flagc = 0; bigramc();}
    }
  }
  
  function bigramc(){
    zmich = 0;
    for (i = 0; i < inputsmc.length;  i++) { 
      inputsmh[i + zmich] = inputsmc[i];
      if(inputsmc[i] == inputsmc[i + 1] && i%2 == 0 && flagc == 0){
        inputsmh[i + zmich + 1] = 'x';
        zmich = zmich + 1;
        flagc = 1;
      }
        if (inputsmc.length-1 == i && flagc == 1){flagh = 0; bigram();}
    }
  }
  
  //-------Пошук символів у матриці--------------------------------
  
  function search(){
    
    for (let i = 0; i < inputsmh.length;  i++) {
        for (x = 0; x <=4; x++) {
          for (y = 0; y <=4; y++) {
            if (inputsmh[i] == maskey[y][x]){
              if (i%2 == 0){kordpx = x; kordpy = y;}
              if (i%2 == 1){korddx = x; korddy = y; shifr();}
            }
          }
        }
    }
  }
  
  //-------Функція шифрування--------------------------------------
  
  function shifr(){
    if (kordpx == korddx){
      kordpy = kordpy + 1;
      korddy = korddy + 1;
      }
  
    if (kordpy == korddy){
      kordpx = kordpx + 1;
      korddx = korddx + 1;
    }
  
    if (kordpx > 4){kordpx = 0;}
    if (korddx > 4){korddx = 0;}
    if (kordpy > 4){kordpy = 0;}
    if (korddy > 4){korddy = 0;}
  
    if (kordpx != korddx && kordpy != korddy){
      let buf = 0;
      buf = kordpx;
      kordpx = korddx;
      korddx = buf;
    }
      ded = (zakodslov.value +=(maskey[kordpy][kordpx]+maskey[korddy][korddx]));
      (document.getElementById('zakodslovo')).value = ded;
  }
}

//-------Функція розшифрування-----------------------------------
function rozkoduvaty4() {
  
  rez.value = "";
  
  let masznach = document.getElementById('zakodslovo').value;
  
  let maszn = [];
  let kordpx = 0;
  let kordpy = 0;
  let korddx = 0;
  let korddy = 0;
  
  search();
  pravka();

  function search(){
    for (let i = 0; i < masznach.length;  i++) {
        for (x = 0; x <=4; x++) {
          for (y = 0; y <=4; y++) {
            if (masznach[i] == maskey[y][x]){
              if (i%2 == 0){kordpx = x; kordpy = y;}
              if (i%2 == 1){korddx = x; korddy = y; rozshifr();}
            }
          }
        }
    }
  }
  
    function rozshifr(){
  
      if (kordpx == korddx){
        kordpy = kordpy - 1;
        korddy = korddy - 1;
        }
    
      if (kordpy == korddy){
        kordpx = kordpx - 1;
        korddx = korddx - 1;
      }
    
      if (kordpx < 0){kordpx = 4;}
      if (korddx < 0){korddx = 4;}
      if (kordpy < 0){kordpy = 4;}
      if (korddy < 0){korddy = 4;}
    
      if (kordpx != korddx && kordpy != korddy){
        let buf = 0;
        buf = korddx;
        korddx = kordpx;
        kordpx = buf;
      }
        maszn = maszn + (maskey[kordpy][kordpx]+maskey[korddy][korddx]); 
    }
  
  function pravka(){
    for (i = 0; i < maszn.length;  i++) {
      if(maszn[i] == maszn[i + 2] && maszn[i + 1] == 'x' ){
        maszn = maszn.replace('x', '')
      } 
    }
   }
  rez.value += maszn;
}

//----------------------------ЛАБА№5------------------------------
//----------------------Функція шифрування------------------------

function zakoduvaty5(){
  zakodslov.value = "";
  let key =  document.getElementById('key').value;
  let inputsm =  document.getElementById('slov').value;
  let maszn = ['0'];
  let k = 0;
  let ded;

  for(i = 0; i < inputsm.length; i++){
    if (k == key.length) {k = 0;}
    maszn[i] = ((key[k].charCodeAt(0))-97);
    k = k + 1;
    maszn[i] = (((inputsm[i].charCodeAt(0))-97) + maszn[i]);
    if (maszn[i] > 26) {
      maszn[i] = maszn[i] - 26;
      }
    ded = (zakodslov.value += (maszn[i] + ' '));    
  }
  (document.getElementById('zakodslovo')).value = ded.replace(/(\s*)$/g, '');
}

//-------Функція розшифрування-----------------------------------

function rozkoduvaty5() {
  rez.value = "";
  let masznach = (document.getElementById('zakodslovo').value).split(' ')
  let key =  document.getElementById('key').value;
  let k = 0;

  for(i = 0; i < masznach.length; i++){
    if (k == key.length) {k = 0;}
    masznach[i] = (masznach[i] - ((key[k].charCodeAt(0))-97));
    k = k + 1;
    if (masznach[i] < 0) {masznach[i] = masznach[i] + 26;}
    rez.value +=(String.fromCharCode(masznach[i] + 97));
  }
}

//----------------------------ЛАБА№6------------------------------
//----------------------Функція шифрування------------------------
function zakoduvaty6(){
  zakodslov.value = "";
  key.value = "";
  let max = 15;
  let randchek = 0;
  let mas = [""];
  let zn = 0;
  let inputsm =  document.getElementById('slov').value;
  
  rand();
  
  for (i = 0; i < mas.length; i++){
    key.value += (mas[i])
    zakodslovo.value = zakodslov.value += (inputsm[mas[i]])
    
  }
  
  
    function rand(){
    max = inputsm.length - 1;
    ramreng =(Math.floor(Math.random() * (max - 0 + 1)) + 0);
    if (mas.length <= max){
    test();
    }
  }
  
  function test(){
   if (mas.indexOf(ramreng) == (-1) ){
    mas[zn] = ramreng;
    zn = zn + 1;
   } 
    rand();
  }
}
//-------Функція розшифрування-----------------------------------

function rozkoduvaty6() {
  rez.value = "";
  let masznach = (document.getElementById('zakodslovo').value);
  let key =  document.getElementById('key').value;
  console.log(key);
  for (i = 0; i < masznach.length; i++){
    rez.value += (masznach[key[i]]);
  }
}































