const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {//длина цепочки
    return this.chain.length;
  },
  addLink(value) {//добавь звено
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {//удали звено
    const index = position - 1;
    if (this.chain[index] === undefined) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(index, 1);
    return this;
  },
  reverseChain() {//переверни
    this.chain.reverse();
    return this;
  },
  finishChain() {//финиш
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
