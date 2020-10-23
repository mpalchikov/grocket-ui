<template>
  <v-container>
    <v-form>
      <v-card>
        <v-card-title>Farm name</v-card-title>
        <v-card-text>
          <v-text-field
            label="Default name"
            hint='The name cannot begin with numbers, cannot contain "-"'
            persistent-hint
            outlined
          ></v-text-field>
        </v-card-text>

        <v-card-title>Circuit name</v-card-title>
        <v-card-text>
          <v-text-field
            label="Default name"
            hint='The name cannot begin with numbers, cannot contain "-"'
            persistent-hint
            outlined
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn outlined color="primary" :to="{ name: 'home' }">Cancel</v-btn>
          <v-btn color="primary" depressed :to="{ name: 'configuration' }"
            >Create</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
export default {};
</script>
