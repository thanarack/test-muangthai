import { useEffect, useState } from 'react';
import LayoutMobile from '../components/layout.mobile';
import { VoteItem } from '../components/vote';
import useApiVoteList from '../hooks/useApiVoteList';
import { VoteListResponse } from '../api/api.spec';
import { LoadingSpinner } from '../components/loading';
import DropdownSort from '../components/sort';
import { Header, SearchInput, SubHeader, VoteBox } from '../styles/vote.style';
import { Input } from '../styles/common.style';

const Vote = () => {
  const [sort, setSort] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const apiVoteList = useApiVoteList({ search, sort });
  const voteListResult = apiVoteList.data?.data as VoteListResponse | undefined;

  const onInputBoundary = (e: React.ChangeEvent<HTMLInputElement>) => {
    const timer = setTimeout(() => {
      apiVoteList.refetch();
      clearTimeout(timer);
    }, 500);
    setSearch(e.target.value);
  };

  useEffect(() => {
    apiVoteList.refetch();
  }, [sort]);

  const onVoteSuccess = () => {
    apiVoteList.refetch();
  };

  return (
    <LayoutMobile>
      <Header>Votes List</Header>
      <SubHeader>Click on a movie to vote</SubHeader>
      <Input
        type='text'
        placeholder='Search movies'
        value={search}
        onChange={onInputBoundary}
      />
      <DropdownSort select={sort} onSelect={setSort} />
      {apiVoteList.isLoading && <LoadingSpinner />}
      {apiVoteList.isError && (
        <div>Error: Something, {apiVoteList.error?.message}</div>
      )}
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
              mode='vote'
            />
          )
        )}
      </VoteBox>
    </LayoutMobile>
  );
};

export default Vote;
