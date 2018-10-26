

jQuery(document).ready(function(){
	
	if ( screen.width < 768 ){
			
			jQuery(document).ready(function(){
			
			/*		jQuery(".view-artwork-watercolor .view-content div.masonry-item:first-child").remove();
					jQuery(".view-artwork-drawing .view-content div.masonry-item:first-child").remove();
					jQuery(".view-artwork-hand-pulled-prints .view-content div.masonry-item:first-child").remove();
					
					jQuery(".view-genre-view-for-printmaking .view-content div.masonry-item:first-child").remove();
					jQuery(".view-genre-views-for-all .view-content div.masonry-item:first-child").remove();
					jQuery(".view-genre-view-for-watercolor .view-content div.masonry-item:first-child").remove(); */
					
					jQuery("#block-system-user-menu").remove();
					 
					});

			
			}	
			
		                 
	

			
			var node_title = jQuery(".node-type-printmaking h1.page-header").text();
			jQuery("<h1 class='node-header'><div class='custom_title'>"+node_title+"</div></h1>").insertBefore(".node-type-printmaking div.group-content div.field-group-format-wrapper");
			
			var node_title_watercolors = jQuery(".node-type-watercolors h1.page-header").text();
			jQuery("<h1 class='node-header'><div class='custom_title'>"+node_title_watercolors+"</div></h1>").insertBefore(".node-type-watercolors div.group-content div.field-group-format-wrapper");
			
			var node_title_drawings = jQuery(".node-type-drawings h1.page-header").text();
			jQuery("<h1 class='node-header'><div class='custom_title'>"+node_title_drawings+"</div></h1>").insertBefore(".node-type-drawings div.group-content div.field-group-format-wrapper");
			
	//painting purches-form 
	
        jQuery(".purches").click(function(){
        jQuery('#node-136').show();
});
jQuery(".purches").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery("#webform-client-form-136").offset().top
    }, 2000);
});

	
    });  

	

		
