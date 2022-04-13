<template>
  <div id="app">
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home
                <span class="visually-hidden">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/About">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Shop">Shop</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Location">Location</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Feedbacks">Feedbacks</router-link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

</style>

