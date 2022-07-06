import { DokumentNavn, DokumentTittel, SanityTyper, StegDokument, Steg } from '../../typer';

const punktliste: StegDokument = {
  steg: Steg.FORSIDE,
  title: DokumentTittel.FORSIDE_PUNKTLISTE,
  name: DokumentNavn.FORSIDE_PUNKTLISTE,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean',
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};

export default punktliste;
