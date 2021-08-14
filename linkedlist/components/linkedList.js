export default class LinkedList {
  _head = null;
  _tail = null;
  _length = 0;
  len = () => this._length;

  add(node) {
    /*  Function will add a new node to a linked list. */
    const tail = this._tail, head = this._head;
    if(this._head === null) {
      this._head = node;
    } else {
      node._previous = tail;
    }
    if(tail === null) {
      this._tail = node;
    } else {
      tail._next = node;
      node._previous = tail;
      this._tail = node;
    }
    this._length++;
  }

  pop() {
    /*  Function will return the last node in a linked list. */
    let tails = this._tail;
    if( tails ){
      if( tails._previous ){
        let previous = tails._previous;
        this._tail = previous;
        previous.next = null;
      } else {
        this._tail = null;
        this._head = null;
      }
      this._length--;
    } else {
      return false
    }
  }

  search(value) {
    /*  Function will search through a linked list and return true or
        false for whether the value exists in the linked list or not. */
    let head = this._head;
    while(head) {
      if(head._value === value) break;
      head = head._next;
    }
    return Boolean(head);
  }

  remove(value) {
    /*  Function will remove and return a node from a linked list.
        If the node does not exist null should be returned. */
    let head = this._head;
    while(head) {
      if( head._value === value ) {
        if( head._previous ) head._previous._next = head._next;
        if( head._next ) head._next._previous = head._previous;
        this._length--;
        break;
      }
      head = head._next;
    }
    return head;
  }
}
