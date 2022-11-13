// Bài Tập 1
function viethoa(string) 
{
    let hoa = string.toLowerCase().split(" ");
  
    for(var i = 0; i< hoa.length; i++){
        hoa[i] = hoa[i][0].toUpperCase() + hoa[i].slice(1);
    }
    return hoa.join(" ");
}
let ten = viethoa('nguyễn thành đạt');
console.log(ten)
console.log(viethoa('bài tập clb'));

// Bài Tập 2
let a = 'javascript is cool'
let b = 'programing is fun'
console.log(a.trim())
console.log(b.trim())
tonga = a.replace(/a/g,'4').replace(/e/g,'3').replace(/i/g,'1').replace(/o/g,'0').replace(/s/g,'5')
tongb = b.replace(/a/g,'4').replace(/e/g,'3').replace(/i/g,'1').replace(/o/g,'0').replace(/s/g,'5')
console.log(tonga)
console.log(tongb)

// Bài Tập 3
let them = 'thanhdat';
if(them.length >= 3 && them.endsWith('ing')){
    them = them + 'ly';
}else if(them.length <3){
    them = them;
}else{
    them += "ing";
}  
console.log(them)