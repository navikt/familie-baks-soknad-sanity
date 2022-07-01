// First, we must import the schema creator
import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import localeString from './localeString';
import navigasjon from './navigasjon';
import dinLivssituasjonSpørsmål from './steg/din-livssituasjon/spørsmål';
import forsideBekreftelsesboks from './steg/forside/bekreftelsesboks';
import forsidePunktliste from './steg/forside/punktliste';
import omDegPersonopplysninger from './steg/om-deg/personopplysninger';
import omDegSpørsmål from './steg/om-deg/spørsmål';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    localeString,
    navigasjon,
    forsideBekreftelsesboks,
    forsidePunktliste,
    omDegPersonopplysninger,
    omDegSpørsmål,
    dinLivssituasjonSpørsmål,
  ]),
});
