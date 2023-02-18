import './App.css';
import React from "react";
import {useState} from "react";

function App() {

let employeeA = [[1,"François Viel","Chauffeur Opérateur A",12],[2,"Martin Avoine","Chauffeur Opérateur A",12],[3,"Alexandre Nadeau Drolet","Chauffeur Opérateur A",12],[4,"Stéphane Denis","Chauffeur Opérateur A",12],[5,"Stéphane Lavaute","Chauffeur Opérateur A",12]];

let employeeB = [[1,"Patrick Rondeau","Chauffeur Opérateur B",10],[2,"Ahmed Argoub","Chauffeur Opérateur B",10],[3,"Aniel Estimable","Chauffeur Opérateur B",10],[4,"Manon Germain","Chauffeur Opérateur B",10], [5,"Sandy Fulton Gaspard","Chauffeur Opérateur B",10],[6,"Marc Trussart","Chauffeur Opérateur B",10],[7,"Jean Robert Elie","Chauffeur Opérateur B",10],[8,"Jean Wildonat","Chauffeur Opérateur B",10], [9,"Chakib Nasrallah","Chauffeur Opérateur B",10],[10,"Khalid Mahmoud","Chauffeur Opérateur B",10]];

let employeeC = [[1,"Alix Jean Batiste","Chauffeur C",7],[2,"David Thomas Georges","Chauffeur C",7],[3,"Benoit Jean Charlin","Chauffeur C",7]];


let employeeList=[employeeA,employeeB,employeeC];

const [toggle,setToggle] = useState(0);
const [debug,setDebug] = useState(false);
const [listA,setListA] = useState(employeeA);
const [listB,setListB] = useState(employeeB);
const [listC,setListC] = useState(employeeC);

let employeeA2 = listA.slice();

let employeeB2 = listB.slice();

let employeeC2 = listC.slice();



const verifyDelete = () => {
  let verifier=true;
  let deleteValue=false;
  let prenomDelete = document.getElementById("prenomDelete").value;
  let nomDelete = document.getElementById("nomDelete").value;
  let fullNameDelete = prenomDelete.trim()+" "+nomDelete.trim();
  if(prenomDelete.match(/[A-Za-zÀ-ȕ\- ]*/)!=prenomDelete) {verifier=false;alert("Un prénom ne peut pas comporter de chiffres ou de symboles spéciaux. Vérifiez le prénom d'utilisateur.")}
  if(nomDelete.match(/[A-Za-zÀ-ȕ\- ]*/)!=nomDelete) {verifier=false;alert("Un prénom ne peut pas comporter de chiffres ou de symboles spéciaux. Vérifiez le prénom d'utilisateur.")}

  if(prenomDelete.length<3) {verifier=false;alert("Prénom trop court.")}
  if(nomDelete.length<3) {verifier=false;alert("Nom trop court.")}

  if(verifier==true) {
  for(let i=0;i<employeeA2.length;i++) {
    if(employeeA2[i][1]==fullNameDelete) {
      employeeA2.splice(i,1);
      setListA(()=>employeeA2);
      alert("L'utilisateur "+fullNameDelete+" a été supprimé du Dispatch.");
      deleteValue=true;
      break;
    }
  }
    if(deleteValue==false) {
      for(let i=0;i<employeeB2.length;i++) {
        if(employeeB2[i][1]==fullNameDelete) {
          employeeB2.splice(i,1);
          setListB(()=>employeeB2);
          alert("L'utilisateur "+fullNameDelete+" a été supprimé du Dispatch.");
          deleteValue=true;
          break;
        }
    }
  }
    if(deleteValue==false) {
      for(let i=0;i<employeeC2.length;i++) {
        if(employeeC2[i][1]==fullNameDelete) {
          employeeC2.splice(i,1);
          setListC(()=>employeeC2);
          alert("L'utilisateur "+fullNameDelete+" a été supprimé du Dispatch.");
          deleteValue=true;
          break;
        }
    }
  }
  if(deleteValue==false) {alert("Il n'y a pas d'utilisateur du nom de " + fullNameDelete+ " dans notre base de données. Vérifiez si le nom d'utilisateur est écrit correctement.")}
  }
  document.getElementById("prenomDelete").value="";
  document.getElementById("nomDelete").value="";

}

const verifyAdd = () => {
  let verifier=true;
  let position= document.getElementById("typeAdd").value;
  let prenomAdd = document.getElementById("prenomAdd").value;
  let nomAdd = document.getElementById("nomAdd").value;
  let fullNameAdd = prenomAdd.trim()+" "+nomAdd.trim();
  document.getElementById("typeAdd").value="Sélectionnez une valeur"
  if(prenomAdd.match(/[A-Za-zÀ-ȕ\- ]*/)!=prenomAdd) {verifier=false;alert("Un prénom ne peut pas comporter de chiffres ou de symboles spéciaux. Vérifiez le prénom d'utilisateur.")}
  if(nomAdd.match(/[A-Za-zÀ-ȕ\- ]*/)!=nomAdd) {verifier=false;alert("Un prénom ne peut pas comporter de chiffres ou de symboles spéciaux. Vérifiez le prénom d'utilisateur.")}

  if(prenomAdd.length<3) {verifier=false;alert("Prénom trop court.")}
  if(nomAdd.length<3) {verifier=false;alert("Nom trop court.")}

  if(position=="0"||position=="") {verifier=false;alert("Sélectionnez une valeur sur la barre défilante.")}
  if(verifier==true) {
    if(position=="A") {
      employeeA2+=[employeeA2.length+1,fullNameAdd,"Chauffeur Opérateur A",12];
      setListA(()=>employeeA2)
    }
    if(position=="B") {
      employeeB2+=[employeeB2.length+1,fullNameAdd,"Chauffeur Opérateur B",10];
      setListB(()=>employeeB2)
    }
    if(position=="C") {
      employeeC2+=[employeeC2.length+1,fullNameAdd,"Chauffeur C",7];
      setListC(()=>employeeC2)
    }
    alert("L'utilisateur "+fullNameAdd+" a été ajouté à la liste de Dispatch")
    document.getElementById("prenomAdd").value=""
    document.getElementById("nomAdd").value=""
  }
}

const check = () => {
  if (toggle==0) {
    return (
      <h1>Sélectionnez une option</h1>
    )
  }
  if (toggle==1) {return ( 
    <div>
      <h1>Utilisateur à supprimer</h1>
      <h2>Prénom:</h2><textarea maxLength={25} id="prenomDelete"></textarea>
      <h2>Nom de famille:</h2><textarea maxLength={25} id="nomDelete"></textarea>
      <br/><br/><button onClick={()=>verifyDelete()}>Supprimer</button>
    </div>
    )
  }
  if (toggle==2) {return (
    <div>
      <h1>Utilisateur à ajouter</h1>
      <h2>Prénom:</h2> <textarea maxLength={25} id="prenomAdd"></textarea>
      <h2>Nom de famille:</h2><textarea maxLength={25} id="nomAdd"></textarea>
      <br/><br/> <h2>Type de chauffeur:</h2><select id="typeAdd">
        <option value="0">Sélectionnez une valeur</option>
        <option value="A">Chauffeur Opérateur A</option>
        <option value="B">Chauffeur Opérateur B</option>
        <option value="C">Chauffeur C</option>
      </select>
      <br/><br/><button onClick={()=>verifyAdd()}>Ajouter</button>
    </div>
  )}
}

  return (
    <div>
      <h1>Bienvenue au système de Dispatch de Montréal</h1>
      <button onClick={()=>setToggle(1)}>Supprimer un utilisateur</button>
      <button onClick={()=>setToggle(2)}>Ajouter un utilisateur</button>

    <br/> <br/>
      <div>
      {check()}
    <br/><br/><br/><br/>
      <button onClick={()=>(debug==false?setDebug(true):setDebug(false))}>Voir liste d'utilisateur (DEBUG testing only)</button>
      {debug==true?<div><h4>{listA}</h4><h4>{listB}</h4><h4>{listC}</h4></div>:""}
      </div>

    </div>
  );
}

export default App;
