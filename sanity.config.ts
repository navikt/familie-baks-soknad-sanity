import { visionTool } from '@sanity/vision';
import { AuthConfig, defineConfig, definePlugin } from 'sanity';
import { deskTool } from 'sanity/desk';

import { structure } from './config/deskStructure';
import { schemaTypes } from './schemas/schema';

enum Dataset {
  PROD = 'production',
  TEST = 'test',
}

const PROSJEKT_ID = 'by26nl8j';

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
    name: 'test',
    title: 'Test',
    projectId: PROSJEKT_ID,
    dataset: Dataset.TEST,
    basePath: `/${Dataset.TEST}`,
    plugins: [sharedConfig()],
    auth: auth,
  },
]);
