import React from "react";


const Form = ({address,setAddress,result,setResult}) =>{
    // functions
    const inputHandler = (e) =>{
        console.log(e.target.value);
        setAddress(e.target.value)
    };
    const submitAddressHandler = (e) =>{
        e.preventDefault();
        fetch(`${address}`)
        .then(res =>res.json())
        .then(result =>{
            setResult(result);
            console.log(result);
        })
    };
    // end functions

    return(
        <div className="container">
        <form className="form-container">
            <input onChange={inputHandler}size='60' type='text'className="address-input"placeholder="Address URL here..."></input>
            <button onClick={submitAddressHandler}type="submit" className="get-btn">GET</button>
        </form>
        <div className="card">
        {(typeof result !== "undefined")?
            (result.map((item)=>(
                <div className="cards-list">
                <ul key={item.id}>
                    <div className="cards-container">
                        <p>{item.name}</p>
                        <p>Location: {item.location}</p>
                        <p>IP:{item.ip}</p>
                        <p>MAC address{item.mac}</p>
                        <div className="vertical-center">
                            <button className="btn">Edit</button>
                            <button className="btn">Save</button>
                        </div>
                        
                    </div>
                </ul>
                </div>
            ))
            ):(<p>waiting data...</p>)} 
            </div>
        </div>

    );
};

export default Form