window.addEventListener("load", () => {
    treeViewContentClicker();
});

function treeViewContentClicker() {
    const contentValue = Array.from(document.querySelectorAll(".text_block_code"));
    Array.from(document.getElementsByTagName("a")).forEach(function (node) {
        if (node.classList.contains("tree-nav__item-title")) {
            node.addEventListener('click', function () {
                var valueName = node.innerHTML;
                var contentToShow = contentValue.find(item => item.dataset.articleName === valueName);
                var contentToHide = contentValue.find(item => item.classList.contains('text_block_code--current'));
                if (typeof contentToShow !== "undefined") {
                    contentToShow.classList.add('text_block_code--current');
                    contentToHide.classList.remove('text_block_code--current');
                }

            })
        }
    });
    
};
