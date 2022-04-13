<template>
  <div class="Shop">
    <title>{{title}}</title>

      <div class="row-shop">
        <div class="column-shop">
          <img src="../assets/shop1.jpg" alt="shop1" style="width:100%">
        </div>
        <div class="column-shop">
          <img src="../assets/shop2.jpg" alt="shop2" style="width: 100%">
        </div>
      </div>

      <section>
          <div class="location">	
            <br/>
            <br/>
            <br/>
            <hr>
            <br/>
            <br/>
            <br/>
            <h2>
              <strong>FIND US</strong>
            </h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="map">
              <center>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.459702161025!2d120.58781695026546!3d15.133077989413355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f24ec2f5a1f9%3A0x5e0af8a6aaab2282!2sHoly%20Angel%20University!5e0!3m2!1sen!2sph!4v1634319011085!5m2!1sen!2sph" width="1200" height="500" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" loading="lazy">
              </iframe>
              </center>
            </div>
    
            <br/>
            <br/>
            <br/>
            <hr>
        </div>   
      </section>

      <section>
       <div class="loc">
            <br/>
            <br/>
            <h3>LOCATION</h3>
            <p>
              #143 Cali Rd
              <br/>
              ANGELES CITY, PH 2009
            </p>
            
            <h3>CONTACTS</h3>
            <p class="contacts">
              TEL: &nbsp; (888) 843-9214
              <br/>
              MAIL: &nbsp; <u>jdgcafe@yahoo.com</u>
              <br/>
              FACEBOOK: &nbsp; <u>JDG Cafe</u>
              <br/>
              TWITTER: &nbsp; <u>@jdg.cafe</u>
              <br/>
              INSTAGRAM: &nbsp; <u>@jdg.cafe</u>
            </p>
            <br/><br/>
        </div>
    </section>
    
    <footer>
        <address>
           <br/>
           J.D.Q Restaurant &nbsp;&#9728;&nbsp;
           Jed &amp; Dhana &amp; Quinny &nbsp;&#9728;&nbsp;
           Mc Arthur Highway &nbsp;&#9728;&nbsp;
           Angeles City, Pampanga &nbsp;&#9728;&nbsp;    Philippines
        </address>
     </footer> 

  </div>
</template>

<script>
export default {
  name: 'Shop',
  data () {
    return {
      
      
      title: 'Shop'
      
    }
    
  }
}
</script>


<style scoped>
   *{
    margin: 0;
    padding: 0;
    font-family:Georgia, 'Times New Roman', Times, serif;
  }
  .row-shop {
  display: flex;
  }
  .column-shop {
    flex: 33.33%;
    padding: 0px;
  }
  hr{
    height: 5px;
    background-color: #57291F;
    width: 60%;
    margin-left: 20%;
  }
  h2{
  text-align: center;
  font-size: 50px;
  color: #5e3219;
  justify-content: space-around;
  margin: auto;
  }
  map {
  width: 100%;
  height: 10000px;
  flex: 50%;
  }
  map iframe{
    width: 100%;
    height: 100px;
  }
  .loc{
  background: url(../assets/white.jpg);
  background-size: cover;
  }
  h3{
  color:#5e3219;
  text-align: center;
  }
  p{
    color:#5c8f52;
    padding: 10px 15px;
    text-align: center;
  }
  address{
    height: 8vh;
    width: 100%;
  }
  footer address{
    
    background-color: #5e3219;
    color: white;
    color: rgba(255, 255, 255, 0.8);
    font: medium small-caps 0.8em/4em 'Times New Roman', Times, serif;
    text-align: center;  
  }
</style>