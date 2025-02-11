import { DokumentNavn, Steg } from '../../typer';
import localeBlockForStegDokument from '../localeBlockForStegDokument';

const barnetrygdsperiodeModal = [
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_BARNETRYGDSPERIODE_TITTEL_SOKER),
  localeBlockForStegDokument(
    Steg.FELLES,
    DokumentNavn.MODAL_BARNETRYGDSPERIODE_TITTEL_ANDRE_FORELDER,
  ),
  localeBlockForStegDokument(
    Steg.FELLES,
    DokumentNavn.MODAL_BARNETRYGDSPERIODE_TITTEL_OMSORGSPERSON,
  ),
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_BARNETRYGDSPERIODE_SPORSMAL_SOKER),
  localeBlockForStegDokument(
    Steg.FELLES,
    DokumentNavn.MODAL_BARNETRYGDSPERIODE_SPORSMAL_ANDRE_FORELDER,
  ),
  localeBlockForStegDokument(
    Steg.FELLES,
    DokumentNavn.MODAL_BARNETRYGDSPERIODE_SPORSMAL_OMSORGSPERSON,
  ),
  localeBlockForStegDokument(
    Steg.FELLES,
    DokumentNavn.MODAL_BARNETRYGDSPERIODE_ANDRE_TEKSTER_SOKER,
  ),
  localeBlockForStegDokument(
    Steg.FELLES,
    DokumentNavn.MODAL_BARNETRYGDSPERIODE_ANDRE_TEKSTER_ANDRE_FORELDER,
  ),
  localeBlockForStegDokument(
    Steg.FELLES,
    DokumentNavn.MODAL_BARNETRYGDSPERIODE_ANDRE_TEKSTER_OMSORGSPERSON,
  ),
];

export default barnetrygdsperiodeModal;
