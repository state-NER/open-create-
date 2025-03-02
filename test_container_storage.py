import unittest
from container_storage import ContainerStorage

class TestContainerStorage(unittest.TestCase):
    
    def setUp(self):
        self.storage = ContainerStorage()
        self.storage.create_container("test_container")
    
    def test_create_container(self):
        with self.assertRaises(ValueError):
            self.storage.create_container("test_container")
    
    def test_store_data(self):
        self.storage.store_data("test_container", "key1", "value1")
        self.assertEqual(self.storage.retrieve_data("test_container", "key1"), "value1")
    
    def test_retrieve_data(self):
        self.storage.store_data("test_container", "key1", "value1")
        self.assertEqual(self.storage.retrieve_data("test_container", "key1"), "value1")
        self.assertIsNone(self.storage.retrieve_data("test_container", "nonexistent_key"))
    
    def test_delete_container(self):
        self.storage.delete_container("test_container")
        with self.assertRaises(ValueError):
            self.storage.store_data("test_container", "key1", "value1")

if __name__ == '__main__':
    unittest.main()