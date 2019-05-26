# node-account-api

## Design
app-context: `/node-account-api`


## URIs
    1. GET: /accounts
    2. GET: /accounts/{id}
    3. GET: /accounts/search?pn=pv[&pn=pv]
    4. POST: /accounts
    5. PUT: /accounts/{id}
    6. DELETE: /accounts/{id}

account model:
```
{
    "id": <string>
    "type": <string>
    "balance": <double>
}
```

## MongoDB
+ docker listing port: `...`
+ database name: node-account-api-db