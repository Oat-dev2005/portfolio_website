<!-- index.php -->
<?php include 'includes/header.php'; ?>
        <script src="https://cdn.jsdelivr.net/npm/particles.js"></script> 
        <section class="hero" id="home">
            <div class="container hero-content">
                <div class="terminal">
                    <h1 class="title typing"></h1>
                    <p class="subtitle">I will create amazing work that captivates everyone.</p>
                    <div class="icon_container"> 
                        <div class="icon github">
                            <a href="https://github.com/Oat-dev2005" target="_blank">
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </div>
                        <div class="icon facebook">
                            <a href="https://www.facebook.com/surapich.klaeothanong.3" target="_blank">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                        </div>
                        <div class="icon instagram">    
                            <a href="https://www.instagram.com/ka0_0at_05/" target="_blank">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="profile-wrapper">
                    <div class="profile-border"></div>
                    <div class="tech-icons">
                        <img src="images/php_icon.png" style="top: -1%; left: 50%; transform: translateX(-50%);">
                        <img src="images/vscode_icon.png" style="top: 50%; right: -3%; transform: translateX(-50%);">
                        <img src="images/github_icon.png" style="bottom: -2%; left: 50%; transform: translateX(-50%);">
                        <img src="images/css_icon.png" style="top: 50%; left: 2%; transform: translateX(-50%);">
                        <img src="images/html_icon.png" style="top: 83%; left: 16%; transform: translateX(-50%);">
                        <img src="images/js_icon.png" style="top: 13%; left: 15%; transform: translateX(-50%);">
                        <img src="images/c++_icon.png" style="top: 83%; right: 11%; transform: translateX(-50%);">
                        <img src="images/java_icon.png" style="top: 13%; right: 11%; transform: translateX(-50%);">
                    </div>
                    <img src="images/myself.jpg" class="profile-img" id="profile_img">
                </div>
            </div>          
        </section>
            <div id="particles-js">
                <?php 
                    include 'about.php';
                    include 'certificate.php';
                    include 'projects.php';            
                ?>
            </div>
        <div class="cursor-dot"></div>
        <div class="cursor-outline"></div>  
<?php include 'includes/footer.php'; ?>