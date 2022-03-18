let addButton=document.querySelector("#liveToastBtn");
let inputArea=document.querySelector("#task");
let listSelector=document.querySelector("#list");
let removeButton=document.getElementsByClassName("d-block ml-auto")
addButton.addEventListener('click', addTh); 

function addTh()
{
    if (inputArea.value.split(' ').some(s => s))
    {
        $(".success").toast("show");
        let trCreate=document.createElement("tr");
        listSelector.appendChild(trCreate);
        trCreate.innerHTML=`<td> ${inputArea.value} </td><td width="1%"><button class="d-block ml-auto">Sil</button></td>`
        trCreate.onclick = removeTh;
        inputArea.value="";
    }
    else{$(".error").toast("show");}
}

function removeTh()
{
    this.remove();
}