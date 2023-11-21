import React,{useState} from 'react'

const Shopping = () => {
    const[itemlist,setItemlist]=useState({
        id:'',
        item:'',
    })
    const {id,item}=itemlist;
    const assignitem = (e) =>{
        setItemlist({
        
            ...itemlist,
            [e.target.value]:e.target.value
        })
    }

    return (
    <>
    <h3>Add items</h3>
    <label >Enter Id:
    <input type="text" name='id' value={id} onChange={assignitem}/> 
    </label>
    <hr />
    <label>Enter item Name: 
    <input type="text" name='item' value={item} onChange={assignitem} /> 
    </label>
    <hr />
    <button>Add</button>
    <hr />
    <h2>Here are the entered values </h2>
    <h3>{id} {item}</h3>
    </>
  )
}

export default Shopping