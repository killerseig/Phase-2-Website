Vue.component('navigation', 
	{
  template: 
	`
		<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
			<a class="navbar-brand" href="images/Company-Logos-Pictures/Phase 2 Logo.png">
				<img src="../images/Company-Logos-Pictures/Phase 2 Logo Expanded.png" alt="Company Logo " width="150em">
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<a class="nav-link" href="Home.html">Home </a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Departments
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a class="dropdown-item" href="Drywall.html">Drywall</a>
							<a class="dropdown-item" href="Acoustics.html">Acoustics</a>
							<a class="dropdown-item" href="Paint.html">Paint</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	`
	}),
	


new Vue({ el: '#templateNav' })