import { white } from "@styles/color";
import { P4 } from "@styles/font";
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled, { css } from "styled-components";
import Process from "./Process";
import { StepStyleProps, WizardProps } from "./types";

function Step({ isLast, title, isNow, isCompleted }: StepStyleProps) {
  return (
    <>
      <StepWrap isNow={isNow}>
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
        <StepLine
          xmlns="https://www.w3.org/2000/svg"
          viewBox="0 0 100 2"
          isCompleted={isCompleted}
        >
          <line
            x1={0}
            y1={1}
            x2={100}
            y2={1}
            strokeWidth={2}
            stroke={white[900]}
            vectorEffect="non-scaling-stroke"
          />
          <line
            className="completed-line"
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

const StepLine = styled.svg<{ isCompleted: boolean }>`
  flex: 1;

  & > .completed-line {
    transform: scaleX(0);
    transition: 0.3s;
  }
  ${({ isCompleted }) =>
    isCompleted &&
    css`
      & > .completed-line {
        transform: scaleX(1);
      }
    `}
`;

const StepWrap = styled.div<{ isNow: boolean }>`
  display: flex;
  width: 100px;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
  transition: 0.6s;
  opacity: 0.3;
  overflow: visible;

  ${({ isNow }) =>
    isNow &&
    css`
      opacity: 1;
      & > svg {
        overflow: visible;
      }
      & circle {
        stroke-width: 4px;
      }
    `}
`;

export function Wizard({ onAlert }: WizardProps) {
  const [step, setStep] = React.useState<number>(0);
  const refNextConfirm = React.useRef<(() => Promise<boolean>) | null>(null);

  const nextStep = React.useCallback(async () => {
    if (refNextConfirm.current) if (!(await refNextConfirm.current())) return;

    if (step < 2) {
      setStep((prev) => prev + 1);
    } else {
      onAlert();
    }
  }, [step, onAlert]);

  const prevStep = React.useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);

  const setNextConfirm = React.useCallback(
    (nextConfirm: (() => Promise<boolean>) | null) => {
      refNextConfirm.current = nextConfirm;
    },
    []
  );

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
            isNow={idx <= step}
            isCompleted={idx < step}
          />
        ))}
      </StepBlock>
      <Content>
        <CSSTransition timeout={300} classNames={"right"}>
          {Process[step].component({ setNextConfirm, next: nextStep })}
        </CSSTransition>
      </Content>
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

const Content = styled(TransitionGroup)`
  margin: 24px;
  /* flex: 1; */
  height: calc(100% - 24px - 32px);

  display: flex;
  flex-direction: column;
`;

const StepBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  column-gap: 8px;
`;

export default Wizard;
