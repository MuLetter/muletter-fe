import { black } from "@styles/color";
import React from "react";
import styled from "styled-components";
import { HelpBalloon } from "./HelpBalloon";

function Step1Help() {
  return (
    <Step1HelpWrap>
      <HelpBalloon />
    </Step1HelpWrap>
  );
}

const Step1HelpWrap = styled.div`
  position: fixed;
`;

function HelpBar() {
  const [step, setStep] = React.useState<number>();

  React.useEffect(() => {
    const wizardBlock = document.querySelector<HTMLDivElement>(".wizard-wrap");

    if (wizardBlock) {
      const { step } = wizardBlock.dataset;
      setStep(parseInt(step!));
    }
  }, []);

  return (
    <Wrap className="help-bar">
      <Step1Help />
    </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  background: ${black[900]};
  z-index: 250;
`;

export { HelpBar };
