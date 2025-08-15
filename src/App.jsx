import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prev => prev + 1);
  }

  function decrement() {
    setCount(prev => prev - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f4f8",
      margin: 0,
      padding: 0
    }}>
      <h1 style={{ fontSize: "4rem", marginBottom: "20px" }}>{count}</h1>
      <div>
        <button
          onClick={increment}
          style={{ padding: "10px 20px", fontSize: "1.2rem", margin: "5px" }}
        >
          Increment
        </button>
        <button
          onClick={reset}
          style={{ padding: "10px 20px", fontSize: "1.2rem", margin: "5px" }}
        >
          Reset
        </button>
        <button
          onClick={decrement}
          style={{ padding: "10px 20px", fontSize: "1.2rem", margin: "5px" }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;




// function App () {
//   const [count, setCount] = useState(0)
//   const [IntervalId, setIntervalId] = useState(0)

//   function increment(){
//     setIntervalId(IntervalId=
//     setInterval(() => {
//           setCount((prevState)=>prevState+1)

//     }, 1000)
//     )



//   }
//   function decrement(){
//     setIntervalId(IntervalId=
//  setInterval(() =>
//       setCount((prevState)=>
//         prevState-1
//     ), 1000)
//     )
   
//   }
//   function reset(){
//     setCount(0)
//   }
//   function stop(){
//     clearInterval(
//       IntervalId
//     )
  
//   }
//   return (
//     <>

//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={stop}>stop</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
    
//     </>
//   )
//   }
//   export default App











// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);

//   function increment() {
//     // Avoid multiple intervals
//     if (intervalId) return;

//     const id = setInterval(() => {
//       setCount(prev => prev + 1);
//     }, 1000);
//     setIntervalId(id);
//   }

//   function decrement() {
//     // Avoid multiple intervals
//     if (intervalId) return;

//     const id = setInterval(() => {
//       setCount(prev => prev - 1);
//     }, 1000);
//     setIntervalId(id);
//   }

//   function reset() {
//     setCount(0);
//   }

//   function stop() {
//     clearInterval(intervalId);
//     setIntervalId(null);
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Start Incrementing</button>
//       <button onClick={decrement}>Start Decrementing</button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={stop}>Stop</button>
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const [mode, setMode] = useState(null); // "increment" or "decrement"

//   function start(modeType) {
//     if (intervalId || isPaused) return;

//     const id = setInterval(() => {
//       setCount(prev => (modeType === "increment" ? prev + 1 : prev - 1));
//     }, 1000);

//     setIntervalId(id);
//     setMode(modeType);
//     setIsPaused(false);
//   }

//   function pause() {
//     if (intervalId) {
//       clearInterval(intervalId);
//       setIntervalId(null);
//       setIsPaused(true);
//     }
//   }

//   function resume() {
//     if (!intervalId && isPaused && mode) {
//       const id = setInterval(() => {
//         setCount(prev => (mode === "increment" ? prev + 1 : prev - 1));
//       }, 1000);

//       setIntervalId(id);
//       setIsPaused(false);
//     }
//   }

//   function stop() {
//     clearInterval(intervalId);
//     setIntervalId(null);
//     setMode(null);
//     setIsPaused(false);
//   }

//   function reset() {
//     stop();
//     setCount(0);
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => start("increment")}>Start Incrementing</button>
//       <button onClick={() => start("decrement")}>Start Decrementing</button>
//       <button onClick={pause} disabled={!intervalId}>Pause</button>
//       <button onClick={resume} disabled={intervalId || !isPaused}>Resume</button>
//       <button onClick={stop}>Stop</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default App;



// import {useState} from "react"

// function App() {
//   const [count, setCount] = useState(0)
  
//   // const [name,setName] = useState("")
//   // const [color,setColors]=useState("")
//   // const [arr,setArray] =useState(["hii","hello","world","have a nice day","iam ","srikanth","as a","full stack developer"])
//   const arr =["hii","hello","world","have a nice day","iam ","srikanth","as a","full stack developer","from","hyderabad","telangana, India"]
// const colors =["blue","green" ,]
//  const name = arr[count % arr.length];    // Cycles through arr
//   const color = colors[count % colors.length]; // Cycles through colors

//   function increment(){

//   setCount(count+1)
//   // setName(arr[count])
//   // setColors(colors[count])

// }

//   return (
//     <div>
// <h1 style={{ color: count > 0 ? color : "" }} col><span style={{color:"black"}}>{count}</span> - {count > 0 ? name : ""}</h1>
// <button onClick={increment}>increment</button>
// <button>reset</button>
// <button>decrement</button>

//     </div>

//   )
// }
// export default  App