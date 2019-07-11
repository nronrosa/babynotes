import axios from "axios"

export default {
    // LOG IN ROUTES
    getAuthId: function () {
        return axios.get("/user/user_data")
    },
    loginUser: function (data) {
        return axios.post("/user/login", data)
    },

    // CHILD ROUTES
    // get all specific activity for a child
    getAllSingleTypeActivities: function (data) {
        return axios.get("/activities/:id/:act", data)
    },
    getAllJournalActivities: function (id, data) {
        return axios.get(`/activities/${id}`, data)
    },
    // get ALL activities for a child
    getAllActivities: function () {
        return axios.get("/activities/:id")
    },
    // get ONE activity for one child
    getOneActivity: function (id) {
        return axios.get(`/activity/${id}`)
    },
    // create one activity for a child
    postOneActivity: function (data) {
        return axios.post("/activity", data)
    },
    // delete one activity for a child
    deleteOneActivity: function () {
        return axios.delete("/activity/:id")
    },
    // update one activity for a child
    putOneActivity: function (id, data) {
        return axios.put(`/activity/${id}`, data)
    },

    // PARENT ROUTES
    // get all children for user
    getChildren: function (id) {
        return axios.get(`/children/${id}`)
    },
    // get one child
    getOneChild: function (id) {
        return axios.get(`/child/${id}`)
    },
    // create one child
    postOneChild: function (data) {
        return axios.post("/child", data)
    },
    // delete one child
    deleteOneChild: function () {
        return axios.delete("/child/:id")
    },
    // update one child
    putOneChild: function (id, data) {
        return axios.put(`/child/${id}`, data)
    },
    logOutUser: function () {
        return axios.post("/logout")
    }
    // one axios call is NOT on parent page - getting the journal entries
}
