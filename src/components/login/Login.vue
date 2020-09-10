<template>
	<div class="backgroudLogin" style="">
		<div class="formLogin" style="justify-content: center;">
			<form style="display:flex;flex-direction:row;" action="">
				<div style="width:100%;">
					<div class="inputLogin">
						<h4>EMAIL</h4>
						<input v-model="email" id="input" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter Email" required>
					</div>
					<div class="inputLogin">
						<h4>PASSWORD</h4>
						<input v-model="password" id="input" type="password" class="form-control" aria-describedby="emailHelp" placeholder="Enter Password" required>
					</div>
					<button style="background-color:#19459b; border-radius:0px; margin-left:15px" type="button" class="btn btn-primary" @click.prevent="login()" >Login</button>
					<div style="margin-top:10px">
						<p style="margin-left:20px;font-size:18px;font-style:italic;color:grey;margin-top:20px; margin-bottom:10px">Have an google account?</p>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script type="text/javascript">
	
export default {
	name: 'Login',
	data() {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		login(){
			let payload = {
				email: this.email,
				password: this.password
			}
			this.$store.dispatch('login', payload);
		}
	}
} 

</script>

<style>
.backgroudLogin{
	background-image: url('../../assets/backgroud.jpg');
	/*position: absolute;*/
	background-color: red;
}

#input{
	width:100%;
}
.formLogin{
	display: flex;
	flex-direction: column;
	background-color:white;
	position: absolute;
	left:7vw;
	width:40vw;
	padding:50px;
}
.inputLogin{
	margin: 20px;
}
.home{
	height: 100vh;
	display: flex;
	flex-direction: row;
}
p{
	font-weight: 100;
	font-size:24px;
}
h2{
	color: white;
	font-size: 55px;
	font-weight: 300;
	margin-bottom: -0px;
}
h1{
	color:white;
	font-size: 24px;
	font-weight: 300;
}
h4{
	font-weight: 600;
	font-size:15px;
}
</style>