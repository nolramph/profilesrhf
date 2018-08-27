$(function(){
    loadProjectsData();
$('#select-project-list').change( function(){
        loadProjectsData()
    });
});

function loadProjectsData(){
    $("#unite-container").empty();
    $("#unite-container").html("<img class='loading' src='images/loading.gif'>");
    var path = $('#select-project-list').val();
    $.ajax({
        url: "././private/query_get/select_projects.php",
        type: "GET",   
        dataType: 'json', 
        data : {path_type: path},
            success: function(data){
                var elements = $();
                $.each(data.result,function(i, item){
                    $("#unite-container").empty();
                    $("#unite-container").html("<div id='gallery' display='none;'></div>");
                    elements = elements.add($("<img alt='"+item.name+"' src='"+item.thumb_path+"' data-image='"+item.path+" ' style='display:none;'>"));
                    $('#gallery').append(elements);
                });

                //CAROUSEL TILE GALLERY HOMEPAGE
                $("#gallery").unitegallery({
                    tile_enable_textpanel:true,
                    tile_textpanel_title_text_align: "center",
                    tile_textpanel_always_on:true,
                });
            }
        });
}