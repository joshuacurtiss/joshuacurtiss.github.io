var d=new Date();
var img=document.createElement("img");
img.setAttribute('src', 'photos/'+d.getDate()+'.jpg');
img.setAttribute('alt', 'Us');
document.getElementById("photo").appendChild(img);
