import { Component } from '@angular/core';

function  log(  target,  name,  descriptor){
  console.log(  target,  name,  descriptor);

  //  store the  original  fun  in   a  var

  const  original =  descriptor.value;

  //  do  some manipulations   with  description .value
  descriptor.value = function(...args){
    console.log('arguments', args,'were passed  in this  function');
    
    const  result  = original(args)

    console.log('the  result  of the  funtion  is',  result);
    
  }
 
  //return  the  description
  return  descriptor;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  constructor(){
    console.log('this statement was  generated  by  the  constructor', this.aSimpleMethod(5));
    
   

  }

  @log
aSimpleMethod(a){
return a*a  
}

}



