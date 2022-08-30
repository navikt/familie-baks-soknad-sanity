import localeStringForStegDokument from '../felles/localeStringForStegDokument';
import sporsmalDokument from '../felles/sporsmalDokument';
import { DokumentNavn, Steg } from '../typer';

const eosForSoker = [
  localeStringForStegDokument(Steg.EØS_FOR_SØKER, DokumentNavn.EOS_FOR_SOKER_TITTEL),
  sporsmalDokument(Steg.EØS_FOR_SØKER, DokumentNavn.EOS_FOR_SOKER_SPORSMAL),
];

export default eosForSoker;
