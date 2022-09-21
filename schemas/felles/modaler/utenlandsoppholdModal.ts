import { DokumentNavn, Steg } from '../../typer';
import localeBlockForStegDokument from '../localeBlockForStegDokument';
import sporsmalDokument from '../sporsmalDokument';

const utenlandsoppholdModal = [
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_UTENLANDSOPPHOLD_TITTEL_BARN),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_UTENLANDSOPPHOLD_SPORSMAL_BARN),
  localeBlockForStegDokument(
    Steg.FELLES,
    DokumentNavn.MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_BARN,
  ),
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_UTENLANDSOPPHOLD_ANDRE_TEKSTER_BARN),
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_UTENLANDSOPPHOLD_TITTEL_SOKER),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_UTENLANDSOPPHOLD_SPORSMAL_SOKER),
  localeBlockForStegDokument(
    Steg.FELLES,
    DokumentNavn.MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_SOKER,
  ),
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_UTENLANDSOPPHOLD_ANDRE_TEKSTER_SOKER),
  localeBlockForStegDokument(
    Steg.FELLES,
    DokumentNavn.MODAL_UTENLANDSOPPHOLD_TITTEL_ANDRE_FORELDER,
  ),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_UTENLANDSOPPHOLD_SPORSMAL_ANDRE_FORELDER),
  localeBlockForStegDokument(
    Steg.FELLES,
    DokumentNavn.MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_ANDRE_FORELDER,
  ),
  localeBlockForStegDokument(
    Steg.FELLES,
    DokumentNavn.MODAL_UTENLANDSOPPHOLD_ANDRE_TEKSTER_ANDRE_FORELDER,
  ),
];

export default utenlandsoppholdModal;
