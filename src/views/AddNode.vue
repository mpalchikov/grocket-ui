<template>
  <v-container>
    <h1>Add Node</h1>
    <v-form>
      <h2>Choose node type</h2>
      <v-row>
        <v-col>
          <v-select label="Air Temperature" outlined />
        </v-col>
        <v-col>
          <v-text-field
            label="Type description"
            hint="Description about case when user should write a comment"
            persistent-hint
            outlined
          />
        </v-col>
        <v-col><v-switch inset/></v-col>
      </v-row>
      <v-radio-group row>
        <v-radio label="Farm" value="farm"></v-radio>
        <v-radio label="Circuit" value="circuit"></v-radio>
      </v-radio-group>

      <v-divider />

      <h2>Chose controller type and name</h2>
      <p>Description about this node can have several controllers</p>
      <v-row>
        <v-col>
          <v-select label="Relay" outlined />
        </v-col>
        <v-col>
          <v-select
            label="Enter Controller name"
            hint="Type the name or choose from the list"
            persistent-hint
            outlined
          />
        </v-col>
        <v-col><v-switch inset/></v-col>
      </v-row>

      <v-divider />

      <h2>Choose sensor type and name</h2>
      <p>Description about this node can have several controllers</p>
      <v-row>
        <v-col>
          <v-select label="AirTemperatureSensor" outlined />
        </v-col>
        <v-col>
          <v-select
            label="Enter Sensor name"
            hint="Type the name or choose from the list"
            persistent-hint
            outlined
          />
        </v-col>
        <v-col><v-switch inset/></v-col>
      </v-row>

      <v-divider />

      <h2>Set up the node</h2>
      <p>You can skip this step now and set up the node later</p>
      <v-card flat>
        <v-card-text>
          <v-row>
            <span>Unit</span>
            <v-spacer />
            <v-text-field value="U" outlined></v-text-field>
          </v-row>
          <v-row>
            <span>Low</span>
            <v-spacer />
            <v-text-field value="21.5" outlined></v-text-field>
          </v-row>
          <v-row>
            <span>Hi</span>
            <v-spacer />
            <v-text-field value="50" outlined></v-text-field>
          </v-row>
        </v-card-text>
      </v-card>
      <v-row>
        <v-spacer />
        <v-btn outlined color="primary" class="ma-1">Cancel</v-btn>
        <v-btn color="primary" depressed class="ma-1">Save</v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>
