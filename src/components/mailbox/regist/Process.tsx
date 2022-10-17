import Confirm from "./Confirm";
import ContentRegist from "./ContentRegist";
import Search from "./Search";
import { ProcessItem } from "./types";

const Process: ProcessItem[] = [
  {
    title: "우체통 정보 입력",
    component: (wizardProps) => <ContentRegist {...wizardProps} />,
  },
  {
    title: "우체통 음악 등록",
    component: (wizardProps) => <Search {...wizardProps} />,
  },
  {
    title: "우체통 정보 확인",
    component: (wizardProps) => <Confirm next={wizardProps.next} />,
  },
];

export default Process;
