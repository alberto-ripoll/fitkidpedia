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
    <div className="bg-white shadow rounded-lg w-full px-5 pt-3 pb-5 md:h-1/4 h-1/4">
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
    </div>
  );
}
