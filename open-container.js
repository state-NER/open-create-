class ContainerStorage {
    constructor() {
        this.containers = {};
    }

    createContainer(containerName) {
        if (this.containers.hasOwnProperty(containerName)) {
            throw new Error("Container already exists");
        }
        this.containers[containerName] = {};
    }

    storeData(containerName, key, data) {
        if (!this.containers.hasOwnProperty(containerName)) {
            throw new Error("Container does not exist");
        }
        this.containers[containerName][key] = {
            data: data,
            timestamp: new Date().toISOString()
        };
    }

    retrieveData(containerName, key) {
        if (!this.containers.hasOwnProperty(containerName)) {
            throw new Error("Container does not exist");
        }
        return this.containers[containerName].hasOwnProperty(key) ? this.containers[containerName][key] : null;
    }

    deleteContainer(containerName) {
        if (!this.containers.hasOwnProperty(containerName)) {
            throw new Error("Container does not exist");
        }
        delete this.containers[containerName];
    }

    listContainers() {
        return Object.keys(this.containers);
    }

    listContainerKeys(containerName) {
        if (!this.containers.hasOwnProperty(containerName)) {
            throw new Error("Container does not exist");
        }
        return Object.keys(this.containers[containerName]);
    }

    containerExists(containerName) {
        return this.containers.hasOwnProperty(containerName);
    }

    keyExists(containerName, key) {
        if (!this.containers.hasOwnProperty(containerName)) {
            throw new Error("Container does not exist");
        }
        return this.containers[containerName].hasOwnProperty(key);
    }
}

class UserStorage extends ContainerStorage {
    constructor() {
        super();
        this.dataTypes = ['account', 'login', 'credit_card'];
    }

    storeAccountData(containerName, accountData) {
        this.storeData(containerName, 'account', accountData);
    }

    storeLoginData(containerName, loginData) {
        this.storeData(containerName, 'login', loginData);
    }

    storeCreditCardData(containerName, creditCardData) {
        this.storeData(containerName, 'credit_card', creditCardData);
    }

    retrieveAccountData(containerName) {
        return this.retrieveData(containerName, 'account');
    }

    retrieveLoginData(containerName) {
        return this.retrieveData(containerName, 'login');
    }

    retrieveCreditCardData(containerName) {
        return this.retrieveData(containerName, 'credit_card');
    }
}

class AdminStorage extends ContainerStorage {
    constructor() {
        super();
    }

    // Additional admin-specific methods can be added here
}

// Example usage
const userStorage = new UserStorage();
userStorage.createContainer("user1");
userStorage.storeAccountData("user1", { username: "user1", password: "pass123" });
userStorage.storeLoginData("user1", { lastLogin: "2025-03-02T19:56:37.000Z" });
userStorage.storeCreditCardData("user1", { cardNumber: "1234-5678-9012-3456", expiryDate: "12/25" });

console.log(userStorage.retrieveAccountData("user1"));  // Output: { data: { username: 'user1', password: 'pass123' }, timestamp: '2025-03-02T19:56:37.000Z' }
console.log(userStorage.retrieveLoginData("user1"));  // Output: { data: { lastLogin: '2025-03-02T19:56:37.000Z' }, timestamp: '2025-03-02T19:56:37.000Z' }
console.log(userStorage.retrieveCreditCardData("user1"));  // Output: { data: { cardNumber: '1234-5678-9012-3456', expiryDate: '12/25' }, timestamp: '2025-03-02T19:56:37.000Z' }

module.exports = { ContainerStorage, UserStorage, AdminStorage };