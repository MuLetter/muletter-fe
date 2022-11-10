import { black } from "@styles/color";
import _ from "lodash";
import React from "react";
import styled from "styled-components";
import { HelpBalloon } from "./HelpBalloon";
import { HelpItems } from "./HelpItems";

function HelpBar() {
  const [step, setStep] = React.useState<number>(0);

  React.useEffect(() => {
    const wizardBlock = document.querySelector<HTMLDivElement>(".wizard-wrap");

    if (wizardBlock) {
      const { step } = wizardBlock.dataset;
      setStep(parseInt(step!));
    }
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  });

  return (
    <Wrap className="help-bar">
      {_.map(HelpItems[step], (item, idx) => (
        <HelpBalloon {...item} key={`${item.className} helpbar`} />
      ))}
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
