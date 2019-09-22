require("dotenv").config();
import * as R from "ramda";

export const state = () => ({
  clientID: process.env.CLIENT_ID,
  redirectURI: process.env.redirectURI,
  scope: "user-read-private playlist-modify-private user-follow-read",
  accessToken: "",
  artists: [],
  selectedArtists: []
});

export const mutations = {
  setAccessToken(state, token) {
    state.accessToken = token;
  },
  addArtists(state, artists) {
    state.artists = R.uniq([...state.artists, ...artists]);
  },
  cleanArtists(state) {
    state.artists = [];
  },
  addArtist(state, artist) {
    state.selectedArtists = [...state.selectedArtists, artist];
  },
  removeArtist(state, artist) {
    state.selectedArtists = state.selectedArtists.filter(
      _artist => _artist !== artist
    );
  },
  cleanSelectedArtists(state) {
    state.selectedArtists = [];
  }
};
