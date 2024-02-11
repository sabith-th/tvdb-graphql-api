import EpisodeResolver from './EpisodeResolver.js';
import ImageResolver from './ImageResolver.js';
import LoginResolver from './LoginResolver.js';
import SearchResolver from './SearchResolver.js';
import SeriesResolver from './SeriesResolver.js';

const resolvers = [SeriesResolver, LoginResolver, SearchResolver, EpisodeResolver, ImageResolver];

export default resolvers;
