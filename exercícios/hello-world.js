const  http  =  requer ( "http" ) ;

const  hostname  =  "127.0.0.1" ;
 porta  const =  3008 ;

 servidor  const =  http . createServer ( ( req ,  res )  =>  {
  res . statusCode  =  200 ;
  res . setHeader ( "Content-Type" ,  "text / plain" ) ;
  res . end ( "Olá, mundo" ) ;
} ) ;

servidor . escute ( porta ,  nome do host ,  ( )  =>  {
  console . log ( `Servidor rodando em http: // $ { hostname } : $ { port } /` ) ;
} ) ;