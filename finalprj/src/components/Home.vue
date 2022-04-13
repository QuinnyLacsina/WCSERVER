<template>
  <div class="Home">
    <title>{{title}}</title>

      <div class="header">
        <div class="bg">
          <div class="content">
            <h1>
              WELCOME TO <br/> J.D.Q Cafe
            </h1>
            <p>Where every sinful sip of coffee happens. This Cafe shop is operating for almost 20 years dedicated to give a luxurious taste of coffee and pastry that will surely savour your taste. This shop is available on every part of the Philippines. </p>
          </div>
        </div>
      </div>

      <br/>
      <br/>
      <br/>
      <hr>
      <br/>
      <br/>
      

      <div class="content2">
        <h4>
          <strong>THE FRESH COFFEE IN TOWN IS NOW SERVING</strong>
        </h4>
            
        <div class="videobg">
            <video width="720" height="500" autoplay="autoplay" loop>
              <source src="../assets/barista.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>

            <audio autoplay>
              <source src="../assets/sound.mp3" type="audio/mp3">
              Your browser does not support the audio element.
            </audio> 
        </div>
      </div>

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
  name: 'Home',
  data () {
    return {
      
      title: 'Home'
      
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
      background-image:url(../assets/coffee.jpeg);
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
  hr{
    height: 5px;
    background-color: #57291F;
    width: 60%;
    margin-left: 20%;
  }
  .content2{
      color:#a14415;
      padding: 1px 15px;
  }
  h4{
    text-align: center;
  }
  video{
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0%;
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

