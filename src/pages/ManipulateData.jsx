import React, { useState } from "react";
import CardData from "../asset/CardList";

function Manipulate() {

    
    const Data = [
        {
            id:"1",
          name: "Hilda Rojas",
          phone: "1-704-235-4627",
          email: "elit.pharetra@google.edu",
          numberrange: 8,
        },
        {
            id:"2",
          name: "Helen Ellis",
          phone: "1-413-813-5075",
          email: "eget.metus@protonmail.ca",
          numberrange: 2,
        },
        {
            id:"3",
          name: "Lesley Simmons",
          phone: "1-523-231-9814",
          email: "malesuada@google.net",
          numberrange: 4,
        },
        {
            id:"4",
          name: "Ocean Bush",
          phone: "1-894-924-2146",
          email: "mauris.ut@protonmail.org",
          numberrange: 7,
        },
        {
            id:"5",
          name: "Eve Sykes",
          phone: "(884) 474-5520",
          email: "dolor@aol.com",
          numberrange: 9,
        },
      ];

      const [DataAwal, setDataAwal] = useState(Data)
      const [name, setName] = useState("")
      const handleInput= () =>{
        setDataAwal((prev) => [...prev,{
            id: prev.length + 1,
            name: name,
            phone: "(884) 474-5520",
            email: "dolor@aol.com",
            numberrange: 9,
          },])
    }

    const handleDelete = (id) =>{
        setDataAwal((prev) => prev.filter((row) => row.id != id))
    }
  
    return(
        <div>
            <div>
                <input onChange={(e) =>{setName(e.target.value)}}>
                </input>
                <button onClick={handleInput}> add Data
                </button>
            </div>
            <div>
                <CardData data={DataAwal} onDelete={handleDelete} onEdit={setDataAwal}></CardData>
            </div>
        </div>
    );
}

export default Manipulate