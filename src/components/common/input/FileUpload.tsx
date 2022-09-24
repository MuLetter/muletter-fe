import { FileUploadBlock } from "./styles";
import { IoIosImages } from "react-icons/io";
import { white } from "@styles/color";
import React from "react";

export function FileUpload() {
  const [image, setImage] = React.useState<Blob | null>(null);
  const [mainImage, setMainImage] = React.useState<string | null | undefined>(
    null
  );
  const fileChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const fileReader = new FileReader();

      fileReader.onload = function (e) {
        const src = e.target?.result;

        setMainImage(src as any);
      };

      if (e.target.files && e.target.files.length > 0) {
        fileReader.readAsDataURL(e.target.files[0]);
        setImage(e.target.files[0]);
      }
    },
    []
  );

  return (
    <FileUploadBlock>
      {mainImage && <img src={mainImage} alt="user upload" />}
      <label htmlFor="image">
        {!mainImage && <IoIosImages size={100} color={white[600]} />}
      </label>

      <input id="image" type="file" onChange={fileChange} />
    </FileUploadBlock>
  );
}
