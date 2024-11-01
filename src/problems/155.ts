interface StackElement {
    val: number;
    min: number;
}

class MinStack {
    #stack: StackElement[];

    constructor() {
        this.#stack = [];
    }

    push(val: number): void {
        this.#stack.unshift({
            val,
            min: this.#stack.length ? Math.min(this.#stack[0].min, val) : val
        });
    }

    pop(): void {
        this.#stack.shift();
    }

    top(): number {
        return this.#stack[0].val;
    }

    getMin(): number {
        return this.#stack[0].min;
    }
}