import React from 'react';
import {
  Button,
  FlexButton,
  From,
  Input,
  InputGroup,
  InputText,
  Label,
} from '../styles/common.style';
import { Container } from '../styles/vote.upsert';
import useApiVoteAdd from '../hooks/useApiVoteAdd';
import { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { resetForm, setForm, setMode } from '../store/vote.setup.slice';
import useApiVoteUpdate from '../hooks/useApiVoteUpdate';

type TVoteUpsert = {
  onVoteSuccess: () => void;
};

const VoteUpsert: React.FC<TVoteUpsert> = (props) => {
  const dispatch = useDispatch();
  const voteSetup = useSelector((state: RootState) => state.voteSetup);
  const form = voteSetup.form;

  const postVoteAdd = useApiVoteAdd();
  const postVoteUpdate = useApiVoteUpdate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (voteSetup.mode === 'add') {
      await postVoteAdd.mutateAsync({
        title: form.title,
        photoUrl: form.photoUrl,
        description: form.description,
      });
    }

    if (voteSetup.mode === 'update') {
      await postVoteUpdate.mutateAsync({
        id: form.id,
        title: form.title,
        photoUrl: form.photoUrl,
        description: form.description,
      });
    }

    props.onVoteSuccess();
    dispatch(resetForm());
    dispatch(setMode('add'));
  };

  const onSetForm = (key: string, value: string) => {
    dispatch(setForm({ key, value }));
  };

  const onCancel = () => {
    dispatch(resetForm());
    dispatch(setMode('add'));
  };

  const isDisabled =
    form && (!form.title || !form.photoUrl || !form.description);

  if (!form) return null;

  return (
    <Container>
      <From style={{ marginTop: '32px' }} onSubmit={onSubmit}>
        <InputGroup>
          <Label>Title</Label>
          <Input
            type='text'
            value={form.title}
            onChange={(e) => onSetForm('title', e.target.value)}
            maxLength={250}
          />
        </InputGroup>
        <InputGroup>
          <Label>Photo Url</Label>
          <Input
            type='text'
            value={form.photoUrl}
            onChange={(e) => onSetForm('photoUrl', e.target.value)}
            maxLength={5000}
          />
        </InputGroup>
        <InputGroup>
          <Label>Description</Label>
          <InputText
            value={form.description}
            onChange={(e) => onSetForm('description', e.target.value)}
            maxLength={250}
          />
        </InputGroup>
        <FlexButton>
          <Button
            type='submit'
            style={{ marginTop: '16px' }}
            $primary
            disabled={isDisabled}
          >
            {voteSetup.mode === 'update' ? 'Update' : ' Add New Vote'}
          </Button>
          {voteSetup.mode === 'update' && (
            <Button
              type='button'
              style={{ marginTop: '16px' }}
              onClick={onCancel}
            >
              Cancel
            </Button>
          )}
        </FlexButton>
      </From>
    </Container>
  );
};

export default VoteUpsert;
