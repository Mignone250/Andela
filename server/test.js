import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './index';

chai.use(chaiHttp);
chai.should();

describe("GET /api/V1/users", () => {

    it("Should get all users data", () => {
        chai.request(app)
            .get('/api/V1/users')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('array');
                return true;
            });
    });
    
});

describe("GET /api/V1/Article", () => {

    it("should get all articles data", () => {
        chai.request(app)
            .get('/api/V1/users')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('array');
                return true;
            });
    });
    
});