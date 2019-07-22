var list=document.querySelector('#movie-list ul');
var form=document.forms['add-movie'];
form.addEventListener('submit',function(e){
	e.preventDefault();
	var val1=form.querySelector('input[type="text"]').value;
	var li=document.createElement('li');
	var muv1=document.createElement('span');
	var del=document.createElement('span');
	li.appendChild(muv1);
	li.appendChild(del);
	list.appendChild(li);
	muv1.textContent=val1;
	del.textContent='delete';
	muv1.classList.add("name");
	del.classList.add("delete");
});