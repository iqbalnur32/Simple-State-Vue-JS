<template>
	<div class="home">
		<div class="row">
			<div class="col-lg-6">
				<div class="card">
					<div class="card-body">
						MAIN MENU
						<hr>
						<ul class="list-group">
							<router-link :to="{name: 'Home'}" class="list-group-item text-dark text-decoration-none">DASHBOARD</router-link>
							<li @click="logout" class="list-group-item text-dark text-decoration-none" style="cursor:pointer">LOGOUT</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="card">
					<div class="card-body">
						<div class="jumbotron">
							<h1>Ini Halaman Home</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
export default{
	name: 'Home',
	data () {
		return {

		}
	},
	methods: {
		logout(){
			this.$store.dispatch('logout')
		}
	}	
}
</script>