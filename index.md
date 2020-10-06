---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
---

<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css" />
<script>
	var PHOTOCOUNT=31;
	document.addEventListener( 'DOMContentLoaded', function () {
		new Splide( '.splide', {
			type: 'loop',
			autoplay: true,
			rewind: true,
			start: Math.floor(Math.random() * PHOTOCOUNT),
            pagination: false,
			lazyLoad: 'nearby'
		} ).mount();
	} );
	document.write('<div class="splide">');
	document.write('<div class="splide__track">');
	document.write('<ul class="splide__list">');
	for( var i=1 ; i<=PHOTOCOUNT ; i++ ) {
		document.write('<li class="splide__slide"><img data-splide-lazy="photos/' + i + '.jpg" /></li>');
	}
	document.write('</ul></div></div>');
</script>