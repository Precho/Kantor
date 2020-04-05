import React, {useState, useEffect} from 'react';
import Dane from '../dane.json';

function Main() {

    
    const [wartosc,setWartosc]=useState(0)
    const [dodatki,setDodatki]=useState([]);
    const [selectedValue,setSelectedValue]=useState(3.673); // AED default price
    const [wartoscInput,setWartoscInput] = useState(0);
    const [waluty,setWaluty]= useState([]);
    const [newArray,setNewArray]=useState([]);

    const [date,setDate]=useState(Date());

useEffect(()=> {
    setDodatki(Dane);
    fetch("https://openexchangerates.org/api/latest.json?app_id=62a0ee8d988c4da8b4a70a483f3e40d4&base=USD")
    .then( res => res.json())
    .then(res => setWaluty(res.rates));

   setNewArray(Array.from(waluty));
    setDate(Date());
},[3600000]) // uppdating every one hour

   const zmiana = (evt)=> {
    console.log(evt.target.value);
    setSelectedValue(evt.target.value);
   
    }

    const zmianaInput = (evt)=> {
       // console.log(evt.target.value);
        setWartoscInput(evt.target.value);
    }
    const oblicz = (evt) => {
    //console.log(waluty);
 
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
                Object.entries(waluty).map(([key,value]) => {
                return (
                <option value={value}    >{key}</option>
                )})
            } 
        </select>
        <input type="submit" value="Oblicz"/>
    </form>
    <h3>{wartosc.toFixed(2)}</h3>
    <h2>Kurs wynosi: {selectedValue}</h2>
    <h4> Last price uppdate: {date.toLocaleString()}</h4>
{
//   Object.entries(waluty).map(([key,value])=>{
//     return (
//         <div>{key} : {value.toString()}</div>
//     );
//   })
}
    </div>
  );
}

export default Main;