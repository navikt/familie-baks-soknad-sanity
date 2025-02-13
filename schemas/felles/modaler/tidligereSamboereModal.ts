import { DokumentNavn, Steg } from '../../typer';
import localeBlockForStegDokument from '../localeBlockForStegDokument';
import sporsmalDokument from '../sporsmalDokument';

const tidligereSamboereModal = [
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_TIDLIGERE_SAMBOERE_TITTEL_SOKER),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_TIDLIGERE_SAMBOERE_SPORSMAL_SOKER),
  localeBlockForStegDokument(
    Steg.FELLES,
    DokumentNavn.MODAL_TIDLIGERE_SAMBOERE_ANDRE_TEKSTER_SOKER,
  ),
];

export default tidligereSamboereModal;
