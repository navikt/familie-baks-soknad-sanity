import { DokumentNavn, Steg } from '../../../typer';
import localeblock from '../../localeblock';

const andreUtbetalingerModal = [
  localeblock(Steg.FELLES, DokumentNavn.MODAL_ANDRE_UTBETALINGER_TITTEL_SOKER),
  localeblock(Steg.FELLES, DokumentNavn.MODAL_ANDRE_UTBETALINGER_TITTEL_ANDRE_FORELDER),
  localeblock(Steg.FELLES, DokumentNavn.MODAL_ANDRE_UTBETALINGER_TITTEL_OMSORGSPERSON),
  localeblock(Steg.FELLES, DokumentNavn.MODAL_ANDRE_UTBETALINGER_SPORSMAL_SOKER),
  localeblock(Steg.FELLES, DokumentNavn.MODAL_ANDRE_UTBETALINGER_SPORSMAL_ANDRE_FORELDER),
  localeblock(Steg.FELLES, DokumentNavn.MODAL_ANDRE_UTBETALINGER_SPORSMAL_OMSORGSPERSON),
];

export default andreUtbetalingerModal;
