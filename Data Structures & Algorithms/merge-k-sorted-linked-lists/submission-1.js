class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    push(node) {
        this.heap.push(node);
        this.bubbleUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let idx = this.heap.length - 1;

        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);

            if (this.heap[parent].val <= this.heap[idx].val) break;

            [this.heap[parent], this.heap[idx]] =
                [this.heap[idx], this.heap[parent]];

            idx = parent;
        }
    }

    bubbleDown() {
        let idx = 0;

        while (true) {
            let smallest = idx;
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;

            if (
                left < this.heap.length &&
                this.heap[left].val < this.heap[smallest].val
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right].val < this.heap[smallest].val
            ) {
                smallest = right;
            }

            if (smallest === idx) break;

            [this.heap[idx], this.heap[smallest]] =
                [this.heap[smallest], this.heap[idx]];

            idx = smallest;
        }
    }
}

class Solution {
    mergeKLists(lists) {
        if (!lists || lists.length === 0) return null;

        const heap = new MinHeap();

        for (let node of lists) {
            if (node) heap.push(node);
        }

        let head = null;
        let tail = null;

        while (heap.size() > 0) {
            let smallest = heap.pop();

            if (!head) {
                head = smallest;
                tail = smallest;
            } else {
                tail.next = smallest;
                tail = tail.next;
            }

            if (smallest.next) {
                heap.push(smallest.next);
            }
        }

        return head;
    }
}