import { rest } from 'msw';

const user12Handlers = [
  rest.get('http://localhost:3000/user/12', (req, res, ctx) =>
    res(
      ctx.json({
        data: {
          id: 12,
          userInfos: {
            firstName: 'Martha',
            lastName: 'Davey',
            age: 36,
          },
          score: 0.2,
          keyData: {
            calorieCount: 2110,
            proteinCount: 78,
            carbohydrateCount: 114,
            lipidCount: 85,
          },
        },
      })
    )
  ),
  rest.get('http://localhost:3000/user/12/activity', (req, res, ctx) =>
    res(
      ctx.json({
        data: {
          userId: 12,
          sessions: [
            {
              day: '2020-07-01',
              kilogram: 60,
              calories: 100,
            },
            {
              day: '2020-07-02',
              kilogram: 61,
              calories: 110,
            },
            {
              day: '2020-07-03',
              kilogram: 62,
              calories: 120,
            },
            {
              day: '2020-07-04',
              kilogram: 63,
              calories: 130,
            },
            {
              day: '2020-07-05',
              kilogram: 64,
              calories: 140,
            },
            {
              day: '2020-07-06',
              kilogram: 65,
              calories: 150,
            },
            {
              day: '2020-07-07',
              kilogram: 66,
              calories: 160,
            },
          ],
        },
      })
    )
  ),
  rest.get('http://localhost:3000/user/12/average-sessions', (req, res, ctx) =>
    res(
      ctx.json({
        data: {
          userId: 12,
          sessions: [
            {
              day: 1,
              sessionLength: 30,
            },
            {
              day: 2,
              sessionLength: 31,
            },
            {
              day: 3,
              sessionLength: 32,
            },
            {
              day: 4,
              sessionLength: 33,
            },
            {
              day: 5,
              sessionLength: 34,
            },
            {
              day: 6,
              sessionLength: 35,
            },
            {
              day: 7,
              sessionLength: 36,
            },
          ],
        },
      })
    )
  ),
  rest.get('http://localhost:3000/user/12/performance', (req, res, ctx) =>
    res(
      ctx.json({
        data: {
          userId: 12,
          kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity',
          },
          data: [
            {
              value: 150,
              kind: 1,
            },
            {
              value: 160,
              kind: 2,
            },
            {
              value: 170,
              kind: 3,
            },
            {
              value: 180,
              kind: 4,
            },
            {
              value: 190,
              kind: 5,
            },
            {
              value: 200,
              kind: 6,
            },
          ],
        },
      })
    )
  ),
];

const user18Handlers = [
  rest.get('http://localhost:3000/user/18', (req, res, ctx) =>
    res(
      ctx.json({
        data: {
          id: 18,
          userInfos: {
            firstName: 'John',
            lastName: 'Doe',
            age: 20,
          },
          score: 0.5,
          keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120,
          },
        },
      })
    )
  ),
  rest.get('http://localhost:3000/user/18/activity', (req, res, ctx) =>
    res(
      ctx.json({
        data: {
          userId: 18,
          sessions: [
            {
              day: '2020-07-01',
              kilogram: 90,
              calories: 250,
            },
            {
              day: '2020-07-02',
              kilogram: 91,
              calories: 240,
            },
            {
              day: '2020-07-03',
              kilogram: 92,
              calories: 230,
            },
            {
              day: '2020-07-04',
              kilogram: 93,
              calories: 220,
            },
            {
              day: '2020-07-05',
              kilogram: 94,
              calories: 210,
            },
            {
              day: '2020-07-06',
              kilogram: 95,
              calories: 200,
            },
            {
              day: '2020-07-07',
              kilogram: 96,
              calories: 190,
            },
          ],
        },
      })
    )
  ),
  rest.get('http://localhost:3000/user/18/average-sessions', (req, res, ctx) =>
    res(
      ctx.json({
        data: {
          userId: 18,
          sessions: [
            {
              day: 1,
              sessionLength: 10,
            },
            {
              day: 2,
              sessionLength: 20,
            },
            {
              day: 3,
              sessionLength: 30,
            },
            {
              day: 4,
              sessionLength: 40,
            },
            {
              day: 5,
              sessionLength: 50,
            },
            {
              day: 6,
              sessionLength: 60,
            },
            {
              day: 7,
              sessionLength: 70,
            },
          ],
        },
      })
    )
  ),
  rest.get('http://localhost:3000/user/18/performance', (req, res, ctx) =>
    res(
      ctx.json({
        data: {
          userId: 18,
          kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity',
          },
          data: [
            {
              value: 100,
              kind: 1,
            },
            {
              value: 110,
              kind: 2,
            },
            {
              value: 120,
              kind: 3,
            },
            {
              value: 130,
              kind: 4,
            },
            {
              value: 140,
              kind: 5,
            },
            {
              value: 150,
              kind: 6,
            },
          ],
        },
      })
    )
  ),
];

const user88Handlers = [
  rest.get('http://localhost:3000/user/88', (req, res, ctx) =>
    res.networkError('Failed to connect')
  ),
  rest.get('http://localhost:3000/user/88/activity', (req, res, ctx) =>
    res.networkError('Failed to connect')
  ),
  rest.get('http://localhost:3000/user/88/average-sessions', (req, res, ctx) =>
    res.networkError('Failed to connect')
  ),
  rest.get('http://localhost:3000/user/88/performance', (req, res, ctx) =>
    res.networkError('Failed to connect')
  ),
];

const user99Handlers = [
  rest.get('http://localhost:3000/user/99', (req, res, ctx) =>
    res(
      ctx.status(404),
      ctx.json({
        errorMessage: 'ERROR',
      })
    )
  ),
  rest.get('http://localhost:3000/user/99/activity', (req, res, ctx) =>
    res(
      ctx.status(404),
      ctx.json({
        errorMessage: 'ERROR',
      })
    )
  ),
  rest.get('http://localhost:3000/user/99/average-sessions', (req, res, ctx) =>
    res(
      ctx.status(404),
      ctx.json({
        errorMessage: 'ERROR',
      })
    )
  ),
  rest.get('http://localhost:3000/user/99/performance', (req, res, ctx) =>
    res(
      ctx.status(404),
      ctx.json({
        errorMessage: 'ERROR',
      })
    )
  ),
];

export const handlers = [
  ...user12Handlers,
  ...user18Handlers,
  ...user88Handlers,
  ...user99Handlers,
];
