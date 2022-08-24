import {
  DokumentNavn,
  dokumentTittel,
  StegDokument,
  Steg,
  SanityTyper,
  CustomSanityTyper,
} from '../../typer';

const scanningGuide: StegDokument = {
  steg: Steg.DOKUMENTASJON,
  title: dokumentTittel.DOKUMENTASJON_SCANNING_GUIDE,
  name: DokumentNavn.DOKUMENTASJON_SCANNING_GUIDE,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Klikkbar tekst for å ekspandere guide',
      name: 'ekspanderbarTekst',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn ekspanderbar tekst'),
    },
    {
      title: 'Titler og punktlister',
      name: 'titlerOgPunktlister',
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn tekst for titler og punktlister'),
    },
    {
      title: 'Status på eksempler',
      name: 'eksempelStatus',
      type: SanityTyper.OBJECT,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn status på eksempeler'),
      fields: [
        {
          title: 'Bra',
          name: 'bra',
          type: CustomSanityTyper.LOCALE_STRING,
          validation: rule => rule.required().error('Du må fylle inn status'),
        },
        {
          title: 'Dårlig',
          name: 'darlig',
          type: CustomSanityTyper.LOCALE_STRING,
          validation: rule => rule.required().error('Du må fylle inn status'),
        },
      ],
    },
    {
      title: 'Beskrivelse av eksempler',
      name: 'eksempelBeskrivelse',
      description: '(obligatorisk)',
      type: SanityTyper.OBJECT,
      validation: rule => rule.required().error('Du må fylle inn beskrivelse på eksempeler'),
      fields: [
        {
          title: 'Dokumentet fyller hele bilde',
          name: 'fyllerHeleBilde',
          type: CustomSanityTyper.LOCALE_STRING,
          validation: rule => rule.required().error('Du må fylle inn beskrivelse'),
        },
        {
          title: 'Dokumentet er ikke tatt ovenfra',
          name: 'ikkeOvenfra',
          type: CustomSanityTyper.LOCALE_STRING,
          validation: rule => rule.required().error('Du må fylle inn beskrivelse'),
        },
        {
          title: 'Dokumentet er ikke riktig retning',
          name: 'feilRetning',
          type: CustomSanityTyper.LOCALE_STRING,
          validation: rule => rule.required().error('Du må fylle inn beskrivelse'),
        },
        {
          title: 'Dokumentet har skygge',
          name: 'skygge',
          type: CustomSanityTyper.LOCALE_STRING,
          validation: rule => rule.required().error('Du må fylle inn beskrivelse'),
        },
      ],
    },
    {
      title: 'Mer hjelp-lenke',
      name: 'merHjelpLenke',
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn lenke'),
    },
  ],
};

export default scanningGuide;
