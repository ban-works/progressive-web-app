import React, { useState, useEffect } from "react";

function useIsOfflinePWA() {
  const [isOnline, setOnlineStatus] = useState(true);

  // https://stackoverflow.com/questions/44756154/progressive-web-app-how-to-detect-and-handle-when-connection-is-up-again
  useEffect(() => {
    const setFromEvent = function (event: any) {
      if (event.type === "online") {
        setOnlineStatus(true);
      } else if (event.type === "offline") {
        setOnlineStatus(false);
      }
    };

    window.addEventListener("online", setFromEvent);
    window.addEventListener("offline", setFromEvent);

    return () => {
      window.removeEventListener("online", setFromEvent);
      window.removeEventListener("offline", setFromEvent);
    };
  });

  return !isOnline;
}

export default useIsOfflinePWA;
