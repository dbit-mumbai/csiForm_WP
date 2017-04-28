
	function validateForm() 
	{
		alert("hello");
		
    var a = document.forms["registration"]["fname"];
    if (a.value =="") {
        alert("First Name must be filled out");return false;}

     var b = document.forms["registration"]["mname"].value;
    if (b == "") {
        alert("Middle Name must be filled out");return false;}

     var c = document.forms["registration"]["lname"].value;
    if (c == "") {
        alert("Last Name must be filled out");return false;}

     var d= document.forms["registration"]["birthdate"].value;
     if(d=="")  {
         alert("Date of Birth must be filled out");return false;} 

	if((document.registration.gender[0].checked==false)&&(document.forms.gender[1].checked==false)) {
	  alert ( "Please choose your Gender"); 
          return false;
        }

	var val = mobno.value
	if (/^\d{10}$/.test(val)) {
	} 
	else {
    	  alert("Invalid contact number please re-enter your number");
    	  return false;
	}

	if(document.getElementById("dept").value=="no"){
      	  alert("Please select a department");
      	  return false;
  	 }

  	 if(document.getElementById("class").value=="no"){
     	   alert("Please select a year");
      	   return false;
   	 }

	var val = noid.value
	if (/^\d{10}$/.test(val)) {
	} 
	else {
   	 alert("Invalid student Id")
    	 return false;
	}

	if((document.forms.skl[0].checked==false)&&(document.forms.skl[1].checked==false)&&(document.forms.skl[2].checked==false)&&(document.forms.skl[3].checked==false)
	&&(document.forms.skl[3].checked==false)&&(document.forms.skl[4].checked==false)&&(document.forms.skl[5].checked==false)) 
	{
	  alert ( "Please select a skill"); 
	  return false;
	}
}

function disableDmem()
{
	var t=document.forms["forms"];
	t.dmem[0].disabled=true;
	t.dmem[1].disabled=true;
	t.dmem[2].disabled=true;
	t.dmem[3].disabled=true;
}

function disableImem()
{
	var t=document.forms["forms"];
	t.imem[0].disabled=true;
	t.imem[1].disabled=true;
	t.imem[2].disabled=true;
	t.imem[3].disabled=true;
	t.imem[4].disabled=true;
}

function enableDmem()
{
	var t=document.forms["forms"];
	t.dmem[0].disabled=false;
	t.dmem[1].disabled=false;
	t.dmem[2].disabled=false;
	t.dmem[3].disabled=false;
	t.dmem[4].disabled=false;

}

function enableImem()
{
var t=document.forms["forms"];
	t.imem[0].disabled=false;
	t.imem[1].disabled=false;
	t.imem[2].disabled=false;
	t.imem[3].disabled=false;
	t.imem[4].disabled=false;
}

function manageFee()
{
	var t = document.forms["forms"];
	if (t.dmem[0].checked == true)
	{
		disableImem();
		t.amt.value="200";
	}
	if (t.dmem[1].checked == true)
	{
		disableImem();
		t.amt.value="300";
	}
	if (t.dmem[2].checked == true)
	{
		disableImem();
		t.amt.value="400";
	}
	if (t.dmem[3].checked == true)
	{
		enableImem();
		disableDmem();
		t.amt.value="";
	}
	if (t.imem[0].checked == true)
	{
		disableDmem();
		t.amt.value="1150";
	}
	if (t.imem[1].checked == true)
	{
		disableDmem();
		t.amt.value="2070";
	}
	if (t.imem[2].checked == true)
	{
		disableDmem();
		t.amt.value="2990";
	}
	if (t.imem[3].checked == true)
	{
		disableDmem();
		t.amt.value="15000";
	}
	if (t.imem[4].checked == true)
	{
		t.amt.value="";
		enableDmem();
		t.dmem[3].disabled=true;
		disableImem();
						
	}
}  
    
}

