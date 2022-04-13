<template>
  <div class="Shop">
    <title>{{title}}</title>

      <div class="header">
        <div class="bg">
          <div class="content">
            <h1>
              Shop 
            </h1>
            <p>Welcome to the place where your cravings will be satisfied. Our cafe is operating for almost 20 years, so the classic taste of every food item will never dissapoint you. Our ingredients are fresly picked, cooked, and prepared just for you. Don't worry about the preservatives, because all of our ingredients are organic. What are you waiting for? Grab your food and visit us in our shops.</p>
          </div>
        </div>
      </div>
    
      <section class="menu_items" id="menu">
      <br/><br/>
          <h2>COFFEE</h2>
          <div class="itemBx">
            <div class="box">
              <img src="../assets/coffee1.jpg" alt="coffee1">
              <div class="infobx">
                <h4>Cappuccino</h4>
                <p> is an espresso-based coffee drink that is prepared with steamed milk foam. Variations of the drink involve the use of cream instead of milk, using non-dairy milk substitutes and flavoring with cinnamon or chocolate powder.</p>
                <h5>$7.50</h5>
              </div>
            </div>
            <div class="box">
              <img src="../assets/coffee2.jpg" alt="coffee2">
              <div class="infobx">
                <h4>Coffe Americano</h4>
                <p>is a coffee drink prepared with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee. The strength of it varies with the number of shots of espresso and the amount of water added.</p>
                <h5>$8.00</h5>
              </div>
            </div>
            <div class="box">
              <img src="../assets/coffee3.jpg" alt="coffee3">
              <div class="infobx">
                <h4>Mochaccinno</h4>
                <p>is a chocolate-flavoured warm beverage that is a variant of a caffè latte, commonly served in a glass rather than a mug.</p>
                <h5>$8.25</h5>
              </div>
            </div>
            <div class="box">
              <img src="../assets/coffee4.jpg" alt="coffee4">
              <div class="infobx">
                <h4>Café Bombon</h4>
                <p>is a coffee with a topping of espresso on roughly equal amounts of condensed milk.  don’t mix, and barista usually serves this drink in a tumbler glass to manifest the beautiful layering of coffee and milk.</p>
                <h5>$9.00</h5>
              </div>
            </div>
          </div>
        <br/>
        <br/> 
        <br/>
        <br/>
        <br/>

          <h2>PASTRY</h2>
          <div class="itemBx">
            <div class="box">
              <img src="../assets/pastry1.jpeg" alt="pastry1">
              <div class="infobx">
                <h4>Strawberry Shortcake</h4>
                <p>this cake is the ultimate house in the philippines. It is coated with mocha icing and layered with white strawberries, and on top of that is the red plump fresh strawberries.</p>
                <h5>$7.00</h5>
            </div>
			    </div>
          <div class="box">
            <img src="../assets/pastry2.jpeg" alt="pastry2">
            <div class="infobx">
              <h4>Chocolate fruit cake</h4>
              <p>This chocolate fruit cake will take you to the next level with the richness of fress cocoa that was picked on the high mountains of itally. Topped with fresh berries to taste the freshness of the fruits.</p>
              <h5>$7.50</h5>
            </div>
          </div>
          <div class="box">
            <img src="../assets/pastry3.jpeg" alt="pastry3">
            <div class="infobx">
              <h4>French Macaroons</h4>
              <p>This pastry is one of the intricate pastry that our cafe has. This is made according to the right amount of time to satisfy your taste.</p>
              <h5>$8.50</h5>
            </div>
          </div>
          <div class="box">
            <img src="../assets/pastry4.jpeg" alt="pastry4">
            <div class="infobx">
              <h4>Red Velvet</h4>
              <p>The velveltness of this cake will surely take you to the paradise because of the special cream cheese that is made only in this cafe. Classic but tasty.</p>
              <h5>$9.00</h5>
            </div>
          </div>
        </div>

          <br/>
          <br/>
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
      background-image:url(../assets/menu1.jpg);
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
  h2 {
    display: flex;
    flex-direction: row;
  }
    
  h2:before,
  h2:after {
      content: "";
      flex: 1 1;
      border-bottom: 2px solid #5e3219;
      margin: auto;
  }
  .menu_items .itemBx .box{
	background: #fff;
	justify-content: center;
	align-items: center;     
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
  }
  .menu_items .itemBx .box img{
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 10px;
    margin: 10px;
  }
  .menu_items .itemBx .box .infobx h4{
    font-size: 1.5em;
  }
  .menu_items .itemBx .box .infobx p{
    font-size: 0.8em;
  }
  .menu_items .itemBx .box .infobx h5{
    font-size: 1.3em;
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