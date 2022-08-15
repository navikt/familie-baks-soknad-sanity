
import React from 'react';

import styles from '../myStyling.css';
import { CustomSanityTyper, DokumentNavn, SanityTyper, stegTittel, Ytelse } from './typer';

const customBlock = {
  title: 'Custom block',
  name: CustomSanityTyper.CUSTOM_BLOCK,
  type: SanityTyper.ARRAY,
  of: [
    {
      type: SanityTyper.BLOCK,
      marks: {
        annotations: [
          {
            name: 'link',
            type: SanityTyper.OBJECT,
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
          {
            name: 'flettefelt',
            type: SanityTyper.OBJECT,
            title: 'Flettefelt',
            blockEditor: {
              icon: () => <span className={styles.flettefeltIcon}>F</span>,
              render: props => <span className={styles.flettefelt}>{props.flettefeltVerdi}</span>,
            },
            fields: [
              {
                name: 'flettefeltVerdi',
                type: SanityTyper.STRING,
                title: 'Mulige verdier',
                options: {
                  list: [
                    { title: 'Barnets navn', value: '{barn}' },
                    { title: 'Ytelse', value: '{ytelse}' },
                  ],
                },
              },
            ],
          },
        ],
      },
    },
  ],
};

export default customBlock;
