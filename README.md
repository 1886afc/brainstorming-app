# brainstorming-app

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="Jacob" content="">
    <link rel="shortcut icon" href="assets/ico/favicon.ico">

    <title>Jacob Ponce</title>

    <!-- Bootstrap core CSS -->
    <link href="assets/css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="assets/css/style.css" rel="stylesheet">
    <link href="assets/css/font-awesome.min.css" rel="stylesheet">


  </head>

  <body>

    <!-- Static navbar -->
    <div class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html">Jacob</a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><a href="index.html">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#works">Portfolio</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>


	<div id="headerwrap">
	    <div class="container">
			<div class="row">
				<div class="col-lg-6 col-lg-offset-3">

					<h4>Hello World! I'm</h4>
					<h1>Jacob Ponce</h1>
					<h4>Full Stack Developer</h4>
				</div>
			</div><! --/row -->
	    </div> <!-- /container -->
	</div><! --/headerwrap -->

	<section id="about"></section>
	<div id="aboutwrap">
		<div class="container info">
            <div class="row centered mt mb">
                <div class="col-lg-10 col-lg-offset-1">
                    <h2>About Me</h2>
                    <p><img id="me" src="assets/img/me.JPG">Freelance web developer, looking to make the most out of life.
                        Love the challenges that come with being a web developer and finding unique ways to provide a client with a great product. Always looking to better myself and learn new technologies; I'm currently learning WordPress so i can add that to my knowledge.
                        <br>

                       I Just recently moved to Philly. When not coding, I am usually enjoying life with my partner and best friend Mel. We love hiking, biking, exploring new and exciting places to eat, watching foreign/indie films, and just chilling together.
                        When only having myself for company I enjoy playing video games, watching Arsenal FC play(huge fan), and watching Game of thrones.
                        <br>

                        Some of my specialties include:
                        html, JavaScript, CSS, Bootstrap CSS,PHP, jQuery, Laravel, mySQL, and node.js </p>
                </div>

            </div><! --/row -->
		</div> <!-- /container -->
	</div><! --/aboutwrap -->

	<div class="container">

	</div><! --/container -->



	<div id="chartWrap">
	    <section id="work"></section>
	    <div class="container ">
            <div class="row centered mt mb">
                <h1 id="skill">My Skill Level</h1>
                <div style="width:100%;">
                    <canvas  id="barChart" height="300" width="300"></canvas>
                </div>
            </div>
        </div><! --/container -->
	</div>


	<section id="works"></section>
	<div class="container">

		<div class="row centered mt mb">
			<h1>My Portfolio</h1>
			<div class="col-md-3">
                <h3>my early jquery stuff</h3>
				<a href="https://obscure-sands-55186.herokuapp.com/">
					<h4>Hangman!</h4></a>
					<p>My very first app using vanilla Javascript, HTML, Bootstrap, and CSS</p>

                <a href="https://hidden-dawn-16425.herokuapp.com/">
                    <h4>Fun with the giphy api!</h4></a>
                    <p>An app that uses jQuery, giphy api, css, html, and bootstrap</p>

			</div>

			<div class="col-md-3">
                <h3>Landing Pages</h3>
                <a href="https://safe-lowlands-29235.herokuapp.com/">
                <h4>Landing page made with SkeletonCSS</h4>
                </a>
			</div>

			<div class="col-md-3">
                <h3>Bootstrap 4 themes</h3>
				<a href="https://quiet-falls-92985.herokuapp.com/">
					<h4>Theme 1</h4>
                </a>

			</div>

			<div class="col-md-3">
				<a href="">
					<h3>So Good! Work in progress</h3>
				</a>
                <p></p>
			</div>

		</div>
	</div>

	
	<div id="social">
		<div class="container">
			<div class="row centered">

				<div class="col-lg-3">
					<a href="https://www.facebook.com/poncej10"><i class="fa fa-facebook"></i></a>
				</div>
				<div class="col-lg-3">
					<a href="https://twitter.com/AFC__1886"><i class="fa fa-twitter"></i></a>
				</div>
				<div class="col-lg-3">
					<a href="https://www.linkedin.com/in/jacob-ponce-a29080132/"><i class="fa fa-linkedin"></i></a>
				</div>
				<div class="col-lg-3">
					<a href="https://github.com/1886afc"><i class="fa fa-github"></i></a>
				</div>

			
			</div><! --/row -->
		</div><! --/container -->
	</div><! --/social -->

	<div id="footerwrap">
		<div class="container">
			<div class="row centered">
				<div class="col-lg-4">
					<p><b>Full Stack Developer</b></p>
				</div>
			
				<div class="col-lg-4">
					<p>Philadelphia, PA</p>
				</div>
				<div class="col-lg-4">
					<p>Jacob.p.1886@gmail.com</p>
				</div>
			</div>
		</div>
	</div><! --/footerwrap -->
	


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>
    <script src="assets/js/app.js"> </script>
  </body>
</html>
