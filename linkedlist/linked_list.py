"""
Module for implementing a doubly linked list.
"""

class Node:
    """
    A class representing a node in a doubly linked list.

    Attributes:
        data: The data stored in the node.
        next (Node): The next node in the linked list.
        last (Node): The previous node in the linked list.
    """
    def __init__(self, data):
        self.data = data
        self.next = None
        self.last = None

class DoublyLinkedList:
    """
    A simple implementation of a singly linked list.

    Attributes:
      head (Node): The first node in the linked list.
      tail (Node): The last node in the linked list.

    Methods:
      __init__():
        Initializes an empty linked list.
      
      add(data):
        Adds a new node with the specified data to the end of the linked list.
      
      find(data):
        Searches for a node with the specified data in the linked list.
        Returns the node if found, otherwise returns None.
    """
    def __init__(self):
        self.head = None
        self.tail = None

    def add(self, data):
        """
        Adds a new node with the specified data to the end of the linked list.
        
        Args:
            data: The data to be added to the linked list.
        """
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            new_node.last = None
        else:
            new_node.last = self.tail
            self.tail.next = new_node
        self.tail = new_node

    def find(self, data):
        """
        Searches for a node with the specified data in the linked list.
        
        Args:
            data: The data to search for in the linked list.
        
        Returns:
            Node: The node with the specified data if found, otherwise None.
        """
        current = self.head
        while current is not None:
            if current.data == data:
                return current
            current = current.next
        return None

if __name__ == "__main__":
    print("Linked List test:")
    linked_list = DoublyLinkedList()
    linked_list.add(1)
    linked_list.add(2)
    linked_list.add(3)
    print(1 == linked_list.head.data, "Linked list should contain a head")
    print(3 == linked_list.tail.data, "Linked list should contain a tail")
    print(2 == linked_list.find(2).data, "Linked list should be able to find nodes by value")
    print(
        2 == linked_list.tail.last.data, 
        "Linked list should be able to move back and forth within nodes"
    )
    print(linked_list.find(22) is None, "If a node does not exist, None should be returned")
    print(linked_list.find(22), "If a node does not exist, None should be returned")
