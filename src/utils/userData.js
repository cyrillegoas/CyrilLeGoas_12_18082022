/**
 * Format user data
 */
export class UserData {
  /**
   * @param {Object[]} data - array of user data
   */
  constructor([userInfos, activity, sessions, performance]) {
    this.infos = {
      id: userInfos.data.id,
      firstName: userInfos.data.userInfos.firstName,
      lastName: userInfos.data.userInfos.lastName,
      age: userInfos.data.userInfos.age,
    };
    this.dailyIntake = {
      calorie: userInfos.data.keyData.calorieCount,
      carbohydrate: userInfos.data.keyData.carbohydrateCount,
      lipid: userInfos.data.keyData.lipidCount,
      protein: userInfos.data.keyData.proteinCount,
    };
    this.kpi = userInfos.data.score;
    this.activity = activity.data.sessions;
    this.sessions = sessions.data.sessions;
    this.getperf(performance.data);
  }

  /**
   * Get user performances and sort it
   * @param  {Object.<string, string>} kind - type of performance
   * @param  {Object[]} data - user performance
   */
  getperf({ data, kind }) {
    const unorderedData = data.map((item) => ({
      value: item.value,
      type: kind[item.kind],
    }));

    const findByType = (type) =>
      unorderedData.find((item) => item.type === type);

    const orderedData = [
      'intensity',
      'speed',
      'strength',
      'endurance',
      'energy',
      'cardio',
    ];

    this.perf = orderedData.map((type) => findByType(type));
  }
}
