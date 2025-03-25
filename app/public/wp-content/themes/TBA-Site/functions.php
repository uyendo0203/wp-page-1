<?php
function custom_enqueue_assets() {

    // Thêm CSS
    wp_enqueue_style('main-style', get_template_directory_uri() . '/assets/css/app.css');
    wp_enqueue_style('responsive-style', get_template_directory_uri() . '/assets/css/bg-image.css');


    // Đăng ký thư viện jQuery (WordPress đã có sẵn jQuery, không cần tự tải lại)
    wp_enqueue_script('jquery');

    // Thêm thư viện từ thư mục theme
    // wp_enqueue_script('jquery-custom', get_template_directory_uri() . '/libs/jquery-3.7.1.min.js', array('jquery'), null, true);
    wp_enqueue_script('slick-slider', get_template_directory_uri() . '/assets/libs/slick/slick.min.js', array('jquery'), null, true);
    wp_enqueue_script('modernizr', get_template_directory_uri() . '/assets/libs/slick/modernizr.min.js', array(), null, true);
    wp_enqueue_script('mousewheel', get_template_directory_uri() . '/assets/libs/jquery.mousewheel.min.js', array(), null, true);

     // Thêm GSAP core
     wp_enqueue_script('gsap-core', get_template_directory_uri() . '/assets/libs/gsap/gsap.min.js', array(), null, true);
    
     // Thêm các plugin của GSAP
     wp_enqueue_script('gsap-lenis', get_template_directory_uri() . '/assets/libs/gsap/lenis.min.js', array('gsap-core'), null, true);
     wp_enqueue_script('gsap-scrolltrigger', get_template_directory_uri() . '/assets/libs/gsap/ScrollTrigger.min.js', array('gsap-core'), null, true);
     wp_enqueue_script('gsap-scrollto', get_template_directory_uri() . '/assets/libs/gsap/ScrollToPlugin.min.js', array('gsap-core'), null, true);
     wp_enqueue_script('gsap-cssrule', get_template_directory_uri() . '/assets/libs/gsap/CSSRulePlugin.min.js', array('gsap-core'), null, true);
     
     // Thêm file JS chính của bạn
    wp_enqueue_script('static-js', get_template_directory_uri() . '/assets/js/static.js', array('jquery'), null, true);
    wp_enqueue_script('animate-js', get_template_directory_uri() . '/assets/js/animate.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'custom_enqueue_assets');

?>
