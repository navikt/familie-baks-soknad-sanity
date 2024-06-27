// Then import schema types from any plugins that might expose them
import alternativeTekster from './felles/alternativeTekster';
import banner from './felles/banner';
import customBlock from './felles/customBlock';
import fieldsBase from './felles/fieldsBase';
import formateringsfeilmelidinger from './felles/formateringsfeilmelidinger';
import frittstaendeOrdDokumenter from './felles/frittstaendeOrdDokumenter';
import hjelpeteksterInputfelt from './felles/hjelpeteksterInputfelt';
import kanIkkeBrukeSoknad from './felles/kanIkkeBrukeSoknad';
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
import barnetrygdsperiodeModal from './felles/modaler/barnetrygdsperiodeModal';
import tidligereSamboereModal from './felles/modaler/tidligereSamboereModal';
import utenlandsoppholdModal from './felles/modaler/utenlandsoppholdModal';
import navigasjon from './felles/navigasjon';
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
  ...barnetrygdsperiodeModal,
  ...tidligereSamboereModal,
  ...leggTilBarnModal,
  ...frittstaendeOrdDokumenter,
  ...navigasjon,
  ...formateringsfeilmelidinger,
  ...startPåNyttModal,
  ...mistetInformajsonenDinModal,
  ...vedlikeholdsarbeid,
  ...blokkerTilbakeKnappModal,
  ...banner,
  ...kanIkkeBrukeSoknad,
  ...alternativeTekster,
  ...hjelpeteksterInputfelt,
].map((dok: StegDokument) => ({
  ...dok,
  fields: [...fieldsBase(dok.steg, dok.name), ...dok.fields],
}));

export const schemaTypes = [customBlock, localeString, localeBlock, ...dokumenterMedFellesFelter];
