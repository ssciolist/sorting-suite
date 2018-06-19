const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const bubbleSort = require('../lib/bubbleSort')
const totalSort = require('../lib/bubbleSort')

describe('sorting', function() {
  it('it can move biggest number to the right', function() {
    let arr = [32, 5,0];
    bubbleSort(arr);
    expect(arr).to.eql([5, 0, 32])
  });
  it('it can sort the whole array', function() {
    let arr = [1000000,200000,30000,4000,500,60];
    totalSort(arr);
    expect(arr).to.eql([60, 500, 4000, 30000, 200000, 1000000])
  })
})
