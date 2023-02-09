<template>
  <div>
    <v-file-input label="File input" outlined dense></v-file-input>
    <v-btn elevation="2" @click="handleAuthClick">Logar</v-btn>
    <v-btn elevation="2" @click="revokeAccess">Deslogar</v-btn>
  </div>
</template>

<script>
import { handleClientLoad, handleAuthClick, revokeAccess } from "@/utils/o-auth";
export default {
  name: "VideosInsert",
  mounted() {
    handleClientLoad()
  },
  methods: {
    handleAuthClick,
    revokeAccess
  }
};
</script>

<style>
</style>