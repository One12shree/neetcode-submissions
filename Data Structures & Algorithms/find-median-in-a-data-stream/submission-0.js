class Heap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }

    bubbleUp() {
        let idx = this.heap.length - 1;

        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);

            if (this.compare(this.heap[parent], this.heap[idx])) break;

            [this.heap[parent], this.heap[idx]] =
                [this.heap[idx], this.heap[parent]];

            idx = parent;
        }
    }

    bubbleDown() {
        let idx = 0;
        let len = this.heap.length;

        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let best = idx;

            if (
                left < len &&
                !this.compare(this.heap[best], this.heap[left])
            ) {
                best = left;
            }

            if (
                right < len &&
                !this.compare(this.heap[best], this.heap[right])
            ) {
                best = right;
            }

            if (best === idx) break;

            [this.heap[idx], this.heap[best]] =
                [this.heap[best], this.heap[idx]];

            idx = best;
        }
    }
}

class MedianFinder {
    constructor() {
        this.small = new Heap((a, b) => a > b); // max heap
        this.large = new Heap((a, b) => a < b); // min heap
    }

    addNum(num) {
        if (this.small.size() === 0 || num <= this.small.peek()) {
            this.small.push(num);
        } else {
            this.large.push(num);
        }

        if (this.small.size() > this.large.size() + 1) {
            this.large.push(this.small.pop());
        }

        if (this.large.size() > this.small.size() + 1) {
            this.small.push(this.large.pop());
        }
    }

    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.peek();
        }

        if (this.large.size() > this.small.size()) {
            return this.large.peek();
        }

        return (this.small.peek() + this.large.peek()) / 2;
    }
}