const AWS = require('aws-sdk');


AWS.config.update({
    region: 'us-east-1', // e.g., 'us-east-1'
    accessKeyId:'ASIAQ3EGT552VTDBZ27Y',
    secretAccessKey:'eEzGURKVJcUGpQLnD2+bICzPUWXLQUWPBhg9TyV0',
    sessionToken: 'IQoJb3JpZ2luX2VjEJr//////////wEaCXVzLXdlc3QtMiJIMEYCIQCKba0NY7nkwZpXeFctnEgqafYcvdNOj9sQPjIzWY0i8AIhAO/ZgmdZtc1+k3l27yS7oTuCrpMAu0SJveBUfXSbXbEyKr8CCNP//////////wEQABoMMDU4MjY0MzgzMzQ5Igyoeaz7pycFCclb5jkqkwLpZCKL71dvIVM8Wm9XUTQjO4TtqNk/7Os7C/kNGmqUmXGpBj9vM8G3DYKCTQUznVhw9J6g0VFM5spLfkLLLT/2SW7PdDHEDkNqjIEaoMoWBQxHQLnqdEIqCaKp1mDML5r8K1MooHhzhxKDAQ8uspQ1TqJHEw+ofMGC/ETNjEBaYrU5WYhxmnAtfu+jOl2ezR2dmu8nw0NHu4TknR88RMDP69sLOiNzERVyuob9pWKBHxS5jSl1Pq3gGDPU8Q8/Y6mPi0zDP9zKyqGv45FL7fYpEUckCR8rm6koOHwIlSMV0W7nZDU3jhefmF97IhVybJ1d4EFRNadzccnF03fK3TPRvi+a/KyCZSvBTkp6kFxW2aNhBDCmuv6wBjqcAXIoixFXR+M3qSJhyzQSHpBoBu4B9xk51EKJ8veRjZ4CIbQ5T4t93dHMwShEYGJTgDzccH2yVIU1OJyV9kQcZ3NNUjqaE98n69juhavO0lETM37HRmnUW94B+tQbUgKjUyoiMkQAVdzUsdCTbyw/75Yw3X0TeSSYhcT4h3Vee2mXRqW+KOe/hZJo34NrT1IdnD6GWPiA1Kqweoehlw=='
});


// Function to verify login
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const createusermusictable = () => {
    const dynamodb = new AWS.DynamoDB();

// Define table parameters
    const params = {
        TableName: 'Usersub',
        KeySchema: [
            {AttributeName: 'email', KeyType: 'HASH'} // Partition key
        ],
        AttributeDefinitions: [
            {AttributeName: 'email', AttributeType: 'S'}, // String data type for title
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5, // Adjust as needed
            WriteCapacityUnits: 5 // Adjust as needed
        }
    };

    dynamodb.createTable(params, (err, data) => {
        if (err) {
            console.error('Unable to create table. Error JSON:', JSON.stringify(err, null, 2));
        } else {
            console.log('Created table. Table description JSON:', JSON.stringify(data, null, 2));
        }
    });
};
export default createusermusictable