// First, we must import the schema creator
import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import { alertBlock, alertString } from './alert';
import customBlock from './customBlock';
import frittstaendeOrdDokumenter from './felles/frittstaende-ord/frittstaendeOrdDokumenter';
import modalerDokumenter from './felles/modaler/modalerDokumenter';
import utenlandsoppholdModal from './felles/modaler/utenlandsoppholdModal/utenlandsoppholdModal';
import navigasjon from './felles/navigasjon';
import teksterForDato from './felles/teksterForDato';
import fieldsBase from './fieldsBase';
import fieldsBaseForSteg from './fieldsBaseForSteg';
import localeBlock from './localeBlock';
import localeString from './localeString';
import dinLivssituasjon from './steg/dinLivssituasjon';
import dokumentasjon from './steg/dokumentasjon';
import eosForBarn from './steg/eosForBarn';
import eosForSoker from './steg/eosForSoker';
import forside from './steg/forside';
import kvittering from './steg/kvittering';
import omBarna from './steg/omBarna';
import omBarnet from './steg/omBarnet';
import omDeg from './steg/omDeg';
import oppsummering from './steg/oppsummering';
import velgBarn from './steg/velgBarn';
import { DokumentBase, StegDokument } from './typer';

const dokumenterForSteg = [
  ...forside,
  ...omDeg,
  ...dinLivssituasjon,
  ...velgBarn,
  ...omBarna,
  ...omBarnet,
  ...eosForSoker,
  ...eosForBarn,
  ...oppsummering,
  ...dokumentasjon,
  ...kvittering,
].map((dok: StegDokument) => ({
  ...dok,
  fields: [...fieldsBaseForSteg(dok.steg), ...dok.fields],
}));

const dokumenterPåTversAvSteg = [
  ...utenlandsoppholdModal,
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
