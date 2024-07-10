import { useState,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length,setlength]=useState(8)
  const[numberAllowed,setNumberAllowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false)
  const[password,setPassword]=useState("")

  //useref hook
  const passwordRef=useRef(null);

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ACDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+{}|~`[]"

    for (let i = 0; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(char)
      
    }

    setPassword(pass)

  },[length
    ,numberAllowed,charAllowed,setPassword])

  const copypasswordtoclipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length+1); //setting range

    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  
  return (
    <>
  
     <div
    className='flex justify-center flex-col w-50 h-90 shadow-md rounded-lg px-4 my-8 text-orange-500 bg-black gap-5'>


<h1 className='text-4xl text-center px-2 py-2 text-white'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 justify-center'>
        
        <input type="text" value={password} className='outline-none w-full py-1 px-1'  placeholder='password' readOnly
        ref={passwordRef}
        />

        <button
        onClick={copypasswordtoclipboard}
        className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0'>Copy</button>

        </div> 

        <div className='flex-col text-sm gap-x-2 px-4 py-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}} />
            <label>Length:{length}</label>
          </div>

          <div className='flex-col items-center gap-x-1'>

            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=>!prev);
              }}
            
            />
            <label htmlFor="numberInput">Numbers</label>
          

            <div className='flex-col items gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id="characcterInput"
          onChange={()=>{
            setCharAllowed((prev)=> !prev);
          }}
          />
            <label htmlFor="characterInput"> Characters</label>
        </div>
          </div>


        </div>
       
    </div>
    </>
  )
}

export default App
