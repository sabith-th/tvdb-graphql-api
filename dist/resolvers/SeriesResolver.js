"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const getNextEpisode = async (id, latestSeason, dataSources) => {
  const latestEpisodes = await dataSources.tvdbAPI.getEpisodes({ id, airedSeason: latestSeason });
  latestEpisodes.data.sort((a, b) => {
    if (a.firstAired && b.firstAired) {
      return new Date(a.firstAired) - new Date(b.firstAired);
    }
    return 1;
  });
  const nextEpisodes = latestEpisodes.data.filter(episode => {
    const airDate = new Date(episode.firstAired).setHours(0, 0, 0, 0);
    const today = new Date().setHours(0, 0, 0, 0);
    return airDate >= today;
  });
  return nextEpisodes[0];
};

const seriesResolver = {
  Query: {
    series: async (_, { id }, { dataSources }) => {
      const response = await dataSources.tvdbAPI.getSeries(id);
      return response.data;
    },
    seriesInfo: async (_, { id }) => ({ id })
  },
  SeriesResponse: {
    series: async (parent, _, { dataSources }) => {
      const { id } = parent;
      const response = await dataSources.tvdbAPI.getSeries(id);
      return response.data;
    },
    actors: async (parent, _, { dataSources }) => {
      const { id } = parent;
      const response = await dataSources.tvdbAPI.getActors(id);
      return response.data;
    },
    episodesSummary: async (parent, _, { dataSources }) => {
      const { id } = parent;
      const response = await dataSources.tvdbAPI.getSummary(id);
      return _extends({}, response.data, {
        id
      });
    },
    images: async (parent, { keyType, subKey, resolution }, { dataSources }) => {
      const { id } = parent;
      const response = await dataSources.tvdbAPI.getImages(id, keyType, subKey, resolution);
      return response.data;
    },
    episodes: async (parent, { absoluteNumber, airedSeason, airedEpisode, dvdSeason, dvdEpisode, imdbId, page }, { dataSources }) => {
      const { id } = parent;
      const response = await dataSources.tvdbAPI.getEpisodes({
        id,
        absoluteNumber,
        airedSeason,
        airedEpisode,
        dvdSeason,
        dvdEpisode,
        imdbId,
        page
      });
      return response.data;
    }
  },
  EpisodesSummary: {
    nextEpisode: async (parent, _, { dataSources }) => {
      const { airedSeasons, id } = parent;
      const latestSeason = Math.max(...airedSeasons);
      const nextEpisode = await getNextEpisode(id, latestSeason, dataSources);
      return nextEpisode;
    }
  }
};

exports.default = seriesResolver;