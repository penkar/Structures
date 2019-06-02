export default class LinkedList {
  _head = null;
  _tail = null;
  _length = 0;
  len = () => this._length;

  add(node) {
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
    let head = this._head;
    while(head) {
      if(head._value === value) break;
      head = head._next;
    }
    return head;
  }

  remove(value) {
    let head = this._head;
    while(head) {
      if( head._value === value ){
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
