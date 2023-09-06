import { createClient } from '@sanity/client';

export enum Dataset {
  PROD = 'production',
  TEST = 'test',
}

export const PROSJEKT_ID = 'by26nl8j';

// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'
export const client = () =>
  createClient({
    projectId: PROSJEKT_ID,
    dataset: hentDatasett(),
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2022-07-04', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  });

export const hentDatasett = (): Dataset => {
  const datasett = window.location.pathname.split('/')[1];

  if (!erDataset(datasett)) {
    throw new Error('datasett er ikke et Datasett!');
  }

  return datasett;
};

const erDataset = (tekst: string): tekst is Dataset => {
  const datasetVerdier = Object.values(Dataset).map(dataset => dataset.valueOf());

  return datasetVerdier.includes(tekst);
};
