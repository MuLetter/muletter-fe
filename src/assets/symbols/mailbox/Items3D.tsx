import styled from "styled-components";

export const MainItem = styled.div``;
export const SideItem = styled.div``;
export function FrontItem() {
  return (
    <MainItem style={{ background: "transparent" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 3 2"
      >
        <path
          d="M 0 0
           V 1.75
           H 3 
           V 0
           Z"
          stroke="white"
          strokeWidth={50}
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </MainItem>
  );
}
