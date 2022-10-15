import { black } from "@styles/color";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { animate, init } from "./init";
import { MapComponentProps } from "./types";

export function MapComponent({ mailBoxes }: MapComponentProps) {
  const refMap = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const onClick = React.useCallback(
    (name: string) => {
      navigate(`/mailbox/${name}`);
    },
    [navigate]
  );

  React.useEffect(() => {
    if (refMap.current) {
      init(refMap, mailBoxes, onClick);
      animate();
    }
  }, [mailBoxes, onClick]);

  return <Wrap ref={refMap} className="map"></Wrap>;
}

const Wrap = styled.div`
  position: relative;
  width: 900px;
  height: 450px;

  margin: 0 auto;

  border-radius: 16px;

  background: linear-gradient(90deg, #2880d8 0%, #ac73cf 51.56%, #ee68a4 100%);
  box-shadow: 4px 4px 4px ${black[900]};
  z-index: 2;
`;
