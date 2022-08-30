import { DokumentNavn, Steg } from '../../typer';
import localeBlockForStegDokument from '../localeBlockForStegDokument';
import sporsmalDokument from '../sporsmalDokument';

const eosYtelseModal = [
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_EOS_YTELSE_TITTEL_SOKER),
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_EOS_YTELSE_TITTEL_ANDRE_FORELDER),
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_EOS_YTELSE_TITTEL_OMSORGSPERSON),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_EOS_YTELSE_SPORSMAL_SOKER),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_EOS_YTELSE_SPORSMAL_ANDRE_FORELDER),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_EOS_YTELSE_SPORSMAL_OMSORGSPERSON),
];

export default eosYtelseModal;
