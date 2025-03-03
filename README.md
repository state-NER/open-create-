# ![Container Storage Logo](logo.png) Container Storage

[![CNCF Status](https://img.shields.io/badge/cncf%20status-incubating-blue.svg)](https://www.cncf.io/projects)

[![LICENSE](https://img.shields.io/github/license/state-NER/open-create-.svg)](https://github.com/state-NER/open-create-/blob/master/LICENSE)
[![Language](https://img.shields.io/badge/Language-JavaScript%20%2F%20Python%20%2F%20HTML-blue.svg)](https://github.com/state-NER/open-create-)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/6232/badge)](https://www.bestpractices.dev/projects/6232)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/state-NER/open-create-/badge)](https://securityscorecards.dev/viewer/?uri=github.com/state-NER/open-create-)
[![Codecov](https://img.shields.io/codecov/c/github/state-NER/open-create-?style=flat-square&logo=codecov)](https://codecov.io/gh/state-NER/open-create-)
[![Artifact HUB](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/open-create-)](https://artifacthub.io/packages/helm/open-create-/open-create-)
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/open-create-/badge)](https://clomonitor.io/projects/cncf/open-create-)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fstate-NER%2Fopen-create-.svg?type=shield&issueType=security)](https://app.fossa.com/projects/git%2Bgithub.com%2Fstate-NER%2Fopen-create-?ref=badge_shield)
[![Release](https://img.shields.io/github/v/release/state-NER/open-create-.svg?color=161823&style=flat-square&logo=smartthings)](https://github.com/state-NER/open-create-/releases)
[![Tag](https://img.shields.io/github/v/tag/state-NER/open-create-.svg?color=ee8936&logo=fitbit&style=flat-square)](https://github.com/state-NER/open-create-/tags)
[![Gurubase](https://img.shields.io/badge/Gurubase-Ask%20Open%20Create%20Guru-006BFF)](https://gurubase.io/g/open-create-)

## Overview
Container Storage is an advanced, professional storage system designed to hold large amounts of data in containers. It combines the benefits of databases and cloud storage to provide high performance, scalability, and flexibility.

## Features
- **High Performance**: Low latency and high throughput for data operations.
- **Scalability**: Designed to handle large amounts of data efficiently.
- **Flexibility**: Supports various types of data storage, including account creation, login information, and credit card details.
- **User and Admin Versions**: Separate storage versions for users and administrators.
- **Timestamped Data Entries**: Each data entry is timestamped for easy tracking.
- **Container Management**: Create, delete, list containers, and manage container keys.
- **HTML Integration**: Easy integration with HTML for data retrieval and interaction.

## Site Description for Search Engines
Container Storage is a cutting-edge system for managing large volumes of data within containers, offering unparalleled performance, scalability, and flexibility. Ideal for both user and admin storage needs, with timestamped entries and comprehensive container management.

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
    <link rel="stylesheet" href="style.css"> <!-- Link to external CSS file -->
    <style>
        /* Base Styles */
        :root {
            --primary-color: #2C3E50;
            --secondary-color: #3498DB;
            --accent-color: #2980B9;
            --background-color: #F8F9FA;
            --text-color: #2C3E50;
            --success-color: #27AE60;
            --border-radius: 12px;
            --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            margin: 0;
            padding: 0;
            background-color: var(--background-color);
            color: var(--text-color);
            line-height: 1.6;
        }

        .header {
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            color: white;
            padding: 2rem 0;
            text-align: center;
            box-shadow: var(--box-shadow);
            margin-bottom: 2rem;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto 100px;
            background: white;
            padding: 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            transition: transform 0.2s ease;
        }

        .container:hover {
            transform: translateY(-2px);
        }

        h1, h2, h3 {
            color: var(--primary-color);
            margin-bottom: 1.5rem;
        }

        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: -0.5px;
        }

        form {
            max-width: 600px;
            margin: 0 auto;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: var(--primary-color);
        }

        input[type="text"] {
            width: 100%;
            padding: 0.8rem;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        input[type="text"]:focus {
            border-color: var(--secondary-color);
            outline: none;
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
        }

        button {
            background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        button:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
        }

        #output {
            margin-top: 2rem;
            padding: 1.5rem;
            background-color: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid var(--secondary-color);
            font-family: monospace;
            white-space: pre-wrap;
        }

        .footer {
            background: var(--primary-color);
            color: white;
            text-align: center;
            padding: 1.5rem 0;
            position: fixed;
            width: 100%;
            bottom: 0;
            backdrop-filter: blur(5px);
            background-color: rgba(44, 62, 80, 0.95);
        }

        @media (max-width: 768px) {
            .container {
                margin: 0 1rem 100px;
                padding: 1.5rem;
            }

            h1 {
                font-size: 2rem;
            }

            button {
                padding: 0.75rem;
            }
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        #output {
            animation: fadeIn 0.3s ease-out;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Open Create - Container Storage</h1>
    </div>
    <div class="container">
        <h2>Retrieve Data from Containers</h2>
        <form id="retrieveForm">
            <div class="form-group">
                <label for="retrieveContainerName">Container Name:</label>
                <input type="text" id="retrieveContainerName" name="retrieveContainerName" required>
            </div>
            <div class="form-group">
                <label for="retrieveKey">Key:</label>
                <input type="text" id="retrieveKey" name="retrieveKey" required>
            </div>
            <button type="submit">Retrieve Data</button>
        </form>
        <div id="output"></div>
    </div>
    <div class="footer">
        <p>© 2025 Open Create</p>
    </div>
    <script src="container.js"></script>
    <script>
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
