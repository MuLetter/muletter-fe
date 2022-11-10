import { white } from "@styles/color";
import { P3 } from "@styles/font";
import React from "react";
import styled, { css } from "styled-components";
import { HelpBalloonProps, HelpBalloonStyleProps } from "./types";

function HelpBalloon({ className, text }: HelpBalloonProps) {
  const [x, setX] = React.useState<number>();
  const [y, setY] = React.useState<number>();
  const [width, setWidth] = React.useState<number>();
  const refText = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    const elText = document.querySelector<HTMLParagraphElement>(
      `.help-text-${className}`
    );
    if (elText) {
      const { width } = elText.getBoundingClientRect();

      const elTarget = document.querySelector(`.${className}`);
      if (elTarget) {
        const { x, y, width: targetWidth } = elTarget.getBoundingClientRect();

        setX(x + targetWidth / 2 - width / 2 - 24);
        setY(y - 72);
        setWidth(width + 48);
      }
    }
  }, [className]);

  return (
    <Wrap width={width} x={x} y={y}>
      <HelpSvg xmlns="http://www.w3.org/2000/svg" width={width}>
        {width && (
          <path
            d={[
              "M 0 10",
              "L 0 38",
              "C 0 38 0 48 8 48",
              `L ${width / 2 - 8} 48`,
              `L ${width / 2} 62`,
              `C ${width / 2} 62 ${width / 2 + 2} 64 ${width / 2 + 4} 62`,
              `L ${width / 2 + 8} 48`,
              `L ${width - 8} 48`,
              `C ${width - 8} 48 ${width} 48 ${width} 38`,
              `L ${width} 10`,
              `C ${width} 10 ${width} 0 ${width - 8} 0`,
              "L 8 0",
              "C 8 0 0 0 0 10",
            ].join(" ")}
          />
        )}
      </HelpSvg>
      <P3 ref={refText} className={`help-text-${className}`}>
        {text}
      </P3>
    </Wrap>
  );
}

const Wrap = styled.div<HelpBalloonStyleProps>`
  position: absolute;
  width: 1000px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${white[500]};

  & > * {
    position: absolute;
  }

  & > .help-text {
  }

  ${({ width, x, y }) =>
    width && x && y
      ? css`
          width: ${width}px;
          top: ${y}px;
          left: ${x}px;
        `
      : css`
          opacity: 0;
        `}
`;

const HelpSvg = styled.svg<HelpBalloonStyleProps>`
  top: 0;
  left: 0;

  & > path {
    width: 250px;
    height: 64px;
    fill: none;

    stroke: #fff;
    stroke-width: 2px;
  }
`;

export { HelpBalloon };
