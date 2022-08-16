// First, we must import the schema creator
import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import { alertBlock, alertString } from './alert';
import customBlock from './customBlock';
import navigasjon from './felles/navigasjon';
import fieldsBase from './fieldsBase';
import fieldsBaseForSteg from './fieldsBaseForSteg';
import flettefelterDokumenter from './flettefelter/flettefelterDokumenter';
import localeBlock from './localeBlock';
import localeString from './localeString';
import dinLivssituasjonDokumenter from './steg/din-livssituasjon/dinLivssituasjonDokumenter';
import forsideDokumenter from './steg/forside/forsideDokumenter';
import omDegDokumenter from './steg/om-deg/omDegDokumenter';
import { DokumentBase, StegDokument } from './typer';

const dokumenterForSteg = [
  ...forsideDokumenter,
  ...omDegDokumenter,
  ...dinLivssituasjonDokumenter,
].map((dok: StegDokument) => ({
  ...dok,
  fields: [...fieldsBaseForSteg(dok.steg), ...dok.fields],
}));

const dokumenterPåTversAvSteg = [...flettefelterDokumenter, navigasjon].map(
  (dok: DokumentBase) => ({
    ...dok,
    fields: [...fieldsBase, ...dok.fields],
  }),
);

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat(
    [
      /* Your types here! */
      customBlock,
      localeString,
      localeBlock,
      alertString,
      alertBlock,
    ],
    dokumenterForSteg,
    dokumenterPåTversAvSteg,
  ),
});
