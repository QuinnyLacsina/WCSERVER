<template>
   <div id="About" class="resume_left">
      <div class="resume_image">
        <img src="src\assets\profile.jpg" alt="Resume_image">
      </div>
      <div class="resume_bottom">
        <div class="resume_item resume_profile">
          <div class="resume_title">{{msg}}</div>
          <div class="resume_info">
            Date of Birth: June 14, 2001<br/>
            Place of Birth: Angeles City<br/>
            Civil Status: Single<br/>
            Nationality: Filipino<br/>
            Language: English & Filipino
          </div>
        </div>
        <div class="resume_item resume_address">
          <div class="resume_title">{{msg1}}</div>
          <div class="resume_info">
            Blk 11 Lot 4,<br/>
            Rose street,<br/>
            Malino Ville, City of San Fernando,<br/>
            Pampanga
          </div>
        </div>
        <div class="resume_item resume_contact">
          <div class="resume_title">{{msg2}}</div>
          <div class="resume_info">
            <div class="resume_subtitle">{{msg3}}</div>
            <div class="resume_subinfo">{{msg4}}</div>
          </div>
          <div class="resume_info">
            <div class="resume_subtitle">{{msg5}}</div>
            <div class="resume_subinfo">{{msg6}}</div>
          </div>
          
        </div>
        <div class="resume_item resume_skills">
          <div class="resume_title">{{msg7}}</div>
          <div class="resume_info">
            <div class="skills_list">
              <div class="skills_left">{{msg8}}</div>
              <div class="skills_bar">
                <p>
                  <span style="width: 90%"></span>
                </p>
              </div>
            </div>
            <div class="skills_list">
              <div class="skills_left">{{msg9}}</div>
              <div class="skills_bar">
                <p>
                  <span style="width: 80%"></span>
                </p>
              </div>
            </div>
            <div class="skills_list">
              <div class="skills_left">{{msg11}}</div>
              <div class="skills_bar">
                <p>
                  <span style="width: 50%"></span>
                </p>
              </div>
            </div>
            <div class="skills_list">
              <div class="skills_left">{{msg12}}</div>
              <div class="skills_bar">
                <p>
                  <span style="width: 95%"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'About Me',
      msg1: 'Address',
      msg2: 'Contact',
      msg3: 'Phone',
      msg4: '+63 916 753 9177',
      msg5: 'Email',
      msg6: 'qjalacsina@gmail.com',
      msg7: 'Skills',
      msg8: 'HTML',
      msg10: 'CSS',
      msg11: 'Javascript',
      msg12: 'Photoshop'
    }
  }
}
</script>

<style>

</style>