import { DokumentNavn, Steg } from '../../../typer';
import localeblock from '../../localeblock';
import sporsmalDokument from '../../sporsmalDokument';

const arbeidsperiodeModal = [
  localeblock(Steg.FELLES, DokumentNavn.MODAL_ARBEIDSPERIODE_TITTEL_SOKER),
  localeblock(Steg.FELLES, DokumentNavn.MODAL_ARBEIDSPERIODE_TITTEL_ANDRE_FORELDER),
  localeblock(Steg.FELLES, DokumentNavn.MODAL_ARBEIDSPERIODE_TITTEL_OMSORGSPERSON),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_ARBEIDSPERIODE_SPORSMAL_SOKER),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_ARBEIDSPERIODE_SPORSMAL_ANDRE_FORELDER),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_ARBEIDSPERIODE_SPORSMAL_OMSORGSPERSON),
];

export default arbeidsperiodeModal;
