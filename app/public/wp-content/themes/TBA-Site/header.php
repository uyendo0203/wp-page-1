<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?></title>
    <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
    <?php wp_head(); ?>
</head>

<body>
    <div class="loading">
        <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
            <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#fdbf0f" />
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#fff" />
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    <main>
        <header class="header only-toggle">
            <!-- only-toggle -->
            <div class="nav-works">
                <a href="/" class="logo-work">
                    <img class="lazy-load" data-src="./images/logo.svg" alt="TBA COMMUNICATION">
                </a>
                <ul>
                    <li>
                        <a href="/our-works.html">FESTIVAL</a>
                    </li>
                    <li>
                        <a href="/">LAUNCHING
                            <br>& CONFERENCE
                        </a>
                    </li>
                    <li>
                        <a href="/">CORPORATE
                            <br>EVENT
                        </a>
                    </li>
                    <li>
                        <a href="/">BRANDING
                            <br>ACTIVATION
                        </a>
                    </li>
                </ul>
            </div>
            <div class="hambuger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav class="nav">
                <div class="close-button close-menu-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.26 75.26">
                        <defs>
                            <style>
                            .cls-1 {
                                fill: #f4f5f6;
                                fill-rule: evenodd;
                            }

                            .cls-2 {
                                fill: none;
                                stroke: #f4f5f6;
                                stroke-miterlimit: 10;
                                stroke-width: 0.77px;
                            }
                            </style>
                        </defs>
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <path class="cls-1"
                                    d="M39.73,37.33,54.3,21.43a1,1,0,0,0,0-1.52.92.92,0,0,0-1.52,0L38.29,35.67,23.79,19.91a.92.92,0,0,0-1.52,0,1,1,0,0,0,0,1.52l14.57,15.9L22.27,53.44a1,1,0,0,0,0,1.59,1,1,0,0,0,1.52,0l14.5-16L52.78,55a1,1,0,0,0,1.52,0,1,1,0,0,0,0-1.59Z" />
                                <circle class="cls-2" cx="37.63" cy="37.63" r="37.25" />
                            </g>
                        </g>
                    </svg>
                </div>
                <ul class="nav__ul ">
                    <li class="nav__li" link="aboutus">
                        <a href="#" class="nav__a ">about us</a>
                    </li>
                    <li class="nav__li" link="archivement">
                        <a href="#" class="nav__a">ACHIEVEMENT</a>
                    </li>
                    <li class="nav__li" link="ourworks">
                        <a href="#" class="nav__a">OUR WORKS</a>
                    </li>
                    <li class="nav__li" link="outclients">
                        <a href="#" class="nav__a">OUR CLIENTS</a>
                    </li>
                    <li class="nav__li" link="contactus">
                        <a href="#" class="nav__a">CONTACT US</a>
                    </li>
                </ul>
            </nav>
        </header>