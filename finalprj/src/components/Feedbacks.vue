<template>
  <div class="Shop">
    <title>{{title}}</title>

      <div class="header">
        <div class="bg">
          <div class="content">
            <h1>
              Order 
            </h1>
            <p>Come and Order our Product that is full of exploding taste that you cannot imagine. Check out all your cravings now and enjoy the organic taste of it.</p>
          </div>
        </div>
      </div>

      <section>
        <section class="menu_items" id="menu">
            <br/>
            <br/>
            <center> <h2>FEEDBACKS</h2> </center>
            <div class="itemBx">
              <div class="box">
                <img src="../assets/human1.jpeg" alt="ace">
                <div class="infobx">
                  <h4>Ace Washington</h4>
                  <p> I Really life the food and the ambiance of the cafe. I recommend it to my relatives and friends.</p>
                </div>
              </div>
              <div class="box">
                <img src="../assets/human2.jpeg" alt="kathryn">
                <div class="infobx">
                  <h4>Kathryn Bernardo</h4>
                  <p> The food was really great! I can't wait to go back in this wonderful shop.</p>
                </div>
              </div>
              <div class="box">
                <img src="../assets/human3.jpeg" alt="daniel">
                <div class="infobx">
                  <h4>Daniel Padilla</h4>
                  <p> The service was really good! I hop that there are many branch in the Philippines soon.</p>
                </div>
              </div>
              <div class="box">
                <img src="../assets/human4.jpeg" alt="liza">
                <div class="infobx">
                  <h4>Liza Soberano</h4>
                  <p> All in all I love the service!. It is great because the staff are hospitable. The food is great and and wonderful. The shop was great and the location is accessible. You must try it!</p>
                </div>
              </div>
            </div>
      
          </section>
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
  .header{
      background-image:url(../assets/black.jpg);
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
    padding: 34px 25px 1px 13px;
    padding-bottom: 9%;
    border-radius: 6px;
    color:white;
  }
  .menu_items{
    min-height: 100vh;
    width: 100%;
  }
  .menu_items .itemBx{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .menu_items .itemBx .box{
    margin-left: 50px;
    margin-top: 50px; 
    border-radius: 10px;
    height: 250px;
    width: 500px;
    display: flex;
    box-shadow: 10px 10px 8px black;
  }
  .menu_items .itemBx .box img{
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 10px;
    margin: 10px;
  }
  .menu_items{
    background-image:url(../assets/whitebean.jpg);
    background-position: center;
    background-size:cover ;
    background-repeat: no-repeat;
    height: 130vh;
  }
  .menu_items h2{
    color: black;
  }
  .menu_items .itemBx .box{
      background: #804625;
      justify-content: center;
      align-items: center;      
  }
  .menu_items .itemBx .box .infobx h4{
      font-size: 1.5em;
      text-shadow: 2px 2px black;
      color: #ffad42;
  }
  .menu_items .itemBx .box .infobx p{
      font-size: 0.8em;
      color: white;
  }
  .menu_items .itemBx .box .infobx h5{
      font-size: 1.3em;
      color: #ffad42;
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