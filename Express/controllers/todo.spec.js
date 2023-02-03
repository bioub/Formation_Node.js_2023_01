const { expect, use } = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { describe, it, afterEach } = require("mocha");
const { list } = require("./todo");
const Todo = require('../models/todo');

use(sinonChai)
// double
// fake : réécrit la fonction moi-même
// Todo.find = async function() {
//   return [{id: 1, title: 'ABC', completed: false}]
// }

describe('list controller', () => {
  it('should call res.json with todos', async () => {
    const data = [{id: 1, title: 'ABC', completed: false}];
    sinon.mock(Todo).expects('find').resolves(data);

    const req = {};
    const res = {
      json: sinon.spy(),
    };

    await list(req, res);
    expect(res.json).to.have.been.calledWith(data);
  });

  it('should call res.json with todos', async () => {
    sinon.mock(Todo).expects('find').rejects('Error');

    const req = {};
    const res = {};
    const next = sinon.spy();

    await list(req, res, next);
    expect(next).to.have.been.called;
  });



  afterEach(() => {
    sinon.verifyAndRestore();
  })

});
