import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

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

  it('POST - /validate/action-fields - validate με ubuntu - περιμένουμε panel: plesk+cpanel', async () => {
    return request(app.getHttpServer())
      .post('/validate/action-fields')
      .send({ os: 'Ubuntu', panel: 'CPanel' })
      .auth('test', { type: 'bearer' })
      .expect(200)
      .then((res) => {
        const data = res.body.actionFields;
        for (const actionField of data) {
          if (actionField.value === 'Plesk' || actionField.value === 'CPanel') {
            expect(actionField.disabled).toBe(false);
            expect(actionField.hidden).toBe(false);
            expect(actionField.error).toBe('');
          }
        }
      });
  });

  it('POST - /validate/action-fields - validate με fedora - περιμένουμε panel: plesk+cpanel disabled', async () => {
    return request(app.getHttpServer())
      .post('/validate/action-fields')
      .send({ os: 'Fedora', panel: 'Plesk' })
      .auth('test', { type: 'bearer' })
      .expect(200)
      .then((res) => {
        const data = res.body.actionFields;
        for (const actionField of data) {
          if (actionField.value === 'CPanel') {
            expect(actionField.disabled).toBe(true);
            expect(actionField.hidden).toBe(true);
            expect(actionField.error).toBe('');
          }
        }
      });
  });

  it('POST - /validate/action-fields - validate fedora with cpanel- expect panel: plesk+cpanel error', async () => {
    return request(app.getHttpServer())
      .post('/validate/action-fields')
      .send({ os: 'Fedora', panel: 'CPanel' })
      .auth('test', { type: 'bearer' })
      .expect(200)
      .then((res) => {
        const data = res.body.actionFields;
        for (const actionField of data) {
          if (actionField.value === 'CPanel') {
            expect(actionField.disabled).toBe(true);
            expect(actionField.hidden).toBe(true);
            expect(actionField.error).toBe(
              'CPanel is not available with Fedora',
            );
          }
        }
      });
  });
});
