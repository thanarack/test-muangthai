import { useEffect, useState } from 'react';
import LayoutMobile from '../components/layout.mobile';
import { VoteItem } from '../components/vote';
import useApiVoteList from '../hooks/useApiVoteList';
import { VoteListResponse } from '../api/api.spec';
import { Header, VoteBox } from '../styles/vote.style';
import VoteUpsert from '../components/vote.upsert';

const VoteSetup = () => {
  const [sort] = useState<number>(0);
  const [search] = useState<string>('');
  const apiVoteList = useApiVoteList({ search, sort });
  const voteListResult = apiVoteList.data?.data as VoteListResponse | undefined;

  useEffect(() => {
    apiVoteList.refetch();
  }, [sort]);

  const onVoteSuccess = () => {
    apiVoteList.refetch();
  };

  return (
    <LayoutMobile isBack>
      <Header>Votes Setup</Header>
      <VoteUpsert onVoteSuccess={onVoteSuccess} />
      <VoteBox>
        {voteListResult?.data.map(
          ({ id, title, description, voteNumber, photoUrl }) => (
            <VoteItem
              key={id}
              id={id}
              title={title}
              description={description}
              number={voteNumber}
              photoUrl={photoUrl}
              onVoteSuccess={onVoteSuccess}
              mode='setup'
            />
          )
        )}
      </VoteBox>
    </LayoutMobile>
  );
};

export default VoteSetup;
