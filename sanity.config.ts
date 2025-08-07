import { visionTool } from '@sanity/vision';
import { AuthConfig, defineConfig, definePlugin } from 'sanity';
import { deskTool } from 'sanity/desk';

import { customPublishAction } from './actions/customPublishAction';
import { structure } from './config/deskStructure';
import { schemaTypes } from './schemas/schema';
import { Dataset, PROSJEKT_ID } from './util/constants';

const sharedConfig = definePlugin({
  name: 'shareConfig',
  plugins: [deskTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

const auth: AuthConfig = {
  redirectOnSingle: true,
  providers: () => [
    {
      name: 'saml',
      title: 'NAV SSO',
      url: 'https://api.sanity.io/v2021-10-01/auth/saml/login/f3270b37',
      logo: '/static/navlogo.svg',
    },
  ],
  loginMethod: 'dual',
};

export default defineConfig([
  {
    name: 'ks-prod',
    title: 'KS - Produksjon',
    projectId: PROSJEKT_ID,
    dataset: Dataset.KS_PROD,
    basePath: `/${Dataset.KS_PROD}`,
    plugins: [sharedConfig()],
    auth: auth,
  },
  {
    name: 'ks-test',
    title: 'KS - Test',
    projectId: PROSJEKT_ID,
    dataset: Dataset.KS_TEST,
    basePath: `/${Dataset.KS_TEST}`,
    plugins: [sharedConfig()],
    auth: auth,
    document: {
      actions: prev =>
        prev.map(originalAction =>
          originalAction.action === 'publish'
            ? customPublishAction(originalAction)
            : originalAction,
        ),
    },
  },
  {
    name: 'ba-prod',
    title: 'BA - Produksjon',
    projectId: PROSJEKT_ID,
    dataset: Dataset.BA_PROD,
    basePath: `/${Dataset.BA_PROD}`,
    plugins: [sharedConfig()],
    auth: auth,
  },
  {
    name: 'ba-test',
    title: 'BA - Test',
    projectId: PROSJEKT_ID,
    dataset: Dataset.BA_TEST,
    basePath: `/${Dataset.BA_TEST}`,
    plugins: [sharedConfig()],
    auth: auth,
    document: {
      actions: prev =>
        prev.map(originalAction =>
          originalAction.action === 'publish'
            ? customPublishAction(originalAction)
            : originalAction,
        ),
    },
  },
]);
