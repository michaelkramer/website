import React from 'react';
import { useParams } from 'react-router-dom';
import { ConvertMarkDown } from '../../Common/ConvertMarkdown';

const basePath = `${process.env.PUBLIC_URL}/notes`;

export const Note = () => {
  const { id } = useParams();
  return <ConvertMarkDown url={`${basePath}/${id}`} imageBasePath={basePath} />;
};
