import React, { useEffect, useRef, useState } from "react";

function CardData (props) {
    const [updateState, setUpdateState] = useState('')

    const handleEdit = (id)=>{
        setUpdateState(id)
    }

    const handleUpdate = (e) =>{
        props.onEdit(e)
        setUpdateState('')
    }

    const handleCancel = () =>{
        setUpdateState('')
    }

    return(
        <div>
            {props.data.map((value, index) =>{
                return updateState === value.id ? <Edit key={value.id} data={props.data} value={value} onCancel={handleCancel} onEdit={handleUpdate}/> :
                (<div key={value.id}>
                <div>{value.name}</div>
                <button onClick={() => {handleEdit(value.id)}}>Edit</button>
                <button onClick={() =>{props.onDelete(value.id)}}>delete</button>
                </div>)
            } )}
        </div>
    );

}

function Edit (props){

    const [name, setName] = useState('')
    const handleSubmit= (e) => {
        console.log ("S")
        const newList = props.data.map(li =>(li.id === props.value.id ? {...li, name : name} : li))
        props.onEdit(newList)
    }
    useEffect(() =>{
        setName(props.value.name)
    }, [props.value.name])

    return (<div>
        <input type="text" onChange={(e) => {setName(e.target.value)}} value={name}></input>
        <button onClick={handleSubmit}>Update</button>
        <button onClick={props.onCancel}>Cancel</button>
    </div>);
}

export default CardData