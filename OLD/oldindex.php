    <!DOCTYPE html>
    <html>
    <head>
        <title>Sarah Mehmedi</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="style.css">
        <link rel="stylesheet" href="bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="bootstrap.min.js"></script>

    </head>
    <body bgcolor="#E6E6FA">

    <div class="container">
        <h1 id="title1">Sarah Mehmedi</h1>
        <ul class="nav nav-pills nav-justified">
            <li class="active"><a data-toggle="pill" href="#home">About</a></li>
            <li><a data-toggle="pill" href="#menu1">Projects</a></li>
            <li><a data-toggle="pill" href="#menu2">Resume</a></li>
            <li><a data-toggle="pill" href="#menu3">Contact</a></li>
        </ul>

        <div class="tab-content">
            <div id="home" class="tab-pane fade in active">
                <h2>About</h2>
                <p id="about">Hi! My name is Sarah Mehmedi and I am currently studying Computer Science at Loyola University in Chicago. My interests include front end development and developing stable applications. I strive to make everything functional and appealing by fixing all of the imperfections. I have worked in many different sized teams ranging from 1-6 and from the teams I've learned how to communicate and work effectively. This website is also a little summer project of mine, which is updated frequently to give you all a more up-to-date look into what new things I am learning and doing with computer science.</p>
               <!-- <p id="about"> More about me! I love to travel and learn about the many different cultures there are in the world we live in today.</p>-->
                <img src="selfpicture.jpg" alt="Sarah" id="pic">
                <a href="https://www.linkedin.com/pub/sarah-mehmedi/79/482/5b7" target= "_blank" style="text-decoration:none;"><span style="font: 100% Arial,sans-serif; color:#0783B6;"><img src="https://static.licdn.com/scds/common/u/img/webpromo/btn_in_20x15.png" width="20" height="15" alt="View Sarah Mehmedi's LinkedIn profile" style="vertical-align:middle;" border="0">&nbsp;View My Profile</span></a>

            </div>
            <div id="menu1" class="tab-pane fade">

                <h2 t>Projects</h2>
                <hr class="hrline">
                <h3 class="bold">Sudoku - C# - Team of 5</h3>
                <h4 class="underline">Description</h4>
                <UL>
                <LI class="projects">Users entered difficulty and a board would be generated, then they would try and solve the puzzle</LI>
                <LI class="projects">Included a class designed to help the users out by asking if they wanted a hint, a solution, or give up</LI>
                </UL>
                <h4 class="underline">Screenshots Below</h4>
                <img src="sudoku1.jpg" style="float: left; width: 45%; margin-right: 1%; margin-bottom: 0.5em;">
                <img src="sudoku2.jpg" style="float: left; width: 25%; margin-right: 1%; margin-bottom: 0.5em;">
                <img src="sudoku3.jpg" style="float: left; width: 25%; margin-right: 1%; margin-bottom: 0.5em;">
                <p style="clear: both;">

                <hr class="hrline">

                <h3 class="bold">Six Degrees of Separation - C++ - Team of 2</h3>
                <h4 class="underline">Description</h4>
               <UL>
                <LI class="projects">Modernized version of Six Degrees of Kevin Bacon - we used Channing Tatum as starting point</LI>
                <LI class="projects">Uses graphs data structures and breadth-first search to return the number of connections each actor has</LI>
                <LI class="projects">Asks user for an actor input and returned the movies and actors that connected</LI>
               </UL>
                <h4 class="underline">Screenshot Below</h4>
                <img src="sixdegrees.jpg" alt="Six Degrees of Channing Tatum" id="sixdegrees">
            </div>
            <div id="menu2" class="tab-pane fade">
                <h2>Resume</h2>
                <a href="resume.pdf" target="_blank">Click For Resume</a>
            </div>
            <div id="menu3" class="tab-pane fade">
                <h2>Contact Information</h2>
                <table id="table-font">
                    <tr>
                        <td >Email: </td>
                        <td >sarahmehmedi@gmail.com </td>
                    </tr>
                    <tr>
                        <td> Phone: </td>
                        <td >1(630)826-9266</td>
                    </tr>
                </table>
                <a href="https://www.linkedin.com/pub/sarah-mehmedi/79/482/5b7" target= "_blank" style="text-decoration:none;"><span style="font: 100% Arial,sans-serif; color:#0783B6;"><img src="https://static.licdn.com/scds/common/u/img/webpromo/btn_in_20x15.png" width="20" height="15" alt="View Sarah Mehmedi's LinkedIn profile" style="vertical-align:middle;" border="0">&nbsp;View My Profile</span></a>

            </div>
        </div>
    </div>

    </body>
    </html>

    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-63891733-1', 'auto');
        ga('send', 'pageview');

    </script>
