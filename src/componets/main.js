import React, {useState, useEffect} from 'react';
import Dane from '../dane.json';

function Main() {

    
    const [wartosc,setWartosc]=useState(0)
    const [dodatki,setDodatki]=useState([]);
    const [selectedValue,setSelectedValue]=useState(3.82); /// Set dolar price
    const [wartoscInput,setWartoscInput] = useState(0);
useEffect(()=> {
    setDodatki(Dane);
    
},[])

   const zmiana = (evt)=> {
    console.log(evt.target.value);
    setSelectedValue(evt.target.value);
   // console.log(selectedValue.cena)
    //setSelectedValue(evt.target.value);
   //setSelectedValue(waluta.cena);
    // console.log(selectedValue.cena);
    //setWartoscInput(evt.target.value);
   // console.log(selectedValue.cena);
    //var wartosc_input(evt.target.value);
    //
    }

    const zmianaInput = (evt)=> {
       // console.log(evt.target.value);
        setWartoscInput(evt.target.value);
    }
    const oblicz = (evt) => {

        evt.preventDefault();
        if (wartoscInput == 0) {
            alert("Uzupełnij CENE! / Insert PRICEE!")
                console.log("Set input price")
        } else {
            setWartosc(wartoscInput*selectedValue);
            console.log(wartosc);
            console.log(wartoscInput);
        }
        
    }
  return (
    <div className="main">
    <form className="moj_form" onSubmit={oblicz}>
   
        <input type="text"  onChange={zmianaInput}/>
        <select onChange={zmiana}  >
            {
                dodatki.map(waluta => {
                return (
                <option key={waluta.id} value={waluta.cena}   selected={waluta.selected === 1 ? "selected" : null} >{waluta.waluta}</option>
                )})
            } 
        </select>
        <input type="submit" value="Oblicz"/>
    </form>
    <h3>{wartosc.toFixed(2)}</h3>
    <h2>Kurs wynosi: {selectedValue}</h2>
    </div>
  );
}

export default Main;
