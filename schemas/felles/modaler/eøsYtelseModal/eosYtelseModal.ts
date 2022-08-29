import { DokumentNavn, Steg } from '../../../typer';
import localeblock from '../../localeblock';

const eosYtelseModal = [
  localeblock(Steg.FELLES, DokumentNavn.MODAL_EOS_YTELSE_TITTEL_SOKER),
  localeblock(Steg.FELLES, DokumentNavn.MODAL_EOS_YTELSE_TITTEL_ANDRE_FORELDER),
  localeblock(Steg.FELLES, DokumentNavn.MODAL_EOS_YTELSE_TITTEL_OMSORGSPERSON),
  localeblock(Steg.FELLES, DokumentNavn.MODAL_EOS_YTELSE_SPORSMAL_SOKER),
  localeblock(Steg.FELLES, DokumentNavn.MODAL_EOS_YTELSE_SPORSMAL_ANDRE_FORELDER),
  localeblock(Steg.FELLES, DokumentNavn.MODAL_EOS_YTELSE_SPORSMAL_OMSORGSPERSON),
];

export default eosYtelseModal;
