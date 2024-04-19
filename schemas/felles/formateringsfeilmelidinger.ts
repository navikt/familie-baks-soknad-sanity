import { DokumentNavn, Steg } from '../typer';

import localeStringForStegDokument from './localeStringForStegDokument';

const formateringsfeilmelidinger = [
  localeStringForStegDokument(Steg.FELLES, DokumentNavn.FORMATERINGSFEILMELDINGER),
  // TODO endre til localeBlockForStegDokument, sikre at eksisterende tekster bevares
];

export default formateringsfeilmelidinger;
