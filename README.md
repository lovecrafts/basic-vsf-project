# VSF Apollo Client

Clone this repo and install dependencies
```
git clone git@github.com:lovecrafts/basic-vsf-project.git
yarn install
```

The issue seems to only be visible during production mode
```
yarn build
yarn start
```

Issue 2 requests within 3s of each other with different coookies.
```
curl -s -XGET -H "Cookie: a=1" http://localhost:3000 | grep Cookie & sleep 1 && curl -s -XGET -H "Cookie: a=2" http://localhost:3000 | grep Cookie
```

## Expected
```
Cookie: a=1
Cookie: a=2
```

## Actual
```
Cookie: a=2
Cookie: a=2
```