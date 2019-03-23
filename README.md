# TVDB GraphQL API

A GraphQL API built on top of the [TVDB](https://api.thetvdb.com/swagger#/) rest api.

A currently deployed version can be found in [https://tvdb-graphql-api.sabith-th.now.sh](https://tvdb-graphql-api.sabith-th.now.sh)

## Installation

Install dependencies using yarn or npm:

```bash
yarn install
```

Run a local development server:

```bash
yarn dev
```

Build the project:

```bash
yarn build
```

Run production version:

```bash
yarn start
```

## Usage

Before any requests can be made, you need to login and obtain a JWT Token. For logging in you need a TVDB account. Once you have the necessary credentials, you can make a login mutation request and get a token.

```graphql
mutation LoginMutation {
  login(auth: { apikey: "XXXXX", userkey: "XXXX", username: "XXXXX" }) {
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

If you want to use the [Apollo Engine](https://www.apollographql.com/docs/apollo-server/features/metrics.html#Apollo-Engine), you need to create a service and add the apollo engine key as an evironment variable or in a .env file

```
ENGINE_API_KEY=XXXXXXXXX
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
