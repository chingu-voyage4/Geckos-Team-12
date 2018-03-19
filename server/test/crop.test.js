const should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('http://localhost:5000');