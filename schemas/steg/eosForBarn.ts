import localeblock from '../felles/localeblock';
import localestring from '../felles/localestring';
import sporsmalDokument from '../felles/sporsmalDokument';
import { DokumentNavn, Steg } from '../typer';

const eosForBarn = [
  localeblock(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_TITTEL),
  sporsmalDokument(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_SPORSMAL_OM_BARN),
  sporsmalDokument(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_SPORSMAL_OM_ANDRE_FORELDER),
  sporsmalDokument(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_SPORSMAL_OM_OMSORGSPERSON),
  localestring(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_SLEKTSFORHOLD_ALTERNATIVER),
  localestring(Steg.EØS_FOR_BARN, DokumentNavn.EOS_FOR_BARN_ANDRE_TEKSTER),
];

export default eosForBarn;
