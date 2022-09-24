import { white } from "@styles/color";
import { P4 } from "@styles/font";
import React from "react";
import styled from "styled-components";
import Process from "./Process";
import { StepStyleProps } from "./types";

function Step({ isLast, title }: StepStyleProps) {
  return (
    <>
      <StepWrap>
        <svg
          xmlns="https://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
        >
          <circle
            cx={6}
            cy={6}
            r={5}
            strokeWidth={2}
            fill="none"
            stroke={white[500]}
          />
        </svg>
        <P4>{title}</P4>
      </StepWrap>
      {!isLast && (
        <StepLine xmlns="https://www.w3.org/2000/svg" viewBox="0 0 100 2">
          <line
            x1={0}
            y1={1}
            x2={100}
            y2={1}
            strokeWidth={2}
            stroke={white[500]}
            vectorEffect="non-scaling-stroke"
          />
        </StepLine>
      )}
    </>
  );
}

const StepLine = styled.svg`
  flex: 1;
`;

const StepWrap = styled.div`
  display: flex;
  width: 100px;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
`;

export function Wizard() {
  const [step, setStep] = React.useState<number>(0);

  const nextStep = React.useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const prevStep = React.useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);

  return (
    <Block>
      {step !== 0 && (
        <button className="prev" type="button" onClick={prevStep} />
      )}
      {step + 1 !== Process.length && (
        <button className="next" type="button" onClick={nextStep} />
      )}

      <StepBlock>
        {Process.map(({ title }, idx) => (
          <Step
            key={`wizard-nav-${idx}`}
            title={title}
            isLast={idx + 1 === Process.length}
          />
        ))}
      </StepBlock>
      <Content>{Process[step].component}</Content>
    </Block>
  );
}

const Block = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${white[500]};

  & > button {
    position: absolute;
    height: 100%;
    top: 0;
    width: 100px;

    border: none;
    cursor: pointer;
  }

  & > .prev {
    left: 70px;
    border-radius: 0 0 0 8px;
    background: transparent;
    transition: 0.5s;
    &:hover,
    &:focus {
      background: linear-gradient(
        270deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.4) 100%
      );
    }
  }

  & > .next {
    right: 0;
    border-radius: 0 8px 8px 0;
    background: transparent;
    transition: 0.5s;
    &:hover,
    &:focus {
      background: linear-gradient(
        270deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }

  & > div {
    width: calc(100% - 200px);
  }
`;

const Content = styled.div`
  margin: 24px;
  flex: 1;
`;

const StepBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  column-gap: 8px;
`;

export default Wizard;
