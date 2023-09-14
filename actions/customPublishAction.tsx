import React from 'react';

import { PublishIcon } from '@sanity/icons';
import { Button, Card, Inline, Stack, Text } from '@sanity/ui';
import { DocumentActionComponent, DocumentActionProps } from 'sanity';

export function customPublishAction(
  originalPublishAction: DocumentActionComponent,
): DocumentActionComponent {
  return (props: DocumentActionProps) => {
    const originalResult = originalPublishAction(props);
    const { draft, published } = props;
    const [isDialogOpen, setDialogOpen] = React.useState(false);
    const [removedFields, setRemovedFields] = React.useState([]);
    const feltetFelteneTekst = removedFields.length > 1 ? 'feltene' : 'feltet';

    const validateChanges = () => {
      const draftKeys = draft && Object.keys(draft);
      const publishedKeys = published && Object.keys(published);
      const keysInPublishedButNotInDraft = publishedKeys?.filter(
        key => draftKeys?.indexOf(key) === -1,
      );
      if (keysInPublishedButNotInDraft?.length > 0) {
        setRemovedFields(keysInPublishedButNotInDraft);
        setDialogOpen(true);
      } else {
        originalResult.onHandle();
      }
    };

    const removedFieldsText = (): string => {
      if (removedFields.length == 1) {
        return removedFields[0];
      } else {
        return removedFields.slice(0, -1).join(', ') + ' og ' + removedFields.slice(-1);
      }
    };

    return {
      ...originalResult,
      onHandle: () => {
        validateChanges();
      },
      dialog: isDialogOpen && {
        type: 'dialog',
        onClose: () => {
          setDialogOpen(false);
        },
        header: 'Endring kan medføre at søknadsdialog krasjer!',
        content: (
          <>
            <Card paddingTop={2} paddingBottom={4}>
              <Stack space={[4]}>
                <Text size={2}>
                  Du har fjernet innholdet i {feltetFelteneTekst}:
                  <i>
                    <b>{removedFieldsText()}</b>
                  </i>
                  , og dette kan føre til at søknadsdialogen krasjer!
                </Text>
                <Text size={2}>
                  Verifiser med utvikler at {feltetFelteneTekst} er fjernet fra koden før du
                  publiserer.
                </Text>
              </Stack>
            </Card>
            <Card style={{ textAlign: 'right' }}>
              <Inline space={[5, 5, 5]}>
                <Button
                  padding={4}
                  text={'Avbryt'}
                  onClick={() => {
                    setDialogOpen(false);
                  }}
                />
                <Button
                  icon={PublishIcon}
                  tone="positive"
                  padding={4}
                  text="Publisér"
                  onClick={() => {
                    setDialogOpen(false);
                    originalResult.onHandle();
                  }}
                />
              </Inline>
            </Card>
          </>
        ),
      },
    };
  };
}
