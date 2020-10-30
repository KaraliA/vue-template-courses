import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/index'

type Course = {
  title: string;
  level: string;
  author: string;
  hours: number;
  timesViewed: number;
  description: string;
}
export type { Course };

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    levels: Array<string>(),
    courses: Array<Course>()
  },
  getters: {
    levels: state => {
      return state.levels;
    },
    courses: state => {
      return state.courses;
    },
    getCoursesByLevel: (state) => (level: string) => {
      return state.courses.filter(course => course.level === level);
    },
    getTimesViewedOfCoursesByLevel: (state, getters) => (level: string) => {
      return getters.getCoursesByLevel(level).reduce((total: number, course: Course) => total + course.timesViewed, 0);
    }
  },
  mutations: {
    setLevels: (state, levels) => {
      state.levels = levels;
    },
    setCourses: (state, courses) => {
      state.courses = courses;
    },
    increaseTimesViewed: (state, course: Course) => {
      course.timesViewed++;
    }
  },
  actions: {
    getAllLevels ({ commit }) {
      api.getLevels((levels: Array<string>) => {
        commit('setLevels', levels);
      })
    },
    getAllCourses ({ commit }) {
      api.getCourses((courses: Array<Course>) => {
        commit('setCourses', courses);
      })
    }
  },
  modules: {
  }
})
