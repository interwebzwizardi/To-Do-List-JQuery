//LISÄTÄÄN TAPAHTUMAKUUNTELIJAT

//Tapahtumakuuntelijat napille (toimii myös enterin painalluksella)
submitNappi.addEventListener('click', addToList);
addTasks.addEventListener('keyup', function(event){
  if(event.keyCode == 13){
    addToList();
  }
});

//FUNKTIOT

//Funtio onLoad animaatioille
function onLoadAnimations(){
  $('#taskContainer').slideToggle("slow");
}

//Muuttujat lisättyjen elementtien määrän laskua varten
var taskNro = -1;
var deleteBtnNro = -1;

//Funktio elementin listaamiseen

function newListElement(){

  //Haetaan käyttäjän syöte input-kentästä
  var input = $("#addTasks").val();

  //Asetetaan elementeille "sarjanumero" yksilöintiä ja poistamista varten
  taskNro = taskNro +1;
  deleteBtnNro = deleteBtnNro +1;

  /*Luodaan uusi li-elementti muuttujaan ja sen sisältämät elementit (checkbox, sisältö ja deleteBtn),
  jotta se voidaan myöhemmin lisätä ul-elementtiin*/
  var $newListItem = $("<li class='liItem' name='"+ taskNro +"'><input type='checkbox' class='checkboxNappi' onclick='checkboxAction()'>"
  + input + "<button class='deleteBtn' name='"+ deleteBtnNro +"' onclick='deleteBtnAction()'>Delete</button> </li>");

  //Lisätään luotu elementti näkyviin
  $($newListItem).appendTo("#taskList").fadeIn(300);

}

function addToList(){
  //Haetaan syöte muuttujaan sen tarkistamista varten
  var input = $("#addTasks").val();

  //Tyylimääreiden muuttamista dynaamisia animaatioita varten
  $('#taskContainer').css("padding-top","0px");

  //Tarkistetaan onko syöte tyhjä, jottei lisätä listaan tyhjiä listauksia
  if (input.length <=0){
    alert("Can't add empty notes.");
    $("#addTasks").attr('style', 'border:2px solid red');
  }
  else {
    $("#addTasks").attr('style', 'border:1px solid gray');

  newListElement();

}
}

function checkboxAction(){

  //Haetaan kaikki luodut checkboxit ja listaukset
  var checkboxes = $(".checkboxNappi");
  var tasks = $('li');
  /*Määritellään transition animaatio tässä, ettei se sotke fadeIn() funktion toimintaa
  luodessa uutta li-elementtiä*/
  $('li').css("transition", "0.2s");

//Käydään listaukset läpi ja määritetään mikä checkbox klikattiin päälle tai pois
for(var i = 0; i < tasks.length; i++){
  if(checkboxes[i].checked){

      tasks[i].style.backgroundColor="#ffd45e";
      tasks[i].style.textDecoration="line-through";
      tasks[i].style.color="grey";
    }

  else{
    tasks[i].style.backgroundColor="#65a9e6";
    tasks[i].style.textDecoration=null;
    tasks[i].style.color=null;
  }
}
}


function deleteBtnAction(){

  //Haetaan kaikki luodut delete -napit ja listaukset

  var deleteButtons = $(".deleteBtn");
  var target = event.target.getAttribute('name');
  var ul = $("#taskList");


  //Käydään listaukset läpi ja määritetään mikä kohta poistetaan
  for(var i = 0; i < deleteButtons.length; i++){
    //Loopin hahmottamista helpottavia konsoli viestejä
    console.log("target",target);
    console.log("task",deleteButtons[i].name);

    if(target == deleteButtons[i].name){
      deleteButtons[i].closest('.liItem').remove();
      break;
    }

}

}
