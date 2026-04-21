import EpisodeResolver from './EpisodeResolver';
import ImageResolver from './ImageResolver';
import ListResolver from './ListResolver';
import LoginResolver from './LoginResolver';
import MovieResolver from './MovieResolver';
import PersonResolver from './PersonResolver';
import SearchResolver from './SearchResolver';
import SeasonResolver from './SeasonResolver';
import SeriesResolver from './SeriesResolver';

const resolvers = [
  SeriesResolver,
  LoginResolver,
  SearchResolver,
  EpisodeResolver,
  ImageResolver,
  MovieResolver,
  SeasonResolver,
  PersonResolver,
  ListResolver,
];

export default resolvers;
