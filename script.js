

function setErrorMsg(input,errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"
    small.innerText = "errormsgs"
}

//login
function login()
{
	var d=document.getElementById("login");
	var un=document.getElementById("un");
	var up=document.getElementById("up");

	if(un.value.length>0)
	{
		if(up.value.length>0)
		{
			if(un.value=="deboo")
			{
				if(up.value=="123456")
				{
					d.style.display="none";
				}
				else
				{
 					showError("Wrong Password");
				}
			}
			else
			{
				showError("Invalid User Name");
			}	
		}
		else
		{
			showError("Inser User Password");
		}
	}
	else
	{
		showError("Insert User Name");
	}
}

function showError(textMsg)
{
	var msg=document.getElementById("msg");
	msg.innerHTML=textMsg;
	msg.style.display="block";
}
