
var memory="";
function memory(action){
	switch(action){
			case "s":
			expr=document.getElementById("show").value;
			    lastElement= expr.substring(expr.length-2,expr.length-1);
				
					memory=lastElement;
				
				break;
			case "c":
					memory="";
				break;
			case "r":
				display(memory);
				break;
			case "add":
				document.getElementById("show").value=document.getElementById("show").value + memory;
				break;
			case "sub":
				document.getElementById("show").value=document.getElementById("show").value - memory;
				break;
	}
			
}
//event listner
document.addEventListener('keydown', (event) => {
  var key = event.which || event.keyCode;
  var keyName=event.key;
  //equal or backspace 
  if(key==187 || key==8 ){
	operation(keyName); 
  }
  //enter
  else if(key==13){
	  operation("=");
  }
  //delete
  else if( key==46){
	  erase();
  }
  //operation or number or dot
  else if((keyName>=0 || keyName<=9) || key==110 || key==107 ||key==109 ||key==111 || key==106){
	  display(keyName);
  }
  else{
	  //document.getElementById('show').value="Error";
	  alert('Sorry, key: "' + keyName +'" is unsupported by this calculator');
  }
});
//clear
function erase(){
	document.getElementById("show").value="";
		
}

//display 
function display(num){
	var currentvalue= document.getElementById("show").value;
	if(currentvalue=="Error"){
		erase();
	}
	document.getElementById("show").value = document.getElementById("show").value + num;
		
}
function operation(opr){
	var expression = document.getElementById('show').value;
	if(expression=="Error"){
		erase();
	}
	var answer=0;
	var evaluatedExpr=0;
	try {
		evaluatedExpr=eval(expression);
	}
	catch(e) {
		document.getElementById('show').value="Error";
		evaluatedExpr="Error";
	}
	if(evaluatedExpr!="Error"){
		switch(opr){
			case "=":
				answer= evaluatedExpr;
				break;
			case "Backspace":
			    
				answer= expression.substring(0,expression.length-1);
				
				break;
			case "reciprc":
				answer= 1/evaluatedExpr;
				break;
			case "sign":
				answer= -1*evaluatedExpr;
				break;
			case "root":
				answer= Math.sqrt(evaluatedExpr);
				break;
			
		}
	}
		
	if(!isNaN(answer) && isFinite(answer)){
		document.getElementById('show').value=answer;
	}else{
		erase();
		document.getElementById('show').value="Error";
	}

	
}

