export default class LinkedList {
  constructor() {
    this._head = null
    this._tail = null
    this._length = 0
  }

  add(node){
    let { _head, _tail, _length } = this;
    console.log(_head);
    if(!_head){
      this._head = node;
    } else {
      this._tail.next = node;
    }
    this._tail = node;
    this._length = _length + 1;
  }

  pop(){
    let { _head, _tail, _length } = this;
    if(_tail){
      if(_tail.previous){
        let previous = _tail.previous
        this._tail = previous
        previous.next = null
      } else {
        this._tail = null;
        this._head = null;
      }
    } else {
      return false
    }
  }

  remove(value){
    let { _head, _tail, _length } = this;
    while(_head){
      if(_head.value === value){
        if( _head.previous ) _head.previous.next = _head.next;
        if( _head.next ) _head.next.previous = _head.previous;
        break;
      }
      _head = _head.next;
    }
  }

  len(){
    let { _head, _tail, _length } = this;
    return _length;
  }
}
