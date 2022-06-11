const spy =num =>num*num;
function receivesAFunction(spy){
   spy();
}
receivesAFunction(spy);
var returnsANamedFunction = () => {
   return function person() {
      return 'I love Morringa'
   }
}  
   


const returnsAnAnonymousFunction=() =>{
   return greeting => {
      return 'Hello, how is family?'
   }

}
