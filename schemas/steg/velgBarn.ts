import localeBlockForStegDokument from '../felles/localeBlockForStegDokument';
import localeStringForStegDokument from '../felles/localeStringForStegDokument';
import { DokumentNavn, Steg } from '../typer';

const velgBarn = [
  localeBlockForStegDokument(Steg.VELG_BARN, DokumentNavn.VELG_BARN_TITTEL),
  localeBlockForStegDokument(Steg.VELG_BARN, DokumentNavn.VELG_BARN_LENKER),
  localeStringForStegDokument(Steg.VELG_BARN, DokumentNavn.VELG_BARN_ANDRE_TEKSTER),
];

export default velgBarn;
