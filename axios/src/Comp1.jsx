import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Comp1() {
    const [num, setNum ] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    const generate = ()=>{
        let random = Math.floor( Math.random()*200)
        setNum(random)
    }

    useEffect(()=>{
        async function getdata(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            
            setName(res.data.name);
            setMoves(res.data.moves.length)
        }

        getdata()
    }, [num])

    return (
       
        <>  
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignContent:"center"}}>
        <h1>You have choose <span style={{color:"red"}}>{name}</span></h1>
            <h2>and {name} has <span style={{color:"blue"}}>{moves} </span>moves😎</h2>
            <select name="pokemon" id="select" value={num} onChange={(e)=> setNum(e.target.value)} style={{"height":"10vw", "width":"30vw","fontSize":"3vw","letterSpacing":"0.5px"}}>
                <option value="0">also can select from here</option>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select><br/><br/>
            <button onClick={generate}>Luckey Button</button>
        </div>
            
        </>
    )
}

export default Comp1
