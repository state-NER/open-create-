# Container Storage

## Overview
Container Storage is an advanced, professional storage system designed to hold large amounts of data in containers. It combines the benefits of databases and cloud storage to provide high performance, scalability, flexibility, and ease of integration with existing systems.

## Features
- **High Performance**: Low latency and high throughput for data operations.
- **Scalability**: Designed to handle large amounts of data efficiently.
- **Flexibility**: Supports various types of data storage, including account creation, login information, and credit card details.
- **User and Admin Versions**: Separate storage versions for users and administrators.
- **Timestamped Data Entries**: Each data entry is timestamped for easy tracking.
- **Container Management**: Create, delete, list containers, and manage container keys.
- **HTML Integration**: Easy integration with HTML for data retrieval and interaction.

## Installation
To install Container Storage, use the following command:
```
npm install container-storage
```

## Usage

### Creating a Container
```javascript
const { ContainerStorage, UserStorage, AdminStorage } = require('container-storage');

const storage = new ContainerStorage();
storage.createContainer("images");
```

### Storing Data
```javascript
storage.storeData("images", "image1", "data_of_image1");
```

### Retrieving Data
```javascript
console.log(storage.retrieveData("images", "image1"));  // Output: { data: 'data_of_image1', timestamp: '2025-03-02T19:56:37.000Z' }
```

### Deleting a Container
```javascript
storage.deleteContainer("images");
```

### Listing All Containers
```javascript
console.log(storage.listContainers());  // Output: ['images']
```

### Listing Keys in a Container
```javascript
console.log(storage.listContainerKeys("images"));  // Output: ['image1']
```

### Checking Container Existence
```javascript
console.log(storage.containerExists("images"));  // Output: true
```

### Checking Key Existence in a Container
```javascript
console.log(storage.keyExists("images", "image1"));  // Output: true
```

### User Storage Example
```javascript
const userStorage = new UserStorage();
userStorage.createContainer("user1");
userStorage.storeAccountData("user1", { username: "user1", password: "pass123" });
userStorage.storeLoginData("user1", { lastLogin: "2025-03-02T19:56:37.000Z" });
userStorage.storeCreditCardData("user1", { cardNumber: "1234-5678-9012-3456", expiryDate: "12/25" });

console.log(userStorage.retrieveAccountData("user1"));  // Output: { data: { username: 'user1', password: 'pass123' }, timestamp: '2025-03-02T19:56:37.000Z' }
console.log(userStorage.retrieveLoginData("user1"));  // Output: { data: { lastLogin: '2025-03-02T19:56:37.000Z' }, timestamp: '2025-03-02T19:56:37.000Z' }
console.log(userStorage.retrieveCreditCardData("user1"));  // Output: { data: { cardNumber: '1234-5678-9012-3456', expiryDate: '12/25' }, timestamp: '2025-03-02T19:56:37.000Z' }
```

## HTML Integration
To integrate with HTML, you can create a simple form to interact with the storage system.

```html name=index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Container Storage</title>
</head>
<body>
    <h1>Container Storage</h1>
    <form id="storageForm">
        <label for="containerName">Container Name:</label>
        <input type="text" id="containerName" name="containerName" required><br><br>
        
        <label for="key">Key:</label>
        <input type="text" id="key" name="key" required><br><br>
        
        <label for="data">Data:</label>
        <input type="text" id="data" name="data" required><br><br>
        
        <button type="submit">Store Data</button>
    </form>

    <h2>Retrieve Data</h2>
    <form id="retrieveForm">
        <label for="retrieveContainerName">Container Name:</label>
        <input type="text" id="retrieveContainerName" name="retrieveContainerName" required><br><br>
        
        <label for="retrieveKey">Key:</label>
        <input type="text" id="retrieveKey" name="retrieveKey" required><br><br>
        
        <button type="submit">Retrieve Data</button>
    </form>

    <div id="output"></div>

    <script src="container.js"></script>
    <script>
        document.getElementById('storageForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const containerName = document.getElementById('containerName').value;
            const key = document.getElementById('key').value;
            const data = document.getElementById('data').value;

            const userStorage = new UserStorage();
            if (!userStorage.containerExists(containerName)) {
                userStorage.createContainer(containerName);
            }
            userStorage.storeData(containerName, key, data);
            alert('Data stored successfully!');
        });

        document.getElementById('retrieveForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const containerName = document.getElementById('retrieveContainerName').value;
            const key = document.getElementById('retrieveKey').value;

            const userStorage = new UserStorage();
            const retrievedData = userStorage.retrieveData(containerName, key);
            document.getElementById('output').innerText = retrievedData ? JSON.stringify(retrievedData) : 'No data found';
        });
    </script>
</body>
</html>
```

## Running Tests
To run the tests, use the following command:
```
mocha test_container_storage.js
```

## License
This project is licensed under the MIT License.

## Additional Resources
- [Project Website](https://example.com)
- [API Documentation](https://example.com/docs)
- [Developer Guide](https://example.com/developer-guide)

## Media
### Teaser Video
[![Watch the teaser video](https://example.com/teaser-thumbnail.jpg)](https://example.com/teaser-video)

### Storage Sound
[Listen to the storage sound](https://example.com/storage-sound)
