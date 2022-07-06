// First, we must import the schema creator
import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import { alertBlock, alertString } from './alert';
import customBlock from './customBlock';
import fieldsBase from './fieldsBase';
import localeBlock from './localeBlock';
import localeString from './localeString';
import navigasjon from './navigasjon';
import dinLivssituasjonSpørsmål from './steg/din-livssituasjon/spørsmål';
import forsideBekreftelsesboks from './steg/forside/bekreftelsesboks';
import forsidePunktliste from './steg/forside/punktliste';
import omDegPersonopplysninger from './steg/om-deg/personopplysninger';
import omDegSpørsmål from './steg/om-deg/spørsmål';

const spesifikkeDokumenterForSøknad = [
  forsideBekreftelsesboks,
  forsidePunktliste,
  omDegPersonopplysninger,
  omDegSpørsmål,
  dinLivssituasjonSpørsmål,
  navigasjon,
].map(dok => ({
  ...dok,
  fields: fieldsBase.concat(dok.fields), //todo: type opp dette
}));

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes
    .concat([
      /* Your types here! */
      customBlock,
      localeString,
      localeBlock,
      alertString,
      alertBlock,
    ])
    .concat(spesifikkeDokumenterForSøknad),
});
