import React from "react";

function Metrics() {
    return (
      <div className="h-screen">
        <iframe className="h-screen"
          src="http://detulie.space/stat/public-dashboards/f595916889c547a38a0d1f9fae9601f4?theme=light"
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