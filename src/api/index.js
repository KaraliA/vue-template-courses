/**
 * Mocking client-server processing
 */
const _levels = [
  'beginner',
  'intermediate',
  'advanced'
]
const _courses = [{
  title: 'Vue: Big Picture',
  level: 'beginner',
  author: 'Daniel Stern',
  hours: 2,
  timesViewed: 0,
  description: 'In this course, Vue.js: Big Picture, you will get a big picture overview of Vue, understanding what its features are and where those features are most useful.'
},
{
  title: 'Vue: Getting Started',
  level: 'beginner',
  author: 'Evan You',
  hours: 3,
  timesViewed: 0,
  description: 'In this course, Vue: Getting Started, you will learn foundational knowledge of how to start developing with Vue to create web applications.'
},
{
  title: 'Developing faster with Vue CLI',
  level: 'beginner',
  author: 'John Papa',
  hours: 2,
  timesViewed: 0,
  description: 'In this course, Developing Faster with the Vue CLI, you will gain the ability to build Vue apps efficiently with the Vue CLI and popular Vue developer tools.'
},
{
  title: 'Vue Fundamentals',
  level: 'intermediate',
  author: 'Jim Cooper',
  hours: 6,
  timesViewed: 0,
  description: 'In this course, Vue.js Fundamentals, you will gain the foundational knowledge required to build robust, production-ready applications with Vue.'
},
{
  title: 'Single Page Application with Vue',
  level: 'advanced',
  author: 'Bill Stavroulakis',
  hours: 3,
  timesViewed: 0,
  description: ' In this course, Single Page Applications with Vue.js, you will learn how to setup the environment and build processes necessary for your application.'
},
{
  title: 'Styling of Vue Components',
  level: 'advanced',
  author: 'Bill Stavroulakis',
  hours: 5,
  timesViewed: 0,
  description: ' In this course, Single Page Applications with Vue.js, you will learn how to setup the environment and build processes necessary for your application.'
},
{
  title: 'Vuex',
  level: 'advanced',
  author: 'Bill Stavroulakis',
  hours: 6,
  timesViewed: 0,
  description: ' In this course, Single Page Applications with Vue.js, you will learn how to setup the environment and build processes necessary for your application.'
},
{
  title: 'Vue Router',
  level: 'intermediate',
  author: 'Bill Stavroulakis',
  hours: 3,
  timesViewed: 0,
  description: ' In this course, Single Page Applications with Vue.js, you will learn how to setup the environment and build processes necessary for your application.'
}]
  
export default {
  getLevels(cb) {
    setTimeout(() => cb(_levels), 100)
  },
  getCourses(cb) {
    setTimeout(() => cb(_courses), 100)
  }
}