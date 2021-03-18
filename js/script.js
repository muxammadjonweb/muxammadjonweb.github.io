


	
 
  let = inputIn = document.querySelector('.input-in');
  let = button = document.querySelector('button');
  let = div = document.querySelector('.out');
   
 
  
  button.onclick = function (){
  	 let h = inputIn.value;
  	  let c = Math.sqrt(inputIn.value);
  	  let s = Math.ceil(c);
      
    for(let k = 0; k < 1; k++){
    	r = (s + k);
    	d = Math.pow(r,2);
    	star = (d - inputIn.value);
    	b = Math.sqrt(star);
    	res = (r + b);
    	 res1 = (r - b);
    	 result =Math.ceil(res);
    	 result2 =Math.ceil(res1);
    	if (result % 2 == 0 || result2 % 2 == 0 || result % 3 == 0 || result2 % 5 == 0 || inputIn.value == 132 ) {
    		
 	         div.innerHTML=('неверно')
 	          
         } else {
             
              div.innerHTML=(`P=${result} Q=${result2}` );

       }
      
        div.innerHTML.style = "color: red;"
    }
        // div.innerHTML = `P=${result} Q=${result2}`;

}
 
 





  /*	let = n ;
    let c = Math.sqrt(n);
    let s = Math.ceil(c);
    let k = 0;
    while( true){
	   r = (s + k);
	   d = Math.pow(r,2);
	   star = (d - n);
	   b = Math.sqrt(star);
	   res = (r + b);
	   res1 = (r - b);
          if (res % 2 == 0 && res1 % 2 == 0 ) {
 	        console.log('неверно')
 	          break;
         }else {
             console.log(`N=${n} 
              P=${res}Q=${res1}` );
              break;
       }
    }*/

/*for (let k = 0; k < 1; k++){
	r = (s + k);
	d = Math.pow(r,2);
	star = (d - n);
	b = Math.sqrt(star);
	res = (r + b);
	res1 = (r - b);

	if (res % res == 0 && res % 1 == 0 && res1 % 1 == 0 && res1 % res1 == 0){
		alert(`N=${n} 
			P=${res}Q=${res1}` );
	}else {
		alert('неверно')
	}
}
*/



