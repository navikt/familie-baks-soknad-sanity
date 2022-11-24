import { DokumentNavn, Steg } from '../../typer';
import localeBlockForStegDokument from '../localeBlockForStegDokument';

const blokkerTilbakeKnappModal = [
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_BLOKKER_TILBAKE_KNAPP_TITTEL),
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_BLOKKER_TILBAKE_KNAPP_TEKST),
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_BLOKKER_TILBAKE_KNAPP_TIL_DITT_NAV),
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_BLOKKER_TILBAKE_KNAPP_AVBRYT),
];

export default blokkerTilbakeKnappModal;
