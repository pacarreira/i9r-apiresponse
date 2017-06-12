# i9r-log
[![N|Solid](https://www.inovretail.com/img/site/LOGOTYPE.png)](https://inovretail.com)  
This repository is to be used as a log plugin

### Tech
This plugin uses the following module:

* [Winston] - Logging library with support for multiple transports

### Install
```sh
npm install <REPO_URL>
```

### Setup
* Options default
[
    {
        type: "Console",
        level: "info"
    },
    {
        type: "File",
        level: "info",
        filename: "log.log"
    }
]

* Setup example
```sh
var log = require("i9r-log")(<transports>);
```


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen.)

   [Winston]: <https://github.com/winstonjs/winston/>
