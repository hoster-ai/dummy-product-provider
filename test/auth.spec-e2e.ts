import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST - /create - expect unauthorized', () => {
    return request(app.getHttpServer()).post('/create').expect(401);
  });

  it('POST - /create with authorization - expect 201 ', () => {
    return request(app.getHttpServer())
      .post('/create')
      .auth('test', { type: 'bearer' })
      .expect(201);
  });

  it('GET - /info - expect unauthorized', () => {
    return request(app.getHttpServer()).get('/info').expect(401);
  });

  it('GET - /info with authorization - expect 200 ', () => {
    return request(app.getHttpServer())
      .get('/info')
      .auth('test', { type: 'bearer' })
      .expect(200);
  });

  it('POST - /renew - expect unauthorized', () => {
    return request(app.getHttpServer()).post('/renew').expect(401);
  });

  it('POST - /renew with authorization - expect 200 ', () => {
    return request(app.getHttpServer())
      .post('/renew')
      .auth('test', { type: 'bearer' })
      .expect(200);
  });

  it('POST - /suspend - expect unauthorized', () => {
    return request(app.getHttpServer()).post('/suspend').expect(401);
  });

  it('POST - /suspend with authorization - expect 200 ', () => {
    return request(app.getHttpServer())
      .post('/suspend')
      .auth('test', { type: 'bearer' })
      .expect(200);
  });

  it('POST - /unsuspend - expect unauthorized', () => {
    return request(app.getHttpServer()).post('/unsuspend').expect(401);
  });

  it('POST - /unsuspend with authorization - expect 200 ', () => {
    return request(app.getHttpServer())
      .post('/unsuspend')
      .auth('test', { type: 'bearer' })
      .expect(200);
  });

  it('POST - /unsuspend - expect unauthorized', () => {
    return request(app.getHttpServer()).post('/unsuspend').expect(401);
  });

  it('POST - /unsuspend with authorization - expect 200 ', () => {
    return request(app.getHttpServer())
      .post('/unsuspend')
      .auth('test', { type: 'bearer' })
      .expect(200);
  });

  it('POST - /upgradeable - expect unauthorized', () => {
    return request(app.getHttpServer()).post('/upgradeable').expect(401);
  });

  it('POST - /upgradeable with authorization - expect 200 ', () => {
    return request(app.getHttpServer())
      .post('/upgradeable')
      .auth('test', { type: 'bearer' })
      .expect(200);
  });

  it('POST - /downgradeable - expect unauthorized', () => {
    return request(app.getHttpServer()).post('/downgradeable').expect(401);
  });

  it('POST - /downgradeable with authorization - expect 200 ', () => {
    return request(app.getHttpServer())
      .post('/downgradeable')
      .auth('test', { type: 'bearer' })
      .expect(200);
  });
});
