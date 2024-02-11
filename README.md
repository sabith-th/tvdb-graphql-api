# TVDB GraphQL API

A GraphQL API built on top of the [TVDB v4](https://thetvdb.github.io/v4-api/) rest api.

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

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
