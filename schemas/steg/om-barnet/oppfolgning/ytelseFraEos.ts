import sporsmalMedFeilmeldingString from '../../../felles/sporsmalMedFeilmeldingString';
import { DokumentNavn, dokumentTittel, SanityTyper, Steg, StegDokument } from '../../../typer';
import opplysningspaminnelse from './opplysningspaminnelse';

const ytelseFraEos: StegDokument = {
  steg: Steg.OM_BARNET,
  title: dokumentTittel.OM_BARNET_YTELSE_FRA_EOS,
  name: DokumentNavn.OM_BARNET_YTELSE_FRA_EOS,
  type: SanityTyper.DOCUMENT,
  fields: [
    opplysningspaminnelse,
    {
      name: 'pagaendeSoknad',
      title: 'Pågående søknad om ytelse fra eøs land',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingString],
    },
    {
      name: 'pagaendeSoknadLand',
      title: 'Hvilket land har x pågående søknad fra',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingString],
    },
    {
      name: 'farYtelse',
      title: 'Får/fått ytelse fra eøs land',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingString],
    },
  ],
};

export default ytelseFraEos;
