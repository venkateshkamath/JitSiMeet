import { useState } from "react";

import "./App.css";
import { JitsiMeeting } from "@jitsi/react-sdk";

function App() {
  const domain = "meet.jit.si";
  const roomName =
    "vpaas-magic-cookie-53b97faf18ef4cc0abbaa4908b2dd81d/Nsnfksnfksnfksnfksnfskfnskfn";
  return (
    <div
      style={{
        height: "100vh",
        width: "50vw",
        display: "grid",
        flexDirection: "column",
      }}
    >
      {/* <h1>Jitsi Meet</h1> */}
      <JitsiMeeting
        domain={domain}
        roomName={roomName}
        containerStyles={{ display: "flex", flex: 1 }}
      />
    </div>
  );
}

export default App;
