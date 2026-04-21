import AwardResolver from './AwardResolver';
import CharacterResolver from './CharacterResolver';
import CompanyResolver from './CompanyResolver';
import EpisodeResolver from './EpisodeResolver';
import ImageResolver from './ImageResolver';
import ListResolver from './ListResolver';
import LoginResolver from './LoginResolver';
import MovieResolver from './MovieResolver';
import PersonResolver from './PersonResolver';
import SearchResolver from './SearchResolver';
import SeasonResolver from './SeasonResolver';
import SeriesResolver from './SeriesResolver';
import TranslationResolver from './TranslationResolver';

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
  AwardResolver,
  CompanyResolver,
  CharacterResolver,
  TranslationResolver,
];

export default resolvers;
