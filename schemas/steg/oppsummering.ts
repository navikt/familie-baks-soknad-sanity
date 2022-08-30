import localeBlockForStegDokument from '../felles/localeBlockForStegDokument';
import localeStringForStegDokument from '../felles/localeStringForStegDokument';
import { DokumentNavn, Steg } from '../typer';

const oppsummering = [
  localeBlockForStegDokument(Steg.OPPSUMMERING, DokumentNavn.OPPSUMMERING_TITTEL),
  localeStringForStegDokument(Steg.OPPSUMMERING, DokumentNavn.OPPSUMMERING_ANDRE_TEKSTER),
];

export default oppsummering;
