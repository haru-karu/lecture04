function zero(){
  return [];
}

function succ(a){
   a.push(true,true,true,true,true,true,true,true,true,true);
   return a;
 }

function ten(){
var a = zero();
a = succ (a);
return a;
}
