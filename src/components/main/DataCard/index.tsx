import { getServiceInfo } from "@api";
import { white } from "@styles/color";
import { H1, P2 } from "@styles/font";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { DataCardBlock, DataCardSvg, Wrap } from "./styles";
import { DataCardProps } from "./types";

export function DataCard({
  title,
  children,
}: React.PropsWithChildren<DataCardProps>) {
  const [pathLength, setPathLength] = React.useState<number | undefined>();
  const refSvg = React.useRef<SVGSVGElement>(null);
  const refTitle = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    if (refTitle.current) {
      const titleWidth = refTitle.current.offsetWidth;
      const lineEndX = titleWidth + 8 + 8 + 1;

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute("fill", "none");
      path.setAttribute("d", `M 1 1 L 1 149 L 349 149 349 1 L ${lineEndX} 1`);
      path.setAttribute("stroke", `${white[500]}`);
      path.setAttribute("stroke-dasharray", "2");
      path.classList.add("start");
      setPathLength(path.getTotalLength());
      setTimeout(() => {
        path.classList.add("end");
      }, 100);

      refSvg.current?.appendChild(path);
    }
  }, []);

  return (
    <DataCardBlock>
      <DataCardSvg
        ref={refSvg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 350 150"
        pathLength={pathLength}
      />
      <P2 ref={refTitle} className="title">
        {title}
      </P2>
      <H1 className="value">{children}</H1>
    </DataCardBlock>
  );
}

export function DataCardWrap() {
  const { data: serviceInfo } = useQuery(["getServiceInfo"], getServiceInfo);

  return (
    <Wrap>
      {serviceInfo && (
        <>
          <DataCard title="우체통 등록 수">
            {serviceInfo.count.mailBox}
          </DataCard>
          <DataCard title="편지 작성 수">{serviceInfo.count.mail}</DataCard>
        </>
      )}
    </Wrap>
  );
}
