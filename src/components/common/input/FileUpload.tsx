import { FileUploadBlock } from "./styles";
import { IoIosImages } from "react-icons/io";
import { white } from "@styles/color";
import React from "react";
import { FileInputProps } from "./types";

export function FileUpload({
  setImage,
  mainImage,
  setMainImage,
}: FileInputProps) {
  const fileChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const fileReader = new FileReader();

      fileReader.onload = function (e) {
        const src = e.target?.result;

        console.log(src);
        setMainImage(src as any);
      };

      if (e.target.files && e.target.files.length > 0) {
        fileReader.readAsDataURL(e.target.files[0]);
        setImage(e.target.files[0]);
      }
    },
    [setImage, setMainImage]
  );

  return (
    <FileUploadBlock>
      {mainImage && <img src={mainImage} alt="user upload" />}
      <label htmlFor="image" className="file-uploader">
        {!mainImage && <IoIosImages size={100} color={white[600]} />}
      </label>

      <input id="image" type="file" onChange={fileChange} />
    </FileUploadBlock>
  );
}
