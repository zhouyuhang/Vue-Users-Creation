<template>
  <div class="container">

    <div class="holder">
      <p>Display all the users below:</p>
      <ul>
        <li v-for="(data, index) in users" :key='index'>{{data.fullName}}
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'User',

  data () {
    return {
      users:
        this.$store.state.users
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #d1ffdb;
    border-left: 4px solid #06a621;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 20px 0;
    margin: 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }
</style>
