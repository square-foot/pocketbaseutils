
/*
   This is just a sample.
   You can create such a file by using the pocketbase export collections feature

*/


let collections = [
    {
        "id": "bft7xj5en4tjy3y",
        "name": "spaceusers",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "miyplaqg",
                "name": "space",
                "type": "relation",
                "system": false,
                "required": true,
                "options": {
                    "collectionId": "ljxj9jhxl57q7ri",
                    "cascadeDelete": false,
                    "minSelect": null,
                    "maxSelect": 1,
                    "displayFields": []
                }
            },
            {
                "id": "xhk1ttby",
                "name": "patients",
                "type": "relation",
                "system": false,
                "required": true,
                "options": {
                    "collectionId": "_pb_users_auth_",
                    "cascadeDelete": false,
                    "minSelect": null,
                    "maxSelect": null,
                    "displayFields": []
                }
            },
            {
                "id": "rnmsahjr",
                "name": "entered",
                "type": "date",
                "system": false,
                "required": true,
                "options": {
                    "min": "",
                    "max": ""
                }
            },
            {
                "id": "ekpdyhel",
                "name": "exited",
                "type": "date",
                "system": false,
                "required": false,
                "options": {
                    "min": "",
                    "max": ""
                }
            }
        ],
        "indexes": [],
        "listRule": null,
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {}
    },
    {
        "id": "ljxj9jhxl57q7ri",
        "name": "spaces",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "a8mwi4mc",
                "name": "premise",
                "type": "relation",
                "system": false,
                "required": true,
                "options": {
                    "collectionId": "qteq98ed36bobcv",
                    "cascadeDelete": false,
                    "minSelect": null,
                    "maxSelect": 1,
                    "displayFields": []
                }
            },
            {
                "id": "d0pusebd",
                "name": "spacename",
                "type": "text",
                "system": false,
                "required": true,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "dqfoxluc",
                "name": "spaceitems",
                "type": "json",
                "system": false,
                "required": true,
                "options": {}
            },
            {
                "id": "xnmqgvxk",
                "name": "occupancy",
                "type": "number",
                "system": false,
                "required": true,
                "options": {
                    "min": null,
                    "max": null
                }
            }
        ],
        "indexes": [],
        "listRule": null,
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {}
    },
    {
        "id": "qteq98ed36bobcv",
        "name": "premises",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "flkkukae",
                "name": "premisename",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            }
        ],
        "indexes": [],
        "listRule": null,
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {}
    },
    {
        "id": "hzdksw50lx7ma2f",
        "name": "medicalrecords",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "70hvrdcw",
                "name": "theuser",
                "type": "relation",
                "system": false,
                "required": false,
                "options": {
                    "collectionId": "_pb_users_auth_",
                    "cascadeDelete": false,
                    "minSelect": null,
                    "maxSelect": 1,
                    "displayFields": [
                        "username"
                    ]
                }
            },
            {
                "id": "el4qwteb",
                "name": "testdate",
                "type": "date",
                "system": false,
                "required": false,
                "options": {
                    "min": "",
                    "max": ""
                }
            },
            {
                "id": "w2rigu7s",
                "name": "record",
                "type": "json",
                "system": false,
                "required": true,
                "options": {}
            }
        ],
        "indexes": [],
        "listRule": null,
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {}
    },
    {
        "id": "o3kf50y3hwx0v83",
        "name": "inventory",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "j9kvtmce",
                "name": "itemcode",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "f0arhwk9",
                "name": "name",
                "type": "text",
                "system": false,
                "required": true,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "hkc1yk6g",
                "name": "description",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "juvpq3pc",
                "name": "itemunit",
                "type": "number",
                "system": false,
                "required": true,
                "options": {
                    "min": null,
                    "max": null
                }
            },
            {
                "id": "a30ujjd0",
                "name": "itemquantity",
                "type": "text",
                "system": false,
                "required": true,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "mtgt7ess",
                "name": "itemprice",
                "type": "number",
                "system": false,
                "required": true,
                "options": {
                    "min": null,
                    "max": null
                }
            },
            {
                "id": "kim6xkwb",
                "name": "itemcost",
                "type": "number",
                "system": false,
                "required": true,
                "options": {
                    "min": null,
                    "max": null
                }
            },
            {
                "id": "iig3yw6p",
                "name": "warnings",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "3ys8z5jc",
                "name": "internalitem",
                "type": "bool",
                "system": false,
                "required": false,
                "options": {}
            },
            {
                "id": "rjbiis7v",
                "name": "itemsupplier",
                "type": "relation",
                "system": false,
                "required": false,
                "options": {
                    "collectionId": "_pb_users_auth_",
                    "cascadeDelete": false,
                    "minSelect": null,
                    "maxSelect": 1,
                    "displayFields": []
                }
            },
            {
                "id": "z8heqtlm",
                "name": "itemusagequantity",
                "type": "number",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null
                }
            },
            {
                "id": "edexvxbz",
                "name": "fullyconsumed",
                "type": "bool",
                "system": false,
                "required": false,
                "options": {}
            },
            {
                "id": "spyeqiqt",
                "name": "inuse",
                "type": "relation",
                "system": false,
                "required": false,
                "options": {
                    "collectionId": "nd8d0zdfnklw7hx",
                    "cascadeDelete": false,
                    "minSelect": null,
                    "maxSelect": 1,
                    "displayFields": []
                }
            }
        ],
        "indexes": [],
        "listRule": null,
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {}
    },
    {
        "id": "xgmajyrywqlvf21",
        "name": "zdocumentation",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "6bmvgq4e",
                "name": "about",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "keipdsq4",
                "name": "explanation",
                "type": "editor",
                "system": false,
                "required": false,
                "options": {}
            }
        ],
        "indexes": [],
        "listRule": null,
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {}
    },
    {
        "id": "jpcv4841bvjmk8i",
        "name": "serviceitems",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "ipiphqki",
                "name": "servicecode",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "o7ecxpec",
                "name": "servicedescription",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "rb9h0zdc",
                "name": "internalservice",
                "type": "bool",
                "system": false,
                "required": false,
                "options": {}
            },
            {
                "id": "zllmviwg",
                "name": "servicecost",
                "type": "number",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null
                }
            },
            {
                "id": "jdcklkem",
                "name": "serviceprice",
                "type": "number",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null
                }
            },
            {
                "id": "q1chy6xi",
                "name": "servicesupplier",
                "type": "relation",
                "system": false,
                "required": false,
                "options": {
                    "collectionId": "_pb_users_auth_",
                    "cascadeDelete": false,
                    "minSelect": null,
                    "maxSelect": 1,
                    "displayFields": []
                }
            },
            {
                "id": "yjkr0reo",
                "name": "servicedone",
                "type": "bool",
                "system": false,
                "required": false,
                "options": {}
            }
        ],
        "indexes": [],
        "listRule": null,
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {}
    },
    {
        "id": "awui49jh9flq1y8",
        "name": "events",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "u6e2vemd",
                "name": "eventname",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "xyf0svyk",
                "name": "eventdescription",
                "type": "editor",
                "system": false,
                "required": false,
                "options": {}
            },
            {
                "id": "lgnxlvmy",
                "name": "charges",
                "type": "number",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null
                }
            },
            {
                "id": "uy6aaobx",
                "name": "eventdatestart",
                "type": "date",
                "system": false,
                "required": false,
                "options": {
                    "min": "",
                    "max": ""
                }
            },
            {
                "id": "yn9cnoo9",
                "name": "eventdateend",
                "type": "date",
                "system": false,
                "required": false,
                "options": {
                    "min": "",
                    "max": ""
                }
            },
            {
                "id": "l6dmcpew",
                "name": "isoffline",
                "type": "bool",
                "system": false,
                "required": false,
                "options": {}
            },
            {
                "id": "db1thiyr",
                "name": "audience",
                "type": "select",
                "system": false,
                "required": false,
                "options": {
                    "maxSelect": 5,
                    "values": [
                        "doctor",
                        "student",
                        "nurse",
                        "therapist",
                        "anyone"
                    ]
                }
            },
            {
                "id": "pcngzrfs",
                "name": "photogallerylink",
                "type": "url",
                "system": false,
                "required": false,
                "options": {
                    "exceptDomains": null,
                    "onlyDomains": null
                }
            },
            {
                "id": "popflmpy",
                "name": "brochure",
                "type": "file",
                "system": false,
                "required": false,
                "options": {
                    "maxSelect": 1,
                    "maxSize": 5242880,
                    "mimeTypes": [],
                    "thumbs": [],
                    "protected": false
                }
            }
        ],
        "indexes": [],
        "listRule": null,
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {}
    },
    {
        "id": "nd8d0zdfnklw7hx",
        "name": "dailyrecords",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "kxemnqmp",
                "name": "patient",
                "type": "relation",
                "system": false,
                "required": true,
                "options": {
                    "collectionId": "_pb_users_auth_",
                    "cascadeDelete": false,
                    "minSelect": null,
                    "maxSelect": 1,
                    "displayFields": []
                }
            },
            {
                "id": "zmds6rg2",
                "name": "log",
                "type": "json",
                "system": false,
                "required": false,
                "options": {}
            },
            {
                "id": "m6f1ofjy",
                "name": "invoiced",
                "type": "number",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null
                }
            },
            {
                "id": "l2dpnetn",
                "name": "haspaid",
                "type": "number",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null
                }
            },
            {
                "id": "urgbwwxo",
                "name": "expenses",
                "type": "number",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null
                }
            }
        ],
        "indexes": [],
        "listRule": null,
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {}
    },
    {
        "id": "_pb_users_auth_",
        "name": "users",
        "type": "auth",
        "system": false,
        "schema": [
            {
                "id": "users_name",
                "name": "name",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "users_avatar",
                "name": "avatar",
                "type": "file",
                "system": false,
                "required": false,
                "options": {
                    "maxSelect": 1,
                    "maxSize": 5242880,
                    "mimeTypes": [
                        "image/jpeg",
                        "image/png",
                        "image/svg+xml",
                        "image/gif",
                        "image/webp"
                    ],
                    "thumbs": null,
                    "protected": false
                }
            },
            {
                "id": "z7shbk2w",
                "name": "address",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "pssmaczt",
                "name": "phonenumber",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": 13,
                    "max": 13,
                    "pattern": "^\\+[0-9]{1,3}[0-9]{9}$"
                }
            },
            {
                "id": "28ha4o9u",
                "name": "currentlyabsent",
                "type": "bool",
                "system": false,
                "required": false,
                "options": {}
            },
            {
                "id": "yyv3uwei",
                "name": "type",
                "type": "select",
                "system": false,
                "required": true,
                "options": {
                    "maxSelect": 7,
                    "values": [
                        "manager",
                        "supplier",
                        "referrer",
                        "student",
                        "therapist"
                    ]
                }
            },
            {
                "id": "xl6vmi31",
                "name": "referredby",
                "type": "relation",
                "system": false,
                "required": false,
                "options": {
                    "collectionId": "_pb_users_auth_",
                    "cascadeDelete": false,
                    "minSelect": null,
                    "maxSelect": 1,
                    "displayFields": []
                }
            },
            {
                "id": "ttjtos2w",
                "name": "highestqualification",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "eg90wqwi",
                "name": "allergies",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "vvijbizw",
                "name": "bloodgroup",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": 5,
                    "pattern": ""
                }
            },
            {
                "id": "yxrk8ole",
                "name": "emergencyphone",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": "^\\+[0-9]{1,3}[0-9]{9}$"
                }
            },
            {
                "id": "1bqd7znn",
                "name": "specialcode",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "s3jypyru",
                "name": "dateofbirth",
                "type": "date",
                "system": false,
                "required": false,
                "options": {
                    "min": "",
                    "max": ""
                }
            },
            {
                "id": "aagdrxjs",
                "name": "anniversarydate",
                "type": "date",
                "system": false,
                "required": false,
                "options": {
                    "min": "",
                    "max": ""
                }
            },
            {
                "id": "67bnujof",
                "name": "opdvisitcount",
                "type": "number",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null
                }
            },
            {
                "id": "bcqruqrs",
                "name": "staycount",
                "type": "number",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null
                }
            },
            {
                "id": "rcg4gqo9",
                "name": "gender",
                "type": "select",
                "system": false,
                "required": false,
                "options": {
                    "maxSelect": 1,
                    "values": [
                        "male",
                        "female",
                        "unknown"
                    ]
                }
            },
            {
                "id": "nrxa5fqe",
                "name": "ntfy_user_topic",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            }
        ],
        "indexes": [],
        "listRule": null,
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {
            "allowEmailAuth": true,
            "allowOAuth2Auth": true,
            "allowUsernameAuth": true,
            "exceptEmailDomains": null,
            "manageRule": null,
            "minPasswordLength": 8,
            "onlyEmailDomains": null,
            "requireEmail": false
        }
    },
    {
        "id": "snv2pk9pnan798k",
        "name": "settings",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "bff1bvau",
                "name": "lastopdqueuenumber",
                "type": "number",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null
                }
            },
            {
                "id": "j5coniuc",
                "name": "lastinventorynumber",
                "type": "number",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null
                }
            },
            {
                "id": "7dgvik63",
                "name": "lastservicenumber",
                "type": "number",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null
                }
            },
            {
                "id": "ilatoul8",
                "name": "itemprices",
                "type": "json",
                "system": false,
                "required": false,
                "options": {}
            },
            {
                "id": "8tt5ziax",
                "name": "serviceprices",
                "type": "json",
                "system": false,
                "required": false,
                "options": {}
            },
            {
                "id": "i2zq19zd",
                "name": "ntfycreds",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            }
        ],
        "indexes": [],
        "listRule": null,
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {}
    },
    {
        "id": "3urzmpnd2e1l9rq",
        "name": "opdsessions",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "wzh4rjzo",
                "name": "queuenumber",
                "type": "number",
                "system": false,
                "required": true,
                "options": {
                    "min": null,
                    "max": null
                }
            },
            {
                "id": "tmfe58fp",
                "name": "patient",
                "type": "relation",
                "system": false,
                "required": true,
                "options": {
                    "collectionId": "_pb_users_auth_",
                    "cascadeDelete": false,
                    "minSelect": null,
                    "maxSelect": 1,
                    "displayFields": [
                        "username"
                    ]
                }
            },
            {
                "id": "kkxpcazy",
                "name": "attendedby",
                "type": "relation",
                "system": false,
                "required": true,
                "options": {
                    "collectionId": "_pb_users_auth_",
                    "cascadeDelete": false,
                    "minSelect": null,
                    "maxSelect": 1,
                    "displayFields": [
                        "username"
                    ]
                }
            },
            {
                "id": "drdsxr3b",
                "name": "opdcabinname",
                "type": "text",
                "system": false,
                "required": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "hnpzy1va",
                "name": "nurseoncall",
                "type": "relation",
                "system": false,
                "required": false,
                "options": {
                    "collectionId": "_pb_users_auth_",
                    "cascadeDelete": false,
                    "minSelect": null,
                    "maxSelect": 1,
                    "displayFields": []
                }
            },
            {
                "id": "aa8t94v2",
                "name": "checkup",
                "type": "editor",
                "system": false,
                "required": true,
                "options": {}
            },
            {
                "id": "uaiiumc8",
                "name": "diagnosis",
                "type": "editor",
                "system": false,
                "required": true,
                "options": {}
            },
            {
                "id": "uajgzcjd",
                "name": "advice",
                "type": "text",
                "system": false,
                "required": true,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "id": "suoq4wsl",
                "name": "isadmitted",
                "type": "bool",
                "system": false,
                "required": false,
                "options": {}
            },
            {
                "id": "cdkaterh",
                "name": "sessionstart",
                "type": "date",
                "system": false,
                "required": false,
                "options": {
                    "min": "",
                    "max": ""
                }
            },
            {
                "id": "3hfjxrhi",
                "name": "sessionend",
                "type": "date",
                "system": false,
                "required": false,
                "options": {
                    "min": "",
                    "max": ""
                }
            }
        ],
        "indexes": [],
        "listRule": null,
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {}
    },
    {
        "id": "0yhiwf73dvi4qdk",
        "name": "vacations",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "jccgjjkj",
                "name": "category",
                "type": "select",
                "system": false,
                "required": false,
                "options": {
                    "maxSelect": 1,
                    "values": [
                        "domestic",
                        "international"
                    ]
                }
            }
        ],
        "indexes": [],
        "listRule": null,
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {}
    }
]
