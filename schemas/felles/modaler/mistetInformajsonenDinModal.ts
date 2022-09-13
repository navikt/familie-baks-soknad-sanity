import { DokumentNavn, Steg } from '../../typer';
import localeBlockForStegDokument from '../localeBlockForStegDokument';

const mistetInformajsonenDinModal = [
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_MISTET_INFORMASJONEN_DIN_TITTEL),
  localeBlockForStegDokument(
    Steg.FELLES,
    DokumentNavn.MODAL_MISTET_INFORMASJONEN_DIN_ANDRE_TEKSTER,
  ),
];

export default mistetInformajsonenDinModal;
