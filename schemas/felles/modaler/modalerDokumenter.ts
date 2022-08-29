import { DokumentNavn, dokumentTittel } from '../../typer';
import pensjonsModal from './pensjonsModal/pensjonsModal';
import leggTilBarnModal from './velgBarnModal/leggTilBarnModal';

const modalerDokumenter = [
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
];

export default modalerDokumenter;
