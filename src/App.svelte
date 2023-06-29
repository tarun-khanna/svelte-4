<script>

  import { showLoader } from './stores/index.js'

  $: if(showLoader) {
    console.log('showLoader true')
  } else {
    console.log('showLoader false')
  }
  
  let name = 'World';
</script>

<main>
  <h1>Hello, {name}!</h1>
</main>

<style>
  h1 {
      color: #333;
  }
</style>
