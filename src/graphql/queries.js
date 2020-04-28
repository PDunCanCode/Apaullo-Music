import { gql } from 'apollo-boost';

export const GET_SONGS = gql`
  query getSongs {
    songs(order_by: { created_at: desc }) {
      artist
      duration
      created_at
      thumbnail
      id
      title
      url
    }
  }
`;
