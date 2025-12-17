import {useState} from 'react'
function Counter(){
    const [count, setCnt] = useState(0)
    const increase = () =>{
        setCnt(count+1)
    }
    
    return <>
    <h1>{count}</h1>
    <button onClick={increase}>increase</button>
   
    </>
}
export default Counter;