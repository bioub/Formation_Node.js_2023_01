const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const chaiHttp = require("chai-http");
const { describe, it, afterEach } = require("mocha");
const Todo = require('./models/todo');
const app = require("./app");

chai.use(sinonChai);
chai.use(chaiHttp);

const expect = chai.expect;

describe('functional test /api/todos', () => {
  it('POST /api/todos', async () => {
    const data = {id: 1, title: 'ABC', completed: false};
    sinon.mock(Todo).expects('create').resolves(data);

    const res = await chai.request(app)
      .post('/api/todos')
      .set('Authorization', 'd4973653-9895-4123-a7dd-3e1387d0fbde');

    expect(res).to.have.status(201);
    expect(res.body).to.deep.equals(data);
  });


  afterEach(() => {
    sinon.verifyAndRestore();
  })

});
