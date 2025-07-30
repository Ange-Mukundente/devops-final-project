// tests/app.test.js
const request = require('supertest');

// Modify your app.js to export the app for testing
// To do this, add this line at the VERY END of src/app.js:
// module.exports = app;
const app = require('../src/app'); 

describe('App', () => {
    it('should return a welcome message at the root', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('The Pipeline is Working!');
    });
});