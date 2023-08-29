


function countWord() {

   let text = document.getElementById("text").value;
   
    let words = text.split(" ").length ;
   
    
   
      
   document.getElementById("best4").innerHTML=words;
     
      
   
     
   
     
   
   let Counter1 = 0 ;
   let Counter2 = 0 ;
   let Counter3 = 0 ;
   let Counter4 = 0 ;
   
    let Counter5 = 0 ;
    let Counter6 = 0 ;
   let Counter7 = 0 ;
   let Counter8 = 0 ;
   let Counter9 = 0 ;
   let Counter10 = 0 ;
   
   let Counter11 = 0 ;
   let Counter12 = 0 ;
   let Counter13 = 0 ;
   let Counter14 = 0 ;
   let Counter15 = 0 ;
   let Counter16 = 0 ;
   let Counter17 = 0 ;
   let Counter18 = 0 ;
   let Counter19 = 0 ;
   let Counter20 = 0 ;
   let Counter21 = 0 ;
   let Counter22 = 0 ;
   let Counter23 = 0 ;
   let Counter24 = 0 ;
   let Counter25 = 0 ;
   let Counter26 = 0 ;
   let Counter27 = 0 ;
   let Counter28 = 0 ;
   // let Counter29 = 0 ;
   
   
   
   
   
   
   
   
   
   

let alif = ['ا','أ','إ','آ'];

let laa = ['ل'];
let haa = ['ح'];
let mim = ['م'];
let dal = ['د'];
let haae = ['ه' ,'ة'];
let raa = ['ر'];
let baa = ['ب'];
let ine = ['ع'];
let yaa = ['ي','ى','ئ'];
 let noon = ['ن'];
let kaf = ['ك'];
let ouaou = ['و','ؤ'];
let sin = ['س'];
let taa = ['ت'];
let saad = ['ص'];
let ttae = ['ط'];
let ppaf = ['ق'];
let ddal = ['ذ'];
let gaa = ['غ'];
let daa = ['ض'];
let faa = ['ف'];
let zay = ['ز'];
let kha = ['خ'];
let chine = ['ش'];
let ddda = ['ظ'];
let jim = ['ج'];
let ttta = ['ث'];



   
   
   
   for(ch of text) {
   
      
   
    if (alif.includes(ch)){
       Counter1++
    }
    if (baa.includes(ch)){
       Counter2++
    }
   
    if (jim.includes(ch)){
      Counter3++
   }
   
   if (dal.includes(ch)){
      Counter4++
      
   }
   
   if (haae.includes(ch)){
      Counter5++
   }
   
   if (ouaou.includes(ch)){
      Counter6++
   }
   
   
   if (zay.includes(ch)){
      Counter7++
   }
   if (haa.includes(ch)){
      Counter8++
   }
   if (ttae.includes(ch)){
      Counter9++
   }
   if (yaa.includes(ch)){
      Counter10++
   }
   
   if (kaf.includes(ch)){
      Counter11++
   }
   
   
   if (laa.includes(ch)){
      Counter12++
   }
   
   
   if (mim.includes(ch)){
      Counter13++
   }
   
   
   
   if (noon.includes(ch)){
      Counter14++
   }
   
   
   if (sin.includes(ch)){
      Counter15++
   }
   
   
   if (ine.includes(ch)){
      Counter16++
   }
   
   
   if (faa.includes(ch)){
      Counter17++
   }
   
   
   if (saad.includes(ch)){
      Counter18++
   }
   
   
   if (ppaf.includes(ch)){
      Counter19++
   }
   
   
   if (raa.includes(ch)){
      Counter20++
   }
   
   
   if (chine.includes(ch)){
      Counter21++
   }
   
   
   if (taa.includes(ch)){
      Counter22++
   }
   
   
   if (ttta.includes(ch)){
      Counter23++
   }
   
   
   if (kha.includes(ch)){
      Counter24++
   }
   
   
   if (ddal.includes(ch)){
      Counter25++
   }
   
   
   if (daa.includes(ch)){
      Counter26++
   }
   
   
   if (ddda.includes(ch)){
      Counter27++
   }
   
   
   if (gaa.includes(ch)){
      Counter28++
   }
   
   
   
   }
   
   
   
   document.getElementById("alif").innerHTML=Counter1;
   document.getElementById("alif1").innerHTML=Counter1;
   
   document.getElementById("baa").innerHTML=Counter2;
   document.getElementById("baa2").innerHTML=Counter2*2;
   
   document.getElementById("jim").innerHTML=Counter3;
   document.getElementById("jim3").innerHTML=Counter3*3;
   
   document.getElementById("dal").innerHTML=Counter4;
   document.getElementById("dal4").innerHTML=Counter4*4;
   
   document.getElementById("haae").innerHTML=Counter5;
   document.getElementById("haae5").innerHTML=Counter5*5;
   
   document.getElementById("ouaou").innerHTML=Counter6;
   document.getElementById("ouaou6").innerHTML=Counter6*6;
   
   document.getElementById("zay").innerHTML=Counter7;
   document.getElementById("zay7").innerHTML=Counter7*7;
   
   document.getElementById("haa").innerHTML=Counter8;
   document.getElementById("haa8").innerHTML=Counter8*8;
   
   document.getElementById("ttae").innerHTML=Counter9;
   document.getElementById("ttae9").innerHTML=Counter9*9;
   
   document.getElementById("yaa").innerHTML=Counter10;
   document.getElementById("yaa10").innerHTML=Counter10*10;
   
   document.getElementById("kaf").innerHTML=Counter11;
   document.getElementById("kaf11").innerHTML=Counter11*20;
   
   document.getElementById("laa").innerHTML=Counter12;
   document.getElementById("laa12").innerHTML=Counter12*30;
   
   
   document.getElementById("mim").innerHTML=Counter13;
   document.getElementById("mim13").innerHTML=Counter13*40;
   
   
   document.getElementById("noon").innerHTML=Counter14;
   document.getElementById("noon14").innerHTML=Counter14*50;

      
   document.getElementById("saad").innerHTML=Counter18;
   document.getElementById("saad18").innerHTML=Counter18*60;
   
  
   
   document.getElementById("ine").innerHTML=Counter16;
   document.getElementById("ine16").innerHTML=Counter16*70;
   
   document.getElementById("faa").innerHTML=Counter17;
   document.getElementById("faa17").innerHTML=Counter17*80;

   document.getElementById("daa").innerHTML=Counter26;
   document.getElementById("daa26").innerHTML=Counter26*90;

   
   
   document.getElementById("ppaf").innerHTML=Counter19;
   document.getElementById("ppaf19").innerHTML=Counter19*100;
   
   document.getElementById("raa").innerHTML=Counter20;
   document.getElementById("raa20").innerHTML=Counter20*200;
   
   document.getElementById("sin").innerHTML=Counter15;
   document.getElementById("sin15").innerHTML=Counter15*300;
   
   document.getElementById("taa").innerHTML=Counter22;
   document.getElementById("taa22").innerHTML=Counter22*400;
   
   document.getElementById("ttta").innerHTML=Counter23;
   document.getElementById("ttta23").innerHTML=Counter23*500;
   
   document.getElementById("kha").innerHTML=Counter24;
   document.getElementById("kha24").innerHTML=Counter24*600;
   
   document.getElementById("ddal").innerHTML=Counter25;
   document.getElementById("ddal25").innerHTML=Counter25*700;
   
  
   
   document.getElementById("ddda").innerHTML=Counter27;
   document.getElementById("ddda27").innerHTML=Counter27*800;
   
   document.getElementById("gaa").innerHTML=Counter28;
   document.getElementById("gaa28").innerHTML=Counter28*900;

   document.getElementById("chine").innerHTML=Counter21;
   document.getElementById("chine21").innerHTML=Counter21*1000;
   
   
   document.getElementById("text").addEventListener("keyup",countWord);
   
   
   document.getElementById("best3").innerHTML= Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter18*60 + Counter16*70 + Counter17*80 + Counter26*90 + Counter19*100 + Counter20*200  + Counter15*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter27*800 + Counter28*900 + Counter21*1000  ;
   
   document.getElementById("best6").innerHTML= Counter1 + Counter2 + Counter3 + Counter4 + Counter5 + Counter6 + Counter7 + Counter8 + Counter9 + Counter10 + Counter11 + Counter12 + Counter13 + Counter14 + Counter15 + Counter16 + Counter17 + Counter18 + Counter19 + Counter20 + Counter21 + Counter22 + Counter23 + Counter24 + Counter25 + Counter26 + Counter27 + Counter28 ;
   
   // document.getElementById("best7").innerHTML=words + Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*11 + Counter11*22 + Counter12*33 + Counter13*44 + Counter14*55 + Counter15*66 + Counter16*77 + Counter17*88 + Counter18*99 + Counter19*111 + Counter20*222 + Counter21*333 + Counter22*444 + Counter23*555 + Counter24*666 + Counter25*777 + Counter26*888 + Counter27*999 + Counter28*1111 + Counter1 + Counter2 + Counter3 + Counter4 + Counter5 + Counter6 + Counter7 + Counter8 + Counter9 + Counter10 + Counter11 + Counter12 + Counter13 + Counter14 + Counter15 + Counter16 + Counter17 + Counter18 + Counter19 + Counter20 + Counter21 + Counter22 + Counter23 + Counter24 + Counter25 + Counter26 + Counter27 + Counter28;
   
   }
   
   
   
