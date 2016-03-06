=== WordPress Hashtags ===
Contributors: elhardoum
Tags: hashtags, twitter, links, admin, settings, widget, post, shortcode, comments, bbPress, BuddyPress, hashtag, topics, replies, media, social, hash, CSS, Facebook, Instagram
Requires at least: 3.0.1
Tested up to: 4.4.2
Stable tag: 0.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Author URI: http://samelh.com/
Donate link: http://samelh.com/

Enable Hashtags in your WordPress content: post content & title, widget content & title, comments, bbPress topics/replies, & BuddyPress activity streams..

== Description ==

WP Hashtags is a WordPress Hashtags plugin which allows you to easily fetch hashtags and parse them as links in post content, title, widget content and title, bbPress topics/replies, and buddyPress acitivity streams and updates. Comes with a useful shortcode you can use for parsing hashtags.

<h3>Features</h3>

Basically you add the feature to turn a hash plain text into a link. So far with the initial release, you can recognize and parse hashtags in:

<li>Post title</li>
<li>Post content</li>
<li>Widget title</li>
<li>Widget content</li>
<li>Comment text</li>
<li>bbPress topics</li>
<li>bbPress replies</li>
<li>BuddyPress activity streams and status updates</li>

<h3>Shortcodes</h3>

As an additional feature, we support shortcodes, and you can use <code>[wp-hashtag]</code> to parse a hashtag. An example use is <code>[wp-hashtag]#WordPress[/wp-hashtag]</code>, give it a try!

For support topics please use the plugin's dedicated support forum here on WordPress. Otherwise if you want to let us know anything, you can drop us few lines through our <a href="http://samelh.com/contact/">contact page</a>.

== Installation ==

* Install and activate the plugin:

1. Upload the plugin to your plugins directory, or use the WordPress installer.
2. Activate the plugin through the \'Plugins\' menu in WordPress.

== Screenshots ==

1. Admin settings page

== Changelog ==

= 0.3 =

* Fixed several bugs related to the encoding throwing bad characters and replacing text.. Special thanks for the folks who reported this and contacted me
* Improved settings script

= 0.2.3 =

* Fixed a little bug of converting HTML entities into hashtags as they contain hashes when encoded.

= 0.2.2 =

* Removed an undefined function left in the man plugin file by mistake

= 0.2.1 =

* Added a useful filter <code>wpht_filter_content</code> in case you wanted to exclude some posts or pages or whatsoever, making it extensible.

= 0.2 =

* Fixed bugs originally reported by Javi (Arutam). New release allows the plugin to ignore hashes from inline CSS styles and other markup attributes, so as to parse only plain and valid hashtags. Thanks Javi!

= 0.1 =

* Initial release.
