import { createStore } from 'vuex'
import { studentsList } from '../constants/data_students.js'

export default createStore({
    state: {
        studentsList: [],
        scoreType: null,
        studentCategory: null,
    },
    getters: {
        getStudentsList: ({ studentsList }) => studentsList,
        getScoreType: ({ scoreType }) => scoreType,
        getStudentCategory: ({ studentCategory }) => studentCategory,
    },
    mutations: {
        setStudentsList(state, list) {
            state.studentsList = JSON.parse(JSON.stringify(list))
        },
        setScoreType(state, scoreTypeVal) {
            state.scoreType = scoreTypeVal
        },
        setStudentCategory(state, studentCategoryValue) {
            state.studentCategory = studentCategoryValue
        },
    },
    actions: {
        loadStudentsList({ commit }) {
            commit('setStudentsList', studentsList)
        },
        setScoreTypeVal({ commit }, scoreType) {
            commit('setScoreType', scoreType)
        },
        setStudentCategoryValue({ commit }, category) {
            commit('setStudentCategory', category)
        },
    },
    modules: {},
})
