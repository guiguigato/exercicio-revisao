peso  const =  100 ;
 altura  const =  2 ;

const  bmi  =  peso / altura ** 2 ;

if  ( bmi  <  18,5 )  {
  resultado  =  "Peso insuficiente" ;
}  else  if  ( bmi  <  24,9 )  {
  resultado  =  "Peso normal" ;
}  else  if  ( bmi  <  29,9 )  {
  resultado  =  "Sobrepeso" ;
}  else  if  ( bmi > = 30 )  {
  resultado  =  "Obesidade" ;
}

console . log ( resultado ) ;