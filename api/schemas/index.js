import gql from 'graphql-tag';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve, join } from 'path';

const modulePath = dirname(fileURLToPath(import.meta.url))
// const typeDefinitions = readFileSync(resolve(modulePath, '../schemas/tvdb.graphql'), 'utf8');

export default gql`
input Auth {
  apikey: String!
}

type Alias {
  name: String!
  language: String!
}

type Award {
  id: Int
  name: String
}

type BasicEpisode {
  aired: String
  airsAfterSeason: Int
  airsBeforeEpisode: Int
  airsBeforeSeason: Int
  finaleType: String
  id: Int!
  image: String
  imageType: Int
  name: String!
  number: Int
  overview: String
  runtime: Int
  seasonNumber: Int
  seasonName: String
  year: String
}

type Conflict {
  # Conflict
  Error: String!
}

type Character {
  id: Int!
  image: String
  isFeatured: Boolean
  name: String
  peopleId: Int
  peopleType: String
  personImgURL: String
  personName: String
}

type Company {
  id: Int!
  name: String
  country: String
}

type Episode {
  aired: String
  airsAfterSeason: Int
  airsBeforeEpisode: Int
  airsBeforeSeason: Int
  awards: [Award]
  characters: [Character]
  finaleType: String
  id: Int!
  image: String
  imageType: Int
  isMovie: Int
  lastUpdated: String
  linkedMovie: Int
  name: String!
  nameTranslations: [String]
  networks: [Company]
  overview: String
  overviewTranslations: [String]
  runtime: Int
  seasonNumber: Int
  seriesId: Int
  seasonName: String
  studios: [Company]
  year: String
}

type EpisodeDataQueryParams {
  data: [String]!
}

type EpisodeLanguageInfo {
  episodeName: String!
  overview: String!
}

type EpisodeRecordData {
  data: Episode!
  errors: JSONErrors!
}

type FilterKeys {
  data: [String]!
}

type Genre {
  id: Int!
  name: String
}

type JSONErrors {
  # Invalid filters passed to route
  invalidFilters: [String]!
  # Invalid language or translation missing
  invalidLanguage: String!
  # Invalid query params passed to route
  invalidQueryParams: [String]!
}

type Language {
  abbreviation: String!
  englishName: String!
  id: Int!
  name: String!
}

type LanguageData {
  data: [Language]!
}

type Links {
  first: Int!
  last: Int!
  next: Int!
  previous: Int!
}

type NotAuthorized {
  # Not Authorized
  Error: String!
}

type NotFound {
  # Not Found
  Error: String!
}

type Status {
  id: Int!
  keepUpdated: Boolean
  name: String!
  recordType: String
}

type Series {
  aliases: [Alias]!
  averageRuntime: Int
  characters: [Character]
  country: String
  defaultSeasonType: Int
  episodes: [BasicEpisode]
  firstAired: String!
  genres: [Genre]
  id: Int!
  image: String
  isOrderRandomized: Boolean
  lastAired: String
  lastUpdated: String
  name: String!
  nameTranslations: [String]!
  nextAired: String
  originalCountry: String
  originalLanguage: String
  overview: String
  overviewTranslations: [String]!
  score: Float
  slug: String
  status: Status
  year: String
}

type SeriesActors {
  data: [SeriesActorsData]!
  errors: JSONErrors
}

type SeriesActorsData {
  id: Int!
  image: String!
  imageAdded: String!
  imageAuthor: Int!
  lastUpdated: String!
  name: String!
  role: String!
  seriesId: Int!
  sortOrder: Int!
}

type SeriesData {
  data: Series!
  # Informative error messages (optional)
  errors: JSONErrors
}

type SeriesEpisodes {
  data: [Episode]!
  errors: JSONErrors!
  links: Links!
}

type SeriesEpisodesQuery {
  data: [Episode]!
  errors: JSONErrors!
  links: Links!
}

type SeriesEpisodesQueryParams {
  data: [String]!
}

type SeriesEpisodesSummary {
  # Number of all aired episodes for this series
  airedEpisodes: String!
  airedSeasons: [String]!
  # Number of all dvd episodes for this series
  dvdEpisodes: String!
  dvdSeasons: [String]!
}

type Artwork {
  episodeId: Int
  height: Int
  id: Int!
  image: String
  includesText: Boolean
  language: String
  seasonId: Int
  seriesId: Int
  thumbnail: String
  thumbnailHeight: Int
  thumbnailWidth: Int
  type: Int
  width: Int
}

type SeriesImageQueryResults {
  data: [Artwork]!
  errors: JSONErrors!
}

type SeriesImagesCount {
  fanart: Int!
  poster: Int!
  season: Int!
  seasonwide: Int!
  series: Int!
}

type SeriesImagesCounts {
  data: SeriesImagesCount!
}

type SeriesImagesQueryParam {
  keyType: String!
  languageId: String!
  resolution: [String]!
  subKey: [String]!
}

type SeriesImagesQueryParams {
  data: [SeriesImagesQueryParam]!
}

type SeriesSearchResult {
  aliases: [String]
  image_url: String
  first_air_time: String
  id: String!
  network: String
  overview: String
  name: String!
  slug: String
  status: String
  tvdb_id: String!
}

type SeriesSearchResults {
  data: [SeriesSearchResult]!
}

type Token {
  token: String!
}

type Update {
  id: Int!
  lastUpdated: Int!
}

type UpdateData {
  data: [Update]!
  errors: JSONErrors!
}

type UpdateDataQueryParams {
  data: [String]!
}

type User {
  favoritesDisplaymode: String!
  language: String!
  userName: String!
}

type UserData {
  data: User!
}

type UserFavorites {
  favorites: [String]!
}

type UserFavoritesData {
  data: UserFavorites!
  errors: JSONErrors!
}

type UserRatings {
  rating: Int!
  ratingItemId: Int!
  ratingType: String!
}

type UserRatingsData {
  data: [UserRatings]!
  errors: JSONErrors!
  links: Links!
}

type UserRatingsDataNoLinks {
  data: [UserRatings]!
}

type UserRatingsDataNoLinksEmptyArray {
  data: [String]!
}

type UserRatingsQueryParams {
  data: [String]!
}

type RatingsInfo {
  # Average rating for the given record.
  average: Float!
  # Number of ratings for the given record.
  count: Int!
}

type EpisodesSummary {
  # Number of all aired episodes for this series
  airedEpisodes: String!
  airedSeasons: [String]!
  # Number of all dvd episodes for this series
  dvdEpisodes: String!
  dvdSeasons: [String]!
  nextEpisode: Episode
}

type SeriesResponse {
  series: Series!
  nextEpisode: Episode
}

enum KeyType {
  FANART
  POSTER
  SEASON
  SERIES
}

type Query {
  series(id: Int!): Series
  searchSeries(name: String!): [SeriesSearchResult]!
  seriesInfo(id: Int!): SeriesResponse
  episode(id: Int!): Episode
  seriesImages(
    id: Int!
    "Language e.g. eng, spa "
    lang: String
    "1 - Graphical Banner, 2 - Graphical Poster, 3 - Original Poster"
    type: Int
  ): [Artwork]
  seriesEpisodes(
    id: Int!
    season: Int
    episodeNumber: Int
    "airDate of the episode, format is yyyy-mm-dd"
    airDate: String
    "season-type: default, official, dvd, absolute. alternate or regional"
    seasonType: String
    page: Int
  ): [BasicEpisode]!
}

type Mutation {
  login(auth: Auth!): Token
}

`;
