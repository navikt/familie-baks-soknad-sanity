import localeBlockForStegDokument from '../felles/localeBlockForStegDokument';
import sporsmalDokument from '../felles/sporsmalDokument';
import { DokumentNavn, Steg } from '../typer';

const eosForSoker = [
  localeBlockForStegDokument(Steg.EØS_FOR_SØKER, DokumentNavn.EOS_FOR_SOKER_TITTEL),
  localeBlockForStegDokument(Steg.EØS_FOR_SØKER, DokumentNavn.EOS_FOR_SOKER_GUIDE),
  sporsmalDokument(Steg.EØS_FOR_SØKER, DokumentNavn.EOS_FOR_SOKER_SPORSMAL),
];

export default eosForSoker;
