import path from "path";
import fs from "fs";

//joining path of directory
const directoryPath = path.join(__dirname, "notes");

//passsing directoryPath and callback function
fs.readdir(directoryPath, (err: any, files: string[]) => {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach((file: string) => {
    // Do whatever you want to do with the file
    const filePath = path.join(__dirname, "notes", file);
    const data = fs.readFileSync(filePath);
    const reactData = createFile(data.toString());
    fs.writeFileSync(
      path.join(__dirname, file.replace("md", "tsx")),
      reactData
    );
    console.log(data.toString());
  });
});

function createFile(markdown: string) {
  // eslint-disable-next-line no-useless-escape
  markdown = markdown.replace(/`/g, "\\`");
  const reactData = `
import React from "react";
import ReactMarkdown from "react-markdown";

const input = \`
${markdown}
\`;
const note1 = () => {
    return (
        <ReactMarkdown>{input}</ReactMarkdown>
    );
    };
    
    export default note1;
    
`;
  return reactData;
}

export {};
