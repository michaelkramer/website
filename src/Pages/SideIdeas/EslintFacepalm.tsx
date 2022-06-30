import React from 'react';
import { ConvertMarkDown } from '../../Common/ConvertMarkdown';

const basePath = "https://raw.githubusercontent.com/michaelkramer/eslint-plugin-facepalm/master";

export const EslintFacepalm = () => {

  return <ConvertMarkDown url={`${basePath}/README.md`} imageBasePath={basePath} />;
};
