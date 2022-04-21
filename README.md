  <div style="font-size:25px;text-align:center">PRODUCT SERVICE PROVIDER BOILERPLATE</div>
  <hr>
  
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Supported HTTP calls
| Method | Endpoint |
| ------- | ------- |
| GET | [url](http://localhost:3000)/info |
| POST | [url](http://localhost:3000)/create |
| POST | [url](http://localhost:3000)/renew |
| POST | [url](http://localhost:3000)/upgrade |
| POST | [url](http://localhost:3000)/downgrade |
| POST | [url](http://localhost:3000)/suspend |
| POST | [url](http://localhost:3000)/unsuspend |
| POST | [url](http://localhost:3000)/delete |
| POST | [url](http://localhost:3000)/upgradeable |
| POST | [url](http://localhost:3000)/downgradeable |
| POST | [url](http://localhost:3000)/validate/action-fiels |
| POST | [url](http://localhost:3000)/validate/addons |

## .env required
 ```
 #General
 SERVICE_PROVIDER_TOKEN=test
 ```

## Authentication
 Provider's token as bearer in headers

 *example*
 ```
 Authorization: Bearer test
 ```

 

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Includes

- Swagger (OpenAPI)
- Passport (Authentication)
- Class Validator (Validation)

## Docker
Build
```
docker build -t dummy-product:0.0.1 .
```

Run
```
docker run -p3003:3001 --rm -d dummy-product:0.0.1
```

Push
```
docker tag dummy-product:0.0.1 hosterai/dummy-product:0.0.1
docker tag dummy-product:0.0.1 hosterai/dummy-product:latest
docker push hosterai/dummy-product:0.0.1
docker push hosterai/dummy-product:latest
```

Google Artifacts (docker)
```
docker tag dummy-product:0.0.1 us-docker.pkg.dev/hoster-dev/hoster/dummy-product:0.0.1
docker push us-docker.pkg.dev/hoster-dev/hoster/dummy-product:0.0.1
```