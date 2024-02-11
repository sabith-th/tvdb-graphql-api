# TVDB GraphQL API

![Production Deployment](https://github.com/sabith-th/tvdb-graphql-api/actions/workflows/production.yml/badge.svg)

A GraphQL API built on top of the [TVDB v4](https://thetvdb.github.io/v4-api/) rest api.

Having a GraphQL API on top of the REST API allows for more flexibility and ease of use. For example, you can query for multiple resources in a single request, and you can get only the fields you need. Additionally, new capabilities like finding the next episode of a series is added, which is not available in the REST API.

A currently deployed version can be found in [https://tvdb-graphql-api.sabith-th.vercel.app/](https://tvdb-graphql-api.sabith-th.vercel.app)

## Installation

Install dependencies using pnpm:

```bash
pnpm install
```

Run a local development server:

```bash
pnpm run dev
```

Build the project:

```bash
pnpm run build
```

Run production version:

```bash
pnpm start
```

## Usage

Before any requests can be made, you need to login and obtain a Token. For logging in you need a TVDB account. Once you have the necessary credentials, you can make a login mutation request and get a token.

```graphql
mutation LoginMutation {
  login(auth: { apikey: "XXXXX" }) {
    token
  }
}
```

Once you have the token, you need to pass the token in the header of all your requests.

```json
{
  "authorization": "TOKEN"
}
```

You can then make requests to the API. For example, to query for a series by its id and get back information like genres, characters, and the next episode, you can use the following query, with `$seriesInfoId` being the id of the series you want to query for:

```graphql
query SeriesInfo($seriesInfoId: Int!) {
  seriesInfo(id: $seriesInfoId) {
    series {
      id
      genres {
        name
      }
      characters {
        name
        isFeatured
        personName
        image
      }
      overview
    }
    nextEpisode {
      aired
      name
      overview
      runtime
    }
  }
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
