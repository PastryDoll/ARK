import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);
});

it('returns a 400 with invalid email', async () => {
    return request(app)
      .post('/api/users/signup')
      .send({
        email: 'testtest.com',
        password: 'password'
      })
      .expect(400);
  });

it('returns a 400 with invalid password', async () => {
return request(app)
    .post('/api/users/signup')
    .send({
    email: 'test@test.com',
    password: 'pd'
    })
    .expect(400);
});

it('returns a 400 with missing email or password', async () => {
    await request(app)
    .post('/api/users/signup')
    .send({        
    email: 'testtest.com',})
    .expect(400);
    
    return request(app)
        .post('/api/users/signup')
        .send({password: 'password'})
        .expect(400);
    });

it('disallows duplicate emails', async () => {
    await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);

    return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(400);
    });

it('Sets cookie after successful signup', async () => {
    const response = await request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'password'
    })
    .expect(201);

    expect(response.get('Set-Cookie')).toBeDefined();

});