function zero(){
  return [];
}

function succ(a){
   a.push(true,true);
   return a;
 }

function two(){
var a = zero();
a = succ (a);
return a;
}
