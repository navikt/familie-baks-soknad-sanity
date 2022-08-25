// First, we must import the schema creator
import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import { alertBlock, alertString } from './alert';
import customBlock from './customBlock';
import frittstaendeOrdDokumenter from './felles/frittstaende-ord/frittstaendeOrdDokumenter';
import modalerDokumenter from './felles/modaler/modalerDokumenter';
import navigasjon from './felles/navigasjon';
import teksterForDato from './felles/teksterForDato';
import fieldsBase from './fieldsBase';
import fieldsBaseForSteg from './fieldsBaseForSteg';
import localeBlock from './localeBlock';
import localeString from './localeString';
import dinLivssituasjonDokumenter from './steg/din-livssituasjon/dinLivssituasjonDokumenter';
import dokumentasjonDokumenter from './steg/dokumentasjon/dokumentasjonDokumenter';
import eosForBarnDokumenter from './steg/eos-for-barn/eosForBarnDokumenter';
import eosForSokerDokumenter from './steg/eos-for-soker/eosForSokerDokumenter';
import forsideDokumenter from './steg/forside/forsideDokumenter';
import kvitteringsdokument from './steg/kvittering/kvitteringsdokument';
import omBarnaDokumenter from './steg/om-barna/omBarnaDokumenter';
import omBarnetDokumenter from './steg/om-barnet/omBarnetDokumenter';
import omDegDokumenter from './steg/om-deg/omDegDokumenter';
import oppsummeringsdokument from './steg/oppsummering/oppsummeringsdokument';
import velgBarnDokumenter from './steg/velg-barn/velgBarnDokumenter';
import { DokumentBase, StegDokument } from './typer';

const dokumenterForSteg = [
  ...forsideDokumenter,
  ...omDegDokumenter,
  ...dinLivssituasjonDokumenter,
  ...velgBarnDokumenter,
  ...omBarnaDokumenter,
  ...omBarnetDokumenter,
  ...eosForSokerDokumenter,
  ...eosForBarnDokumenter,
  oppsummeringsdokument,
  ...dokumentasjonDokumenter,
  kvitteringsdokument,
].map((dok: StegDokument) => ({
  ...dok,
  fields: [...fieldsBaseForSteg(dok.steg), ...dok.fields],
}));

const dokumenterPåTversAvSteg = [
  ...modalerDokumenter,
  ...frittstaendeOrdDokumenter,
  navigasjon,
  teksterForDato,
].map((dok: DokumentBase) => ({
  ...dok,
  fields: [...fieldsBase, ...dok.fields],
}));

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
