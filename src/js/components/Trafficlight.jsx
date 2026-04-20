import React, {useState} from "react";


export const Trafficlight  = () =>{
    const[color, setColor] = useState("red")
    const [purple, setPurple]= useState(false)

    const cambiarColor = () =>{
        if (color === "red") {
            setColor("yellow");
        } else if (color === "yellow") {
           setColor("green") 
        }else if (color === "green" && setPurple) {
            setColor("purple")
        }else{
            setColor("red")
        }
    }
  
    return(
        <main>
            <div className="box"></div>
            <div className="light-contenedor">
                <div className={`light red ${color === ("red") ? "active"  : ""}`} onClick={() => {
                    setColor("red")
                }}></div>
                <div className={`light yellow ${color === ("yellow") ? "active" : ""}`} onClick={() =>{
                    setColor("yellow")
                }}></div>
                <div className={`light green ${color === ("green") ? "active" : ""}`} onClick={() =>{
                    setColor("green")
                }}></div>

                {purple && (
                    <div className={`light purple ${color === ("purple") ? "active" : ""}`} onClick={() =>{
                        setColor("purple")
                    }}></div>
                )}
               
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-primary me-2 br-3" onClick={cambiarColor}>Cambiar color</button>
                <button className="btn btn-secondary" onClick={() => setPurple(true)}>Añadir color</button>
            </div>

            

        </main>
    )
}