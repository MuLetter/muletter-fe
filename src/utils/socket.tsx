import { authState } from "@store/atom";
import React from "react";
import { useRecoilValue } from "recoil";
import { connect, Socket } from "socket.io-client";

export function SocketListener() {
  const auth = useRecoilValue(authState);

  React.useEffect(() => {
    let io: Socket | null = null;
    if (auth) {
      const API_SERVER = process.env.REACT_APP_API_SERVER!;
      const SOCKET_PATH = process.env.REACT_APP_SOCKET_PATH!;
      const token = localStorage.getItem("muletter-token")!;

      io = connect(`${API_SERVER}`, {
        path: SOCKET_PATH,
        transports: ["polling"],
        extraHeaders: {
          authorization: token,
        },
      });

      io.on("connect", () => {
        console.log("io connected!");
      });
    }

    return () => {
      if (io) io.disconnect();
    };
  }, [auth]);

  return <></>;
}
