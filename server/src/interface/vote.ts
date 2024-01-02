export interface VoteRequest {
  search?: string;
  sort: number;
}

export interface VoteSubmitRequest {
  voteId: string;
}

export interface VoteAddRequest {
  title: string;
  description: string;
  photoUrl: string;
}

export interface VoteUpdateRequest extends VoteAddRequest {
  id: string;
}

export interface VoteRemoveRequest {
  voteId: string;
}
