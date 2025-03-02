import { produce } from 'immer';

const state = {
  id: 1,
  name: 'John',
  accounts: {
    facebook: {
      id: 'facebook',
      url: '/'
    },
    twitter: {
      id: 'twitter',
      url: '/'
    }
  }
};

// change twitter url: old way
const newState = {
  ...state,
  accounts: {
    ...state.accounts,
    twitter: {
      ...state.accounts.twitter,
      url: '/new-twitter-url'
    }
  }
}
console.log(newState);

// change twitter url using immer

const newStateImmer = produce(state, (draft) => {
  draft.accounts.twitter.url = '/new-twitter-url';
});

console.log(newStateImmer);