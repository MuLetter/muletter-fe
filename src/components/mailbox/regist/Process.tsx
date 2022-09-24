import ContentRegist from "./ContentRegist";
import { ProcessItem } from "./types";

function Search() {
  return <>검색</>;
}

function Confirm() {
  return <>확인</>;
}

const Process: ProcessItem[] = [
  {
    title: "우체통 정보 입력",
    component: <ContentRegist />,
  },
  {
    title: "우체통 음악 등록",
    component: <Search />,
  },
  {
    title: "우체통 정보 확인",
    component: <Confirm />,
  },
];

export default Process;
