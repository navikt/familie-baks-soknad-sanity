import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  Steg,
  StegDokument,
} from '../../../typer';

const ytelseFraEos: StegDokument = {
  steg: Steg.OM_BARNET,
  title: dokumentTittel.OM_BARNET_YTELSE_FRA_EOS,
  name: DokumentNavn.OM_BARNET_YTELSE_FRA_EOS,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      name: 'opplysningsPaminnelse',
      title: 'Påminnelse om hva som er opplyst i om barna',
      description: 'F.eks. "Du har opplyst at..." (obligatorisk)',
      type: CustomSanityTyper.LOCALE_BLOCK,
      validation: Rule => Rule.required().error('Du må fylle inn tekst for opplysningspåminnelse'),
    },
  ],
};

export default ytelseFraEos;
