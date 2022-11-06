import { OKAlert } from "@component/common/alert/OKAlert";
import { ControlWizardContext } from "@context";
import React from "react";

export function RegistOKAlert() {
  const { selectedTracks } = React.useContext(ControlWizardContext);

  return (
    <OKAlert
      title="우체통이 등록 되었어요."
      subtitle="당신만을 위한 음악들을 적어서 보내드릴게요."
      tracks={selectedTracks}
    />
  );
}
