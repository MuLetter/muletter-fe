import { white } from "@styles/color";

export function Mail2DLetter() {
  return (
    <svg
      className="mail 2d letter"
      xmlns="https://www.w3.org/2000/svg"
      width={150}
      height={160}
      viewBox="0 0 150 160"
    >
      <path
        d="
          M 0 60
          L 0 160
          L 150 160
          L 150 60
          L 75 110
          L 0 60
          L 10 50
          M 150 60
          L 140 50
          "
        stroke={white[500]}
        strokeWidth={2}
        fill="none"
      />
      <path
        d="
          M 10 66
          L 10 0
          L 140 0
          L 140 66
          "
        stroke={white[500]}
        strokeWidth={2}
        fill="none"
      />
    </svg>
  );
}
