import { useDispatch } from 'react-redux';
import useApiVote from '../hooks/useApiVote';
import useApiVoteRemove from '../hooks/useApiVoteRemove';
import { Button, IconEdit, IconTrash } from '../styles/common.style';
import {
  Container,
  Description,
  HeadTitle,
  Header,
  ModeContainer,
  NumberVote,
  Thumbnail,
} from '../styles/vote.item.style';
import { setForm, setMode } from '../store/vote.setup.slice';

type TVoteItem = {
  id: string;
  title: string;
  description: string;
  number: number;
  photoUrl: string;
  onVoteSuccess: () => void;
  mode: string;
};

export const VoteItem: React.FC<TVoteItem> = (props) => {
  const dispatch = useDispatch();
  const postVoteSubmit = useApiVote();
  const postVoteRemove = useApiVoteRemove();

  const onClick = async () => {
    if (props.mode === 'vote') {
      await postVoteSubmit.mutateAsync({ voteId: props.id });
      props.onVoteSuccess();
    }
  };

  const onClickRemove = async () => {
    if (window.confirm('Are you sure?')) {
      await postVoteRemove.mutateAsync({ voteId: props.id });
      props.onVoteSuccess();
    }
  };

  const onClickUpdate = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    dispatch(setForm({ key: 'title', value: props.title }));
    dispatch(setForm({ key: 'photoUrl', value: props.photoUrl }));
    dispatch(setForm({ key: 'description', value: props.description }));
    dispatch(setForm({ key: 'id', value: props.id }));
    dispatch(setMode('update'));
  };

  return (
    <>
      <Container onClick={onClick} mode={props.mode}>
        <Header>
          <Thumbnail src={props.photoUrl} />
          <HeadTitle>
            <NumberVote id='number'>{props.number}</NumberVote>
            {props.title}
          </HeadTitle>
        </Header>
        <Description id='description'>{props.description}</Description>
        {props.mode === 'setup' && (
          <ModeContainer>
            <Button $secondary onClick={onClickRemove}>
              <IconTrash width='16px' height='16px' />
              Remove
            </Button>
            <Button $secondary onClick={onClickUpdate}>
              <IconEdit width='16px' height='16px' />
              Update
            </Button>
          </ModeContainer>
        )}
      </Container>
    </>
  );
};
