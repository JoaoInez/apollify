<template>
  <div class="session-container">
    <h2 class="subtitle">Oops, seems you session has expired. Please login again.</h2>
    <a
      :href="`https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scope}&response_type=token`"
      class="btn-green"
    >Login with Spotify</a>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["clientID", "redirectURI", "scope"])
};
</script>

<style scoped lang="scss">
.session-container {
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>