import { DokumentNavn, dokumentTittel } from '../../typer';
import andreUtbetalingerModal from './andreUtbetalingerModal/andreUtbetalingerModal';
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
  pensjonsModal,
  arbeidsperiodeModal,
  leggTilBarnModal,
  eosYtelseModal,
  andreUtbetalingerModal,
];

export default modalerDokumenter;
