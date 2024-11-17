import React from "react";

function Metrics() {
    return (
      <div className="h-screen" style={{ border: "1px solid #ccc", padding: "10px"}}>
        <iframe className="h-screen"
          src="http://detulie.space/stat/public-dashboards/c33cba9873c04003ba28abf14e0ec2f9"
          title="Embedded Site"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </div>
    );
  }
  
  export default Metrics;