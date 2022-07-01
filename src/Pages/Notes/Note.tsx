import React from 'react';
import { useParams } from 'react-router-dom';
import { ConvertMarkDown } from '../../Common/ConvertMarkdown';
import { ConvertSyntax } from '../../Common/ConvertSyntax';
import { ROUTES } from '../../constants';

export const Note = () => {
  const { id } = useParams();
  if (/.+\.tsx?$/i.test(id)) {
    return <ConvertSyntax url={`${ROUTES.BASEPATH_NOTE}/${id}`} />
  }
  return <ConvertMarkDown url={`${ROUTES.BASEPATH_NOTE}/${id}`} imageBasePath={ROUTES.BASEPATH} />;
};
