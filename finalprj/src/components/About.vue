<template>
  <div class="About">
    <title>{{title}}</title>

      <div class="header">
        <div class="bg">
          <div class="content">
            <h1>
              About Us 
            </h1>
            <p> J.D.Q Cafe was built on 2001 where every classic coffee happens here. We started on a small business place in the culinary capital of the Philippines, Angeles City. We strive hard to dedicate our passion in making coffee and to serve people whole heartedly. Since then, the Cafe is now operating for almost 20 years and has many branch around the Philippines. We made this far because of the love and support of our beloved customers.</p>
          </div>
        </div>
      </div>

      <section class="mission" id="mission">
        <div class="infoBx">
          <h2>Mission</h2>
          <p>Our Mission is to provide the world's best freshly roasted coffee, pastry, 
            and pasta to our customers while providing excellent service at a price that 
            is fair to both the producers and our customers.</p>
        </div>
        <div class="infoBx">
          <h2>Vision</h2>
          <p>Our vision is to be a world-class and even better Café, serving more customers 
            around the world delicious coffee, pastry, and pasta.</p>
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
  name: 'About',
  data () {
    return {
      
      
      title: 'About'
      
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
  .header{
      background-image:url(../assets/wallpaper1.jpg);
      background-position: center;
      background-size:cover ;
      background-repeat: no-repeat;
      height: 65vh;
      align-items: center;
      
      
    }
  .bg{
      text-align: center;
      margin-top: 0%;  
  }
  .content{
    background: rgba(0,0,0,0.5);
    height: 29vh;
    width: 50%;
    margin-bottom: 0%;
    margin-left: 25%;
    border-radius: 6px;
    align-content: center;
    width: 50%;
    height: 29vh;
    margin-top: 8%;
    position: absolute;  
    background-size: cover;
    border: 4px solid #d7b17e;
    padding: 10px 25px 1px 13px;
    padding-bottom: 13.5%;
    border-radius: 6px;
    color:white;
  }
  .mission{
    width: 100%;
    min-height: 60vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .mission .infoBx{
    max-width: 400px;
  }
  .mission .infoBx h2{
    font-size: 2.5em;
  }
  .mission .infoBx p{
    font-size: 1.5em;
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