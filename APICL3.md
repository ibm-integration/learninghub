# API Connect Level 3

This repo is intended to simplify the copy and paste steps of commands of API Connect L3. Instead to copy the commands from PDF file, go ahead and use commands from this file.

The commands are identified by the step number of the Original Demo Guide document.

### 2.5.7
```
node -v
```

### 2.5.8
```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Bypass
```

### 2.6.1
```
npm install -g stepzen
```

### 3.2.3.1
```
stepzen login [your_domain] -a [your_environment]
```

### 3.3.1.1
```
mkdir product-demo
```

### 3.3.1.2
```
cd product-demo
```

### 3.3.2.1
```
stepzen init --endpoint=api/product-demo
```

### 3.3.3.1
```
stepzen import curl "https://introspection.apis.stepzen.com/customers" --query-name "customers"
```

### 3.4.1.1
```
stepzen import curl "https://introspection.apis.stepzen.com/orders" --query-name "orders" --query-type "Order"
```

### 3.4.3.1
```
stepzen start
```

### 3.5.1.1
```
stepzen import postgresql --db-host='postgresqlaws.introspection.stepzen.net' --db-database='introspection' --db-user='testUserIntrospection' --db-password='HurricaneStartingSample1934' --name=postgresql
```

### 3.6.1.1
```
getAddressById(id: Int!): [Address]
  @dbquery(
    type: "postgresql"
     schema: "public"
     query: 
     """
     SELECT * FROM "address" where "id" = $1
     """
     configuration: "postgresql_config"
  )
```

### 3.6.2.2
```
address: [Address]
  @materializer (query: "getAddressById")
```

### 3.6.3.1
```
stepzen start
```

### 3.6.3.3
```
{
  customers {
    email
    id
    name
    address {
      city
      countryregion
      postalcode
      stateprovince
    }
  }
}
```

### 3.8.4.6
```
{
  customers {
    email
    id
    name
    address {
      city
      countryregion
      postalcode
      stateprovince
    }
  }
}
```

### 3.10.4.3
```
query customers {
  customers {
    address {
      city
      street
      countryregion
      postalcode
      stateprovince
    }
    email
    id
    name
  }
}
```