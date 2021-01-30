db.createUser({
    user: "root",
    pwd: "rootpassword",
    roles: [{
        role:"read",
        db:"subscribe"
    }]
});

db.plans.insertMany([
    { "planCode": "gb", "planName": "UK", "costMonth": 10, "costYear": 50},
    { "planCode": "fr", "planName": "France", "costMonth": 10, "costYear": 60},
    { "planCode": "de", "planName": "Germany", "costMonth": 15, "costYear": 75},
    { "planCode": "us", "planName": "USA", "costMonth": 25, "costYear": 150},
    { "planCode": "jp", "planName": "Japan", "costMonth": 15, "costYear": 65}
]);