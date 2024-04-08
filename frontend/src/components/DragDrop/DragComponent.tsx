import { CustomDragDrop } from "./CustomContainer";
import { useState } from "react";

interface FileItem {
  name: string;
  photo: string;
  type: string;
  size: number;
}

export default function DragComponent() {
  const [ownerLicense, setOwnerLicense] = useState<FileItem[]>([]);

  function uploadFiles(files: FileItem[]) {
    setOwnerLicense([...ownerLicense, ...files]);
  }

  function deleteFile(indexImg: number) {
    const updatedList = ownerLicense.filter((_, index) => index !== indexImg);
    setOwnerLicense(updatedList);
  }

  return (
    <div className="bg-white shadow rounded-lg w-full px-5 pt-3 pb-5">
      <div className="pb-[8px] border-b border-[#e0e0e0]">
        <h2 className="text-black text-[17px] font-[600]">
          Sube tu video
        </h2>
      </div>
      <CustomDragDrop
        ownerLicense={ownerLicense}
        onUpload={uploadFiles}
        onDelete={deleteFile}
        count={1}
        formats={["mp4", "avi", "mov", "flv", "wmv", "mkv", "3gp", "webm"]}
      />
      <hr className="my-4" />
      <h2 className="text-black text-[17px] font-[600]">O añade un enlace al vídeo</h2>
      <div className="mt-4">
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] focus:outline-none focus:border-[#5E62FF]"
          placeholder="https://www.youtube.com/watch?v=123456789"
        />
      </div>
    </div>
  );
}
