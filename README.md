OrganicOne UI-Angular
=============================


## Requirements
* Note ! The deployment of dev environment have been tested on OS Centos 7.4

*  Install NodeJS

   - Download NodeJS yum repository:

    ```
      curl -sL https://rpm.nodesource.com/setup_8.x | bash -
    ```

   - YUM Install

    ```
      yum install nodejs-8.6.0       
    ```


*  Install

```
  npm install       
```

## Building NodeJS
```
  yum install nodejs-8.6.0       
```

## Serve NodeJS
```
  npm serve      
```

## REST
```
  "npm run rest" - to start REST services running on port 4201 
  
  rest.js - produces REST services. There are methods with GET and POST 
  
  src/app/utils/rest.ts - is a wrapper to make AJAX calls. take a look at src/app/services/user/user.service.ts 
                          how it is used
                          
  
  Note: When switch to consume another Web Services DON'T forget to configure CORS on server otherwise browser won't make requests.
  
  You need to put this in a Filter on server side:
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE, OPTIONS');
                          
  
      
```
