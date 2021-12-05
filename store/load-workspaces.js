export const state = () => ({
  workspaces:[]
})

export const actions = {

  loadWorkspaces({ commit }){
    commit('setWorkspaces', [])

    this.$axios.get('/users/workspaces/get', {}, {
      headers: {
        'Authorization': this.$auth.strategy.token.get()
      },
    }).then(({data}) => {

      commit('setWorkspaces', data)
    }).catch((err) => {
      console.log(err)
    })
  },

  deleteWorkspace({ commit, state, dispatch  }, wsId){

    this.$axios.delete(`/workspaces/${wsId}`, {
      headers: {
        'Authorization': this.$auth.strategy.token.get()
      },
    }, {}).then(({data}) => {
       $nuxt.$emit('setMessage', {type: data.status, message: data.message})

      // probably not the best way to du this
      dispatch('loadWorkspaces')
    })
  },

}

export const getters = {

}

export const mutations = {

  setWorkspaces(state, data){
    state.workspaces = data
  },

  setOneWorkspace(state, data){
    state.currentWorkspace = data
  },
}
