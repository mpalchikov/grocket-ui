<template>
  <v-container>
    <v-row>
      <v-alert type="warning" outlined
        >You have no configured nodes yet. Add nodes to get started</v-alert
      >
      <v-btn text :to="{ name: 'addNode' }">+ Add node</v-btn>
    </v-row>
    <h2>Farm name</h2>
    <v-card min-height="150" width="500"></v-card>
    <h2>Circuit name</h2>
    <v-card min-height="150" width="500"></v-card>
  </v-container>
</template>
