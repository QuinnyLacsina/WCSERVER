<template>
  <div id="Education">
   <div class="resume_right">
     <div class="resume_item resume_namerole">
			<div class="name">{{msg}}</div>
			<div class="role"> {{msg1}}</div>
		</div>

    <div class="resume_item resume_namerole">
			<div class="resume_title">{{msg2}}</div>
      <p>To secure a responsible career oppurtunity to fully utilize my training and skills, while making a significant contribution to the success of the company.</p>
		</div>

		<div class="resume_item resume_education">
			<div class="resume_title">{{msg3}}</div>
			<div class="resume_info">
				<div class="resume_data">
					<div class="year">{{msg4}}</div>
					<div class="content">
						<p class="level"><strong>{{msg5}}</strong></p>
						<p><strong>Holy Angel University, Philippines</strong><br/>
            Bachelor of Science in Information Technology with area specialization of Web Development</p>
					</div>
				</div>
				<div class="resume_data">
					<div class="year">{{msg6}}</div>
					<div class="content">
						<p class="level"><strong>{{msg7}}</strong></p>
						<p><strong>Holy Angel University, Philippines</strong><br/>
            Junior High School<br/>Senior High School</p>
					</div>
				</div>
				<div class="resume_data">
					<div class="year">{{msg8}}</div>
					<div class="content">
						<p class="level"><strong>{{msg10}}</strong></p>
						<p><strong>Achievers Special Education Center</strong><br/>
            Elementary School</p>
					</div>
				</div>

			</div>
		</div>
		<div class="resume_item resume_experience">
			<div class="resume_title">{{msg11}}</div>
			<div class="resume_info">
				<div class="resume_data">
					<div class="year">{{msg12}}</div>
					<div class="content">
						<p class="level"><strong>Dean's List</strong></p>
						<p><strong>{{msg13}}</strong></p>
					</div>
				</div>
				<div class="resume_data">
					<div class="year">{{msg14}}</div>
					<div class="content">
						<p class="level"><strong>Dean's List</strong></p>
						<p><strong>{{msg15}}</strong></p>
					</div>
				</div>
				<div class="resume_data">
					<div class="year">{{msg16}}</div>
					<div class="content">
						<p class="level"><strong>With Honor</strong></p>
						<p><strong>{{msg17}}</strong></p>
					</div>
				</div>
				<div class="resume_data">
					<div class="year">{{msg18}}</div>
					<div class="content">
						<p class="level"><strong>With Honor</strong></p>
						<p><strong>{{msg19}}</strong></p>
					</div>
				</div>
				<div class="resume_data">
					<div class="year">{{msg20}}</div>
					<div class="content">
						<p class="level"><strong>With Honor</strong></p>
						<p><strong>{{msg21}}</strong></p>
					</div>
				</div>
			</div>
		</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Education',
  data () {
    return {
      msg: 'Quinny Lacsina',
      msg1: 'Web Developer Student',
      msg2: 'Career Objective',
      msg3: 'Education',
      msg4: '2020 - Present',
      msg5: 'Tertiary',
      msg6: '2014 - 2020',
      msg7: 'Secondary',
      msg8: '2007 - 2014',
      msg10: 'Primary',
      msg11: 'Achievements',
      msg12: '2021',
      msg13: 'First year, 2nd Semester',
      msg14: '2020',
      msg15: 'First year, 1st Semester',
      msg16: '2020',
      msg17: 'Senior High School, 2nd Semester',
      msg18: '2019',
      msg19: 'Senior High School, 1st Semester',
      msg20: '2019',
      msg21: 'Junior High School'
    }
  }
}
</script>

<style>

</style>