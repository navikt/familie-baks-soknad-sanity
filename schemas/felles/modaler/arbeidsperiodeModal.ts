import { DokumentNavn, Steg } from '../../typer';
import localeBlockForStegDokument from '../localeBlockForStegDokument';
import sporsmalDokument from '../sporsmalDokument';

const arbeidsperiodeModal = [
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_ARBEIDSPERIODE_TITTEL_SOKER),
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_ARBEIDSPERIODE_TITTEL_ANDRE_FORELDER),
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_ARBEIDSPERIODE_TITTEL_OMSORGSPERSON),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_ARBEIDSPERIODE_SPORSMAL_SOKER),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_ARBEIDSPERIODE_SPORSMAL_ANDRE_FORELDER),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_ARBEIDSPERIODE_SPORSMAL_OMSORGSPERSON),
];

export default arbeidsperiodeModal;
