import localeBlockForStegDokument from '../felles/localeBlockForStegDokument';
import localeStringForStegDokument from '../felles/localeStringForStegDokument';
import sporsmalDokument from '../felles/sporsmalDokument';
import { DokumentNavn, Steg } from '../typer';

const eosForBarn = [
  localeBlockForStegDokument(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_TITTEL),
  localeBlockForStegDokument(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_TITTEL_UTEN_FLETTEFELT),
  localeBlockForStegDokument(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_GUIDE),
  sporsmalDokument(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_SPORSMAL_OM_BARN),
  sporsmalDokument(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_SPORSMAL_OM_ANDRE_FORELDER),
  sporsmalDokument(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_SPORSMAL_OM_OMSORGSPERSON),
  localeStringForStegDokument(
    Steg.EØS_FOR_BARN,
    DokumentNavn.EOS_FOR_BARN_SLEKTSFORHOLD_ALTERNATIVER,
  ),
  localeBlockForStegDokument(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_ANDRE_TEKSTER),
];

export default eosForBarn;
