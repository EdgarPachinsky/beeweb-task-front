<template>
  <div>
    <template v-if="workspaces && workspaces.length === 0">
      <h5>No any Workspaces</h5>
    </template>

    <template v-else>

      <b-row>

        <b-col cols="3" v-for="workspace in workspaces" :key="workspace._id">
          <div class="mint-token-prev-container no-center">
            <div class="mint-token-image">
              <img v-if="workspace.image"
                   :src="'http://localhost:3000/file/'+workspace.image"
                   alt="Workspace Image">
              <div v-else>Image preview</div>
            </div>
            <div class="text-center">
              <h5 class="margin-bottom-5 margin-top-5">{{ workspace.name ? workspace.name : "No Name" }}</h5>
              <p class="margin-bottom-5 margin-top-5">{{ workspace.description ? workspace.description : "-" }}</p>
            </div>
            <hr>
            <div class="actions">
              <b-button
                class="width-percent-100"
                :to="'/user/workspaces/show/'+workspace.subdomain" type="button" variant="">
                Open WS
              </b-button>
              <b-button
                class="width-percent-100 margin-top-5"
                :to="'/user/workspaces/actions/edit/'+workspace.subdomain" type="button" variant="">
                Edit WS
              </b-button>
              <b-button type="button" @click="deleteWS(workspace._id)" class="margin-top-5" variant="danger">
                Delete WS
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </template>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex";

export default {
  name: "Workspaces",

  computed: {
    ...mapState('load-workspaces', ['workspaces']),
  },

  data() {
    return {}
  },

  methods: {

    ...mapActions('load-workspaces', ['loadWorkspaces']),

    deleteWS(wsId){
      this.$store.dispatch('load-workspaces/deleteWorkspace', wsId)
    }
  },

  async mounted() {
    this.loadWorkspaces()
  },
}
</script>

<style scoped>

</style>
