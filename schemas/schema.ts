// First, we must import the schema creator
import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import customBlock from './felles/customBlock';
import fieldsBase from './felles/fieldsBase';
import formateringsfeilmelidinger from './felles/formateringsfeilmelidinger';
import frittstaendeOrdDokumenter from './felles/frittstaendeOrdDokumenter';
import localeBlock from './felles/localeBlock';
import localeString from './felles/localeString';
import andreUtbetalingerModal from './felles/modaler/andreUtbetalingerModal';
import arbeidsperiodeModal from './felles/modaler/arbeidsperiodeModal';
import barnehageplassModal from './felles/modaler/barnehageplassModal';
import blokkerTilbakeKnappModal from './felles/modaler/blokkerTilbakeKnappModal';
import eosYtelseModal from './felles/modaler/eosYtelseModal';
import leggTilBarnModal from './felles/modaler/leggTilBarnModal';
import mistetInformajsonenDinModal from './felles/modaler/mistetInformajsonenDinModal';
import pensjonModal from './felles/modaler/pensjonModal';
import startPåNyttModal from './felles/modaler/startPåNyttModal';
import utenlandsoppholdModal from './felles/modaler/utenlandsoppholdModal';
import navigasjon from './felles/navigasjon';
import teksterForDato from './felles/teksterForDato';
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
import vedlikeholdsarbeid from './steg/vedlikeholdsarbeid';
import velgBarn from './steg/velgBarn';
import { StegDokument } from './typer';

const dokumenterMedFellesFelter = [
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
  ...utenlandsoppholdModal,
  ...barnehageplassModal,
  ...andreUtbetalingerModal,
  ...arbeidsperiodeModal,
  ...eosYtelseModal,
  ...pensjonModal,
  ...leggTilBarnModal,
  ...frittstaendeOrdDokumenter,
  ...navigasjon,
  ...teksterForDato,
  ...formateringsfeilmelidinger,
  ...startPåNyttModal,
  ...mistetInformajsonenDinModal,
  ...vedlikeholdsarbeid,
  ...blokkerTilbakeKnappModal,
].map((dok: StegDokument) => ({
  ...dok,
  fields: [...fieldsBase(dok.steg, dok.name), ...dok.fields],
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
    ],
    dokumenterMedFellesFelter,
  ),
});
