import { createClient } from '@sanity/client';

import { Dataset, PROSJEKT_ID } from './constants';

export const client = () =>
  createClient({
    projectId: PROSJEKT_ID,
    dataset: hentDatasett(),
    useCdn: true,
    apiVersion: '2022-07-04',
  });

export const hentDatasett = (): Dataset => {
  const datasett = window.location.pathname.split('/')[1];

  if (!erDataset(datasett)) {
    throw new Error(`Datasettet: ${datasett} som forsøkes hentes fra url-path finnes ikke!`);
  }

  return datasett;
};

const erDataset = (tekst: string): tekst is Dataset => {
  const datasetVerdier = Object.values(Dataset).map(dataset => dataset.valueOf());

  return datasetVerdier.includes(tekst);
};
