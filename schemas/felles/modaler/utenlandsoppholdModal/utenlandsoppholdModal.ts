import { DokumentNavn, Steg } from '../../../typer';
import localeblock from '../../localeblock';
import sporsmalDokument from '../../sporsmalDokument';

const utenlandsoppholdModal = [
  localeblock(Steg.FELLES, DokumentNavn.MODAL_UTENLANDSOPPHOLD_TITTEL_BARN),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_UTENLANDSOPPHOLD_SPORSMAL_BARN),
  localeblock(Steg.FELLES, DokumentNavn.MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_BARN),
  localeblock(Steg.FELLES, DokumentNavn.MODAL_UTENLANDSOPPHOLD_TITTEL_SOKER),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_UTENLANDSOPPHOLD_SPORSMAL_SOKER),
  localeblock(Steg.FELLES, DokumentNavn.MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_SOKER),
];

export default utenlandsoppholdModal;
