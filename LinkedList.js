class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }
  get length(): number {
    let length = 0;
    let node = this.head;
    if (!node) return length;
    while (node.next) {
      length++;
      node = this.head.next;
    }
    return length;
  }
}
