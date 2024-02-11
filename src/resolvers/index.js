import EpisodeResolver from './EpisodeResolver';
import ImageResolver from './ImageResolver';
import LoginResolver from './LoginResolver';
import SearchResolver from './SearchResolver';
import SeriesResolver from './SeriesResolver';

const resolvers = [SeriesResolver, LoginResolver, SearchResolver, EpisodeResolver, ImageResolver];

export default resolvers;
