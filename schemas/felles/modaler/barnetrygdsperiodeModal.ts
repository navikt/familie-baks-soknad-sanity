import { DokumentNavn, Steg } from '../../typer';
import localeBlockForStegDokument from '../localeBlockForStegDokument';
import sporsmalDokument from '../sporsmalDokument';

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
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_BARNETRYGDSPERIODE_SPORSMAL_SOKER),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_BARNETRYGDSPERIODE_SPORSMAL_ANDRE_FORELDER),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_BARNETRYGDSPERIODE_SPORSMAL_OMSORGSPERSON),
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
