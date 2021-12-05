<template>
  <div>

    <h1>Hello in our workspace managing tool</h1>
    <hr>
    <h2>What can you do here</h2>
    <ul>
      <li>
        first create your account
      </li>
      <li>
        create your workspace and manage it
      </li>
      <li>
        add unique image to your workspace
      </li>
      <li>
        create channels for your workspaces
      </li>
      <li>
        invite other people tou your workspace
      </li>
    </ul>
    <hr>
    <b-button
      type="button"
      variant="danger"
      class="margin-bottom-15"
      to="/user/workspaces/actions/list">Lets get started</b-button>

  </div>
</template>

<script>
import WorkspaceList from "../components/Workspaces";

export default {


  components: {
    WorkspaceList,
  },

  data() {
    return{

    }
  },

  methods: {

  },

  mounted() {
    $nuxt.$emit('setPageTitle', {title: 'WorkspaceIO'})
  }
}
</script>
