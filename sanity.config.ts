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
    name: 'prod',
    title: 'Produksjon',
    projectId: PROSJEKT_ID,
    dataset: Dataset.PROD,
    basePath: `/${Dataset.PROD}`,
    plugins: [sharedConfig()],
    auth: auth,
  },
  {
    name: 'prod-v2',
    title: 'Produksjon-v2',
    projectId: PROSJEKT_ID,
    dataset: Dataset.PROD_V2,
    basePath: `/${Dataset.PROD_V2}`,
    plugins: [sharedConfig()],
    auth: auth,
  },
  {
    name: 'test',
    title: 'Test',
    projectId: PROSJEKT_ID,
    dataset: Dataset.TEST,
    basePath: `/${Dataset.TEST}`,
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
