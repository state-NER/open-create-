class ContainerStorage:
    def __init__(self):
        self.containers = {}

    def create_container(self, container_name):
        if container_name in self.containers:
            raise ValueError("Container already exists")
        self.containers[container_name] = {}

    def store_data(self, container_name, key, data):
        if container_name not in self.containers:
            raise ValueError("Container does not exist")
        self.containers[container_name][key] = data

    def retrieve_data(self, container_name, key):
        if container_name not in self.containers:
            raise ValueError("Container does not exist")
        return self.containers[container_name].get(key, None)

    def delete_container(self, container_name):
        if container_name not in self.containers:
            raise ValueError("Container does not exist")
        del self.containers[container_name]

# Example usage
if __name__ == "__main__":
    storage = ContainerStorage()
    storage.create_container("images")
    storage.store_data("images", "image1", "data_of_image1")
    print(storage.retrieve_data("images", "image1"))  # Output: data_of_image1
    storage.delete_container("images")