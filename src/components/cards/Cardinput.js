import React from 'react';
import{cardData} from "./data"; 



function Cardinput() {
    return (
    <> 
     <ol>
    {cardData.map((data, key) => {   
         
          return (
         
        <div key={key} className="domcard">
                <div key={data.id}>
                <h3> {data.heading}, {data.id}</h3>
                <h4>{data.made}</h4>
				<h6>{data.time}</h6>
                <button>View on site</button>
                </div>
           </div>
          );
        })}
      </ol>
    </>
  );
};

export default Cardinput;
   
