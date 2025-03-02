const { ContainerStorage, UserStorage, AdminStorage } = require('./container');
const assert = require('assert');

describe('ContainerStorage', function() {
    let storage;

    beforeEach(function() {
        storage = new ContainerStorage();
        storage.createContainer("test_container");
    });

    it('should create a container', function() {
        assert.throws(() => {
            storage.createContainer("test_container");
        }, /Container already exists/);
    });

    it('should store data in a container', function() {
        storage.storeData("test_container", "key1", "value1");
        const storedData = storage.retrieveData("test_container", "key1");
        assert.strictEqual(storedData.data, "value1");
        assert.ok(storedData.timestamp);
    });

    it('should retrieve data from a container', function() {
        storage.storeData("test_container", "key1", "value1");
        const storedData = storage.retrieveData("test_container", "key1");
        assert.strictEqual(storedData.data, "value1");
        assert.ok(storedData.timestamp);
        assert.strictEqual(storage.retrieveData("test_container", "nonexistent_key"), null);
    });

    it('should delete a container', function() {
        storage.deleteContainer("test_container");
        assert.throws(() => {
            storage.storeData("test_container", "key1", "value1");
        }, /Container does not exist/);
    });

    it('should list containers', function() {
        storage.createContainer("container1");
        storage.createContainer("container2");
        assert.deepStrictEqual(storage.listContainers(), ["test_container", "container1", "container2"]);
    });

    it('should list container keys', function() {
        storage.storeData("test_container", "key1", "value1");
        storage.storeData("test_container", "key2", "value2");
        assert.deepStrictEqual(storage.listContainerKeys("test_container"), ["key1", "key2"]);
    });

    it('should check container existence', function() {
        assert.strictEqual(storage.containerExists("test_container"), true);
        assert.strictEqual(storage.containerExists("nonexistent_container"), false);
    });

    it('should check key existence in a container', function() {
        storage.storeData("test_container", "key1", "value1");
        assert.strictEqual(storage.keyExists("test_container", "key1"), true);
        assert.strictEqual(storage.keyExists("test_container", "nonexistent_key"), false);
    });
});

describe('UserStorage', function() {
    let userStorage;

    beforeEach(function() {
        userStorage = new UserStorage();
        userStorage.createContainer("user1");
    });

    it('should store and retrieve account data', function() {
        userStorage.storeAccountData("user1", { username: "user1", password: "pass123" });
        const accountData = userStorage.retrieveAccountData("user1");
        assert.strictEqual(accountData.data.username, "user1");
        assert.strictEqual(accountData.data.password, "pass123");
    });

    it('should store and retrieve login data', function() {
        userStorage.storeLoginData("user1", { lastLogin: "2025-03-02T19:56:37.000Z" });
        const loginData = userStorage.retrieveLoginData("user1");
        assert.strictEqual(loginData.data.lastLogin, "2025-03-02T19:56:37.000Z");
    });

    it('should store and retrieve credit card data', function() {
        userStorage.storeCreditCardData("user1", { cardNumber: "1234-5678-9012-3456", expiryDate: "12/25" });
        const creditCardData = userStorage.retrieveCreditCardData("user1");
        assert.strictEqual(creditCardData.data.cardNumber, "1234-5678-9012-3456");
        assert.strictEqual(creditCardData.data.expiryDate, "12/25");
    });
});