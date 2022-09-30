import { letterAlertState } from "@store/atom";
import { black, white } from "@styles/color";
import { fontStyles } from "@styles/font";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";

function Letter2DAlert() {
  const [alert, setAlert] = useRecoilState(letterAlertState);
  const navigate = useNavigate();

  const onNavigate = React.useCallback(() => {
    if (alert && alert.navigatePath) {
      navigate(alert.navigatePath);
      setAlert(null);
    }
  }, [alert, navigate, setAlert]);

  React.useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(null);
      }, 5000);
    }
  }, [alert, setAlert]);

  return alert ? (
    <Wrap className="letter-2d-alert">
      <Letter2DAlertSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150 150"
        onClick={onNavigate}
      >
        <path
          d="
      M 0 50
      L 0 150
      L 150 150
      L 150 50
      L 75 100
      L 0 50
      "
          stroke={white[500]}
          strokeWidth={2}
          fill="none"
        />
        <path
          d="
      M 0 50
      L 150 50
      "
          stroke={white[500]}
          strokeWidth={2}
          fill="none"
          className="lid-bottom"
        />
        <path
          d="
      M 150 50
      L 75 100
      L 0 50
      "
          stroke={white[500]}
          strokeWidth={2}
          fill="none"
          className="lid"
        />
        <text
          x="75"
          y="75"
          textAnchor="middle"
          alignmentBaseline="central"
          fill={white[500]}
        >
          {alert.message}
        </text>
      </Letter2DAlertSVG>
    </Wrap>
  ) : (
    <></>
  );
}

const Wrap = styled.div`
  position: fixed;
  bottom: 48px;
  right: 48px;

  z-index: 50000;
`;

const AlertLidAni = keyframes`
    from {
        transform: rotateX(0deg);
        opacity: 1;
    } to {
        transform: rotateX(180deg);
        opacity: .3;
    }
`;

const AlertLidBottomAni = keyframes`
    from {
        opacity: 1;
    } to {
        opacity: .3;
    }
`;

const AlertTextAni = keyframes`
    from {
        transform: rotateZ(-90deg) translateX(0);
        opacity: 0;
    } to {
        transform: rotateZ(-90deg) translateX(48px);
        opacity: 1;
    }
`;

const Letter2DAlertSVG = styled.svg`
  width: 150px;
  height: 150px;
  overflow: visible;

  filter: drop-shadow(0px 0px 8px ${black[500]});

  & text {
    transform-origin: 50% 50%;
    animation: ${AlertTextAni} 0.5s linear forwards;
    ${fontStyles["tag1"]};
  }
  & > .lid {
    transform-origin: 75px 50px;
    animation: ${AlertLidAni} 0.4s linear forwards;
  }
  & > .lid-bottom {
    animation: ${AlertLidBottomAni} 0.4s linear forwards;
  }
  cursor: pointer;
`;

export default Letter2DAlert;
