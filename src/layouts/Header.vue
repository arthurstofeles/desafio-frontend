<template>
  <div>
    <v-app-bar app flat color="yt_white">
      <v-app-bar-nav-icon
        v-if="!isMobile"
        color="yt_black"
        @click.stop="$emit('openSidebar')"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="d-flex align-center" @click="goToHome">
        <img
          src="@/assets/logo.svg"
          alt="Página inicial do YouTube"
          height="20px"
          width="90px"
          class="logo"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-autocomplete
        v-model="selected"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        @click.clear="clearSearch"
        @input="goToResults"
        dense
        flat
        hide-no-data
        hide-details
        label="Pesquisar"
        placeholder="Pesquisar"
        solo
        rounded
        prepend-inner-icon="mdi-magnify"
        append-icon=""
        color="yt_black"
        outlined
        :clearable="true"
        :auto-select-first="true"
        class="search-input"
      ></v-autocomplete>
      <v-spacer v-if="!isMobile"></v-spacer>
      <v-btn v-if="!isMobile" class="ma-2" outlined rounded color="yt_blue"
        ><v-icon>mdi-account-circle-outline</v-icon
        ><span class="ml-2">Fazer login</span>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      items: [],
      selected: "",
      search: "",
      loading: false,
    };
  },
  props: {
    isMobile: {
      type: Boolean,
    },
  },
  watch: {
    search() {
      if (this.search != "") {
        this.items.unshift(this.search);
      }
    },
    query() {
      if (!this.$route.query.search_query) {
        this.selected = "";
      }
    },
  },
  mounted() {
    const history = [];
    this.items = history.concat(this.$store.state.searchHistory);
  },
  methods: {
    ...mapActions(["setSearch", "setSearchHistory", "setTitlePage"]),
    goToHome() {
      if (this.$route.name != "Home") {
        this.$router.push({
          name: "Home",
          query: { search_query: this.select },
        });
      }
    },
    clearSearch() {
      const history = [];
      this.items = history.concat(this.$store.state.searchHistory);
    },
    goToResults() {
      if (this.selected != null) {
        this.setSearch(this.selected);
        this.setTitlePage(this.selected + " - YouTube");
        if (
          this.selected !=
          this.$store.state.searchHistory.find(
            (element) => element === this.selected
          )
        ) {
          this.setSearchHistory(this.selected);
        }
        this.items.unshift(this.selected);
        if (this.$router.name != "SearchResult") {
          this.$router.push({
            name: "SearchResult",
            query: { search_query: this.$store.state.search },
          });
        }
      }
    },
  },
  computed: {
    query() {
      return this.$route.query.search_query;
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  cursor: pointer;
}
@media screen and (max-width: 400px) {
  .search-input {
    max-width: 170px;
  }
}
</style>