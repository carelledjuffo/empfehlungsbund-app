<template>
<div id="search">
  <h1>Jobsuche bei Pludoni</h1>
  <form>
    <input type="text" value="" placeholder="Suche eingeben" name="someField" ref="user_input">
    <select name="places" id="place" v-model="town" >
      <option disabled value="">Ort auswählen</option>
      <option value="Dresden">Dresden</option>
      <option value="Leipzig">Leipzig</option>
      <option value="Berlin">Berlin</option>
      <option value="Chemnitz">Chemnitz</option>
      <option :value=everywhere >keinen Auswahl</option>
    </select>
    <input type="button" v-on:click="GetResult" value="suchen">
  </form>
  <div id="itemList">
    <b-pagination
        v-model="this.getParam.page"
        :total-rows="this.jobs.length"
        :per-page="this.getParam.per"
        aria-controls="itemList"
        align="center"
    ></b-pagination>
  <div v-if="town==everywhere">
    <div v-for="(job,index) in jobs" :key="index" >
      <ul >
        <li>
          {{job.title}}
        </li>
      </ul>
    </div>
  </div>
    <div v-else>
      <div v-for="(job,index) in jobs" :key="index" >
        <ul v-if="town==job.location ">
          <li>
            {{job.title}}
          </li>
        </ul>
      </div>
    </div>
  </div>


</div>

</template>

<script>
import axios from "axios";

export default {
  name: "ResearchPage",
  components: {},

  data() {
    return {
      jobUrl: "http://localhost:8080/api/v2/jobs/search.json?q=",
      getParam :{
        per: 50,
        page:1,
      },
      jobs: [],
      town:null,
      everywhere:"allTowns"
    }
  },
  methods: {
    GetResult() {
      axios.get(this.jobUrl +this.$refs.user_input.value,{params:this.getParam})
          .then(response => {
            (this.jobs = response.data.jobs)}).catch((error) => {
              console.log(error)
      });
    }

  }
}
</script>

<style scoped>
#search {
  background-color: rgba(240,240,240,1);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  min-height: 280px;
}
h1 {
  font-family: sans-serif;
  margin-bottom: 12vh;
  color: rgba(120,120,120,1);
}
input {
  /* resetting default styles first */
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}
form {
  border: 1px solid rgba(220,220,220,1);
  padding: 30px 40px;
  border-radius: 8px;
  display: flex;
}
select{
  border: none;
  border-radius: 8px;
}
input[type="text"] {
  font-size: 18px;
  line-height: 1;
  padding: 12px 15px;
  border-radius: 12px;
  box-shadow: inset 6px 6px 9px 0px rgba(230,230,230,1), inset -7px -9px 9px 0px rgba(255,255,255,1);
  color: rgba(40,40,40,1);
  margin-right: 20px;
}
input[type="text"]:focus {
  outline: none;
}

input[type="button"] {
  /* let's do some neumorphism */
  display: flex;
  font-size: 18px;
  line-height: 1;
  padding: 10px 25px;
  border-radius: 12px;
  box-shadow: -6px -6px 9px 0px rgba(230,230,230,1),
  6px 6px 9px 0px rgba(255,255,255,1),
  inset 6px 6px 9px 0px rgba(230,230,230,0),
  inset -7px -9px 9px 0px rgba(255,255,255,0);
  color: rgba(230,20,120,1);
  font-weight: bold;
  transition: .2s;
}
input[type="button"]:hover {
  cursor: pointer;
  background-color: rgba(236,236,236,1);
  padding: 12px 25px 8px 25px;
  box-shadow: -6px -6px 9px 0px rgba(230,230,230,0),
  6px 6px 9px 0px rgba(255,255,255,0),
  inset 6px 6px 9px 0px rgba(230,230,230,1),
  inset -7px -9px 9px 0px rgba(250,250,250,1);
}
</style>