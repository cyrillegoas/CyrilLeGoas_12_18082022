import { rest } from 'msw';

export const handlers = [
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
