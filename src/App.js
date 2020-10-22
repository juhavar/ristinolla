import React from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [peliMerkki1, setPelimerkki1] = useState("");
  const [peliMerkki2, setPelimerkki2] = useState("");
  const [peliMerkki3, setPelimerkki3] = useState("");
  const [peliMerkki4, setPelimerkki4] = useState("");
  const [peliMerkki5, setPelimerkki5] = useState("");
  const [peliMerkki6, setPelimerkki6] = useState("");
  const [peliMerkki7, setPelimerkki7] = useState("");
  const [peliMerkki8, setPelimerkki8] = useState("");
  const [peliMerkki9, setPelimerkki9] = useState("");  
  //const [portsari, setPortsari] = useState(true);
  const [vuoro, setVuoro] = useState(1);
  const [voittaja, setVoittaja] = useState("");

  const peliKenttä = (id)=>{
    // if(portsari)
    switch(id){
        case(1):{
          if(peliMerkki1===""){
            setPelimerkki1(merkintä());
            setVuoro(vuoro+1);
          }
          break;
        }
        case(2):{
          if(peliMerkki2===""){
            setPelimerkki2(merkintä());
            setVuoro(vuoro+1);
          }
          break;
        }
        case(3):{
          if(peliMerkki3===""){
            setPelimerkki3(merkintä());
            setVuoro(vuoro+1);
          }
          break;
        }
        case(4):{
          if(peliMerkki4===""){
            setPelimerkki4(merkintä());
            setVuoro(vuoro+1);
          }
          break;
        }
        case(5):{
          if(peliMerkki5===""){
            setPelimerkki5(merkintä());
            setVuoro(vuoro+1);
          }
          break;
        }
        case(6):{
          if(peliMerkki6===""){
            setPelimerkki6(merkintä());
            setVuoro(vuoro+1);
          }
          break;
        }
        case(7):{
          if(peliMerkki7===""){
            setPelimerkki7(merkintä());
            setVuoro(vuoro+1);
          }
          break;
        }
        case(8):{
          if(peliMerkki8===""){
            setPelimerkki8(merkintä());
            setVuoro(vuoro+1);
          }
          break;
        }
        case(9):{
          if(peliMerkki9===""){
            setPelimerkki9(merkintä());
            setVuoro(vuoro+1);
          }
          break;
        }
        default:
          break;
      }

      console.log(vuoro);
      console.log(voittaja);
      if(vuoro>4)  pelinTila();
      if(voittaja!=="")
        alert(voittaja);
    }
  
  
  const merkintä = ()=>{
    if(vuoro%2===0){
      return "O";
      }
    else {
      return "X"
    }
  }

  const pelinTila = ()=>{   // tarkastetaan onko peli päättynyt
    console.log(peliMerkki1);
    console.log(peliMerkki2);
    console.log(peliMerkki3);
    if(peliMerkki1===peliMerkki2 && peliMerkki2===peliMerkki3 && peliMerkki2!=="")// vasen pysty
      setVoittaja(peliMerkki1 + "1");
    else if(peliMerkki4===peliMerkki5 && peliMerkki5===peliMerkki6 && peliMerkki5!=="") // keskimmäinen pysty
      setVoittaja(peliMerkki4 + "2");
    else if(peliMerkki7===peliMerkki8 && peliMerkki8===peliMerkki9 && peliMerkki8!=="") // oikea pysty
      setVoittaja(peliMerkki1 + "3");
    else if(peliMerkki1===peliMerkki4 && peliMerkki4===peliMerkki7 && peliMerkki4!=="") // ylin
      setVoittaja(peliMerkki1 + "4");
    else if(peliMerkki2===peliMerkki5 && peliMerkki5===peliMerkki8 && peliMerkki5!=="") // keski
      setVoittaja(peliMerkki2 + "5");
    else if(peliMerkki3===peliMerkki6 && peliMerkki6===peliMerkki9 && peliMerkki6!=="") // alin
      setVoittaja(peliMerkki3 + "6");
    else if(peliMerkki1===peliMerkki5 && peliMerkki5===peliMerkki9 && peliMerkki5!=="") // vino1
      setVoittaja(peliMerkki1 + "7");
    else if(peliMerkki3===peliMerkki5 && peliMerkki5===peliMerkki7 && peliMerkki5!=="") // vino2
      setVoittaja(peliMerkki3 + "8");
    
    
  }
    
  
  

//   function tarkastus (id){
//     console.log(portsari);
//     console.log(id);
//     if(id===("")) 
//       setPortsari(true);
//     else
//       setPortsari(false);

// }

  const muutos = (e) => {

  }


  return (


      <div class="ticTacToe">
        
          
        <div class="column">
          
          <span class="square" onClick={() => peliKenttä(1)}>{peliMerkki1}</span>
          <span class="square" onClick={() => peliKenttä(2)}>{peliMerkki2}</span>
          <span class="square" onClick={() => peliKenttä(3)}>{peliMerkki3}</span>
        </div>
        <div class="column">
          <span class="square" onClick={() => peliKenttä(4)}>{peliMerkki4}</span>
          <span class="square" onClick={() => peliKenttä(5)}>{peliMerkki5}</span>
          <span class="square" onClick={() => peliKenttä(6)}>{peliMerkki6}</span>
        </div>
        <div class="column">
          <span class="square" onClick={() => peliKenttä(7)}>{peliMerkki7}</span>
          <span class="square" onClick={() => peliKenttä(8)}>{peliMerkki8}</span>
          <span class="square" onClick={() => peliKenttä(9)}>{peliMerkki9}</span> 
        </div>
      
     
    </div>
  );
}

export default App;
