// adapted from https://stackoverflow.com/a/48078807/1217368
$(document).ready(function() {
    $('div.highlight').each(function(i) {
        if (!$(this).parent().hasClass('no-copy-button')) {

            // create an id for the current code section
            var currentId = "codeblock" + (i + 1);

            // find the code section and add the id to it
            var codeSection = $(this).find('code');
            codeSection.attr('id', currentId);

            // create the button, setting the clipboard target to the id
            var btn = document.createElement('a');
            btn.setAttribute('type', 'btn');
            btn.setAttribute('class', 'btn-copy-code');
            btn.setAttribute('data-clipboard-target', '#' + currentId);
            btn.innerHTML = '<i class="fa fa-copy fa-2x"></i>&nbsp;&nbsp; Copy';
            this.insertBefore(btn, this.firstChild);
        }
    });
    new ClipboardJS('.btn-copy-code');
});