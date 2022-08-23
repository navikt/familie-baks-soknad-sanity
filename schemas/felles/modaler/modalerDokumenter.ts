import { DokumentNavn, dokumentTittel } from '../../typer';
import arbeidsperiodeModal from './arbeidsperiodeModal/arbeidsperiodeModal';
import barnehageplassModal from './barnehageplassModal/barnehageplassModal';
import eosYtelseModal from './eøsYtelseModal/eosYtelseModal';
import pensjonsModal from './pensjonsModal/pensjonsModal';
import utenlandsoppholdModal from './utenlandsoppholdModal/utenlandsoppholdModal';
import leggTilBarnModal from './velgBarnModal/leggTilBarnModal';

const modalerDokumenter = [
  {
    name: DokumentNavn.MODAL_UTENLANDSOPPHOLD_SOKER,
    title: dokumentTittel.MODAL_UTENLANDSOPPHOLD_SOKER,
    ...utenlandsoppholdModal,
  },
  {
    name: DokumentNavn.MODAL_UTENLANDSOPPHOLD_BARN,
    title: dokumentTittel.MODAL_UTENLANDSOPPHOLD_BARN,
    ...utenlandsoppholdModal,
  },
  barnehageplassModal,
  {
    name: DokumentNavn.MODAL_ARBEIDSPERIODE_SOKER,
    title: dokumentTittel.MODAL_ARBEIDSPERIODE_SOKER,
    ...arbeidsperiodeModal,
  },
  {
    name: DokumentNavn.MODAL_ARBEIDSPERIODE_ANDRE_FORELDER,
    title: dokumentTittel.MODAL_ARBEIDSPERIODE_ANDRE_FORELDER,
    ...arbeidsperiodeModal,
  },
  {
    name: DokumentNavn.MODAL_ARBEIDSPERIODE_OMSORGSPERSON,
    title: dokumentTittel.MODAL_ARBEIDSPERIODE_OMSORGSPERSON,
    ...arbeidsperiodeModal,
  },
  {
    name: DokumentNavn.MODAL_PENSJON_SOKER,
    title: dokumentTittel.MODAL_PENSJON_SOKER,
    ...pensjonsModal,
  },
  {
    name: DokumentNavn.MODAL_PENSJON_ANDRE_FORELDER,
    title: dokumentTittel.MODAL_PENSJON_ANDRE_FORELDER,
    ...pensjonsModal,
  },
  {
    name: DokumentNavn.MODAL_PENSJON_OMSORGSPERSON,
    title: dokumentTittel.MODAL_PENSJON_OMSORGSPERSON,
    ...pensjonsModal,
  },
  leggTilBarnModal,
  eosYtelseModal,
];

export default modalerDokumenter;
