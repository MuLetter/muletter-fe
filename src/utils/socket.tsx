import { authState, letterAlertState } from "@store/atom";
import { LetterAlert } from "@store/ui/types";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { connect, Socket } from "socket.io-client";

export function SocketListener() {
  const auth = useRecoilValue(authState);
  const setLetterAlert = useSetRecoilState(letterAlertState);

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

        io!.on("write-mail-success", (args: LetterAlert) => {
          console.log(args);
          setLetterAlert(args);
        });

        io!.on("disconnect", () => {
          console.log("is disconnected!");
        });
      });
    }

    return () => {
      if (io) io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return <></>;
}
