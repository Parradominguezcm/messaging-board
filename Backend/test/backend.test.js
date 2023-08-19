import chai from 'chai';
import { server } from '../index.js';
import chaiHttp from 'chai-http';
import { expect } from 'chai';

chai.use(chaiHttp);
describe('/POST REQUEST', () => {
    it('should post the peep', async () => {
        let data = {
            "peepMessage": "this is a test",
            "peepDate": "Fri Aug 18 2023 15:54:33 GMT+0100 (British Summer Time)",
            "peepAuthor": "rikko0"

        }

        const res = await chai.request(server)
            .post('/makePeep')
            .set('content-type', 'application/json')
            .send(data);

        expect(res).to.have.status(201);
    });
})

describe('/GET request', () => {
    it('it should GET all the peeps', async () => {
        const res = await chai.request(server)
            .get('/allPeeps')
        expect(res).to.be.a('object');

    });
});

describe('sign up request (POST)', () => {
    it('should allow for signing up', async () => {
        let data = {
            "userFirstName": "Testing",
            "userLastName": "User2",
            "userName": "testuser2",
            "userEmail": "testuser2@gmail.com",
            "userPassword": "12345567"
        }
        const res = await chai.request(server)
            .post('/signup')
            .set('content-type', 'application/json')
            .send(data);
        expect(res).to.have.status(201);

    })
});

describe('sign up request fail if user already exists(POST)', () => {
    it('should allow for signing up', async () => {
        let data = {
            "userFirstName": "Testing",
            "userLastName": "User2",
            "userName": "testuser2",
            "userEmail": "testuser2@gmail.com",
            "userPassword": "12345567"
        }
        const res = await chai.request(server)
            .post('/signup')
            .set('content-type', 'application/json')
            .send(data);
        expect(res).to.have.status(400);

    })
})
