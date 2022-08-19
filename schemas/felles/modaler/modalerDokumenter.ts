import { DokumentNavn, dokumentTittel } from '../../typer';
import barnehageplassModal from './barnehageplassModal/barnehageplassModal';
import utenlandsoppholdModal from './utenlandsoppholdModal/utenlandsoppholdModal';

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
];

export default modalerDokumenter;