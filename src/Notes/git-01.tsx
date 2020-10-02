import React from "react";
import { Typography } from "antd";
const { Title, Text } = Typography;
const input = `
<!-- Git Refresh .gitignore files -->

# So you changed your .gitignore but the files are still being pushed??

You will have to clear the existing git \`cache\` first.

### Remove the cache of all the files

\`\`\`
git rm -r --cached .
\`\`\`

### Remove the cache of specific file

\`\`\`
git rm -r --cached <file_name.ext>
\`\`\`

Once you clear the existing cache, add/stage file/files in the current directory and commit

\`\`\`
git add . // To add all the files
git add <file_name.ext> // To add specific file
git commit -m "Suitable Message"
\`\`\`

This works for both adding a file that was once ignored as well as ignoring a file that was once tracked

`;
const note1 = () => {
  return (
    <Typography>
      <Title>
        So you changed your .gitignore but the files are still being pushed??
      </Title>
      <Text>
        You will have to clear the existing git <Text code={true}>cache</Text>{" "}
        first.
      </Text>
      <Title level={3}>Remove the cache of all the files</Title>
      <Text code={true}>git rm -r --cached .</Text>
      <Title level={3}>Remove the cache of specific file</Title>
      <Text code={true}>git rm -r --cached &lt;file_name.ext&gt;</Text>
      <Title level={3}>
        Once you clear the existing cache, add/stage file/files in the current
        directory and commit
      </Title>
      <pre>
        git add . // To add all the files git add &lt;file_name.ext&gt; // To
        add specific file git commit -m "Suitable Message"
      </pre>
    </Typography>
  );
};

export default note1;
