<template>
<div class="container">
  <div class="resume_wrapper">
    
      <about></about>

      <education></education>

    
  </div>
   
  
</div>
</template>

<script>
import Education from './components/Education'
import About from './components/About'

export default {
  components: {
    Education,
    About
  },
  name: 'app',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

*{
	margin: 0;
	padding: 0;
	list-style: none;
	box-sizing: border-box;
	font-family: 'Roboto', sans-serif;
}

body{
	background: #f7efeb;
	font-size: 14px;
	line-height: 20px;
}

.resume_wrapper{
	display: flex;
	width: 800px;
	margin: 50px auto;
	background: #ebecf5;
	padding: 10px;
}

.resume_wrapper .resume_left{
	width: 35%;
	background: #2d3136;
}


.resume_wrapper .resume_left .resume_image{
	width: 100%;
}

.resume_wrapper .resume_left .resume_image img{
	width: 100%;
	display: block;
}

.resume_wrapper .resume_title{
	color: #ffffff;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 16px;
	margin-bottom: 10px;
	letter-spacing: 4px;
}

.resume_wrapper .resume_left .resume_info{
	color: #e2e3ec;
}

.resume_wrapper .resume_left .resume_bottom{
	padding: 20px 30px ;
}

.resume_wrapper .resume_item{
	padding: 20px 0;
	border-bottom: 1px solid #546b7c;
}

.resume_wrapper  .resume_item:last-child{
	border-bottom: 0;
}

.resume_wrapper .resume_left .resume_namerole{
	display: none;
}

.resume_wrapper .resume_namerole .name{
	font-size: 20px;
	color: #e2e3ec;
	text-transform: uppercase;
	font-weight: 700;
	margin-bottom: 5px;
	letter-spacing: 4px;
}


.resume_wrapper .resume_left .resume_namerole .role{
	color: #e2e3ec;
}

.resume_wrapper .resume_left .resume_contact .resume_info:last-child{
	 margin-top: 10px;
}

.resume_wrapper .resume_left .resume_contact .resume_subtitle{
	color: #e2e3ec;
	margin-bottom: 2px;
}

.resume_wrapper .resume_left .resume_skills .skills_list{
	display: flex;
	justify-content: space-between;
	margin-bottom: 5px;
}

.resume_wrapper .resume_left .resume_skills .skills_list .skills_bar p{
	position: relative;
	width: 125px;
    height: 20px;
    background: #e2e3ec;
}

.resume_wrapper .resume_left .resume_skills .skills_list .skills_bar p span{	
	position: absolute;
	top: 0;
	left: 0;
	background: #546b7c;
	width: 100%;
	height: 100%;
}



.resume_right{
  align-content: center;
}


.resume_wrapper .resume_right{
	width: 100%;
	padding: 5% 40px;
	color: #2d3136;
}

.resume_wrapper .resume_right .resume_namerole .name{
	color: #2d3136;
	font-size: 32px;
}

.resume_wrapper .resume_right .resume_namerole .role{
  padding-top: .5%;
  font-family: 'Courier New', Courier, monospace;
	font-size: 14px;
	text-transform: uppercase;
}


.resume_wrapper .resume_right .resume_item .resume_title{
  font-size: 150%;
	color: #26252d;
}

.resume_wrapper .resume_right .resume_data{
	display: flex;
}

.resume_wrapper .resume_right .resume_data .year{
	padding-right: 5%;
	width: 115px;
	position: relative;
}

.resume_wrapper .resume_right .resume_data .content{
	padding-left: 5%;
	margin-bottom: 20px;
	width: calc(100% - 115px);
}

.resume_wrapper .resume_right .resume_data p.level{
	color: #325875;
}

.resume_wrapper .resume_right .resume_data .year:before{
	content: "";
	position: absolute;
	top: 5px;
	right: 0;
	width: 10px;
	height: 10px;
	background: #e2e3ec;
	border: 1px solid #2d3136;
	border-radius: 50%;
}

.resume_wrapper .resume_right .resume_data .year:after{
	content: "";
    position: absolute;
    top: 17px;
    right: 4px;
    width: 3px;
    height: 90%;
    background: #546b7c;
}

.resume_wrapper .resume_right .resume_data:last-child .year:after{
	display: none;
}

.resume_wrapper .resume_right .resmue_interests .resume_info{
	display: flex;
	justify-content: space-between;
	text-align: center;
}



@media screen and (max-width: 800px){
	.resume_wrapper .resume_right .resume_namerole{
		display: none;
	}
	.resume_wrapper .resume_left .resume_namerole{
		display: block;
	}
	.resume_wrapper{
		width: 95%;
		margin: 10px auto;
		flex-direction: column;
	}
	.resume_wrapper .resume_left,
	.resume_wrapper .resume_right{
		width: 100%;
	}
}

@media screen and (max-width: 424px){
	.resume_wrapper .resume_right{
		padding: 20px 30px;
	}
	.resume_wrapper .resume_right .resume_data{
		flex-direction: column;
	}
	.resume_wrapper .resume_right .resume_data .year{
		padding: 0;
		margin-bottom: 5px;
		width: 100%;
		color: #546b7c;
	}
	.resume_wrapper .resume_right .resume_data .year:before,
	.resume_wrapper .resume_right .resume_data .year:after{
		display: none;
	}
	.resume_wrapper .resume_right .resume_data .content{
		width: 100%;
		padding: 0;
	}
}
</style>