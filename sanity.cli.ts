import { defineCliConfig } from 'sanity/cli';

import { PROSJEKT_ID } from './util/constants';

export default defineCliConfig({
  api: {
    projectId: PROSJEKT_ID,
  },
  deployment: {
    appId: '7255495c48b669fef8244ebf',
  },
});
