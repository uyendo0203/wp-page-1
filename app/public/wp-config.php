<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '2c73ol `8d25VngeCK7g[KQ*n(WAm6s7qqH-Z-u>v~maWKz+]B@jnh()tgF*]B^p' );
define( 'SECURE_AUTH_KEY',   '6Kbo8q]hYoA7ygsFmG?(3-j )zb#agM -yyZx.ea:qeg}o*d%CUtR4{IIPu!D#+6' );
define( 'LOGGED_IN_KEY',     'YaP9;$Wy9(X7x&;*^g.D-b|72i3g00UeN-?[Tbk6tLAV5UE h&.<_~8=hACZdC+s' );
define( 'NONCE_KEY',         'Z?#z[suh|lT+f.:@RW3~*>/)F,2tgX)I`+>*<Yzyh2bI;;B5GS=BJcwL/Dl8Oi!<' );
define( 'AUTH_SALT',         'L/kaxYuHA+qhXxK?k)G `qC<.$?kt~ &>PJ98n9h0Cp<%Hov/+X~.5&t8mI4#=WN' );
define( 'SECURE_AUTH_SALT',  ' x8_*u0}Lxenw`9^QeDrNZIhK V=-V+}(e*<&eE+_sZKw@ .;Yb<_Q2V{f%]C{I#' );
define( 'LOGGED_IN_SALT',    'IYQu9gJmvC4_p)p|W&Z&XPARQ~>FLO!2;:!%+3Fqw:SY5y!l)Szpc)Nv-O1LmV]}' );
define( 'NONCE_SALT',        '`-pR%E{R9uKx4xELIQK4N^1=WI&Z]DaUuL56Wg&3dL*3uXM%qql~Qb<(XsBMa4S:' );
define( 'WP_CACHE_KEY_SALT', 'fzjU.?#LO8Z:~0Kz%%u%(k90udAwzjsrA> @`5FB){t]p0ej0e4$Nd`r`K%04:q ' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
