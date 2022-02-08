// Custom scrollbar in tooth table =====>
document.addEventListener("DOMContentLoaded", function() {
	OverlayScrollbars(document.querySelectorAll(".tooth"), {});
});

// Input Files =====>
const dt = new DataTransfer();

$(".files-trigger__input").on('change', function(e){
	for(var i = 0; i < this.files.length; i++){
		let filesWrapper = $('<div/>', {class: 'files__wrapper'});
    let filesItem = $('<div/>', {class: 'files-item'}),
			fileName = $('<span/>', {class: 'files-item__name', text: this.files.item(i).name});
		filesItem.append('<i class="icon-file"></i>')
			.append(fileName)
      .append('<i class="files-item__remove icon-trash-can"></i>');
    filesWrapper.append(filesItem)
		$(".files__table").append(filesWrapper).css('display', 'flex');
    $('.files').css('margin-bottom', '48px')
	};
	for (let file of this.files) {
		dt.items.add(file);
	}
	this.files = dt.files;

	$('.files-item__remove').click(function(){
		let name = $(this).next('.files-item__name').text();
		$(this).parents('.files__wrapper').remove();
		for(let i = 0; i < dt.items.length; i++){
			if(name === dt.items[i].getAsFile().name){
				dt.items.remove(i);
				continue;
			}
		}
		document.getElementsByClassName('files-trigger__input').files = dt.files;
	});
});