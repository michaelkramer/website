import React, { useState, useEffect } from "react";
import Note1 from "./note1";
const ListNotes = () => {
  const [files, setFiles] = useState<{ name: string; component: any }[]>([]);

  useEffect(() => {
    const filesArray: { name: string; component: any }[] = [];
    filesArray.push({ name: "Note 1", component: Note1 });
    setFiles(filesArray);
    return () => {};
  }, []);
  return (
    <div>
      <h3>ListNotes</h3>
      {files.map((file, idx) => (
        <React.Fragment key={idx}>
          <div>{file.name}</div>
          <div>
            <file.component />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ListNotes;
