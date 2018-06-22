var app = new Framework7({
    photoBrowser: {
      type: 'page',
    }
});
var mainView = app.views.create('.view-main');

// var myPhotoBrowserStandalone = app.photoBrowser.create({
//     photos : [
//         'http://weixin.xinxiantour.com/Common/website/assets/images/images-xinxian/index/pic_hsjy.jpg',
//         'http://weixin.xinxiantour.com/Common/website/assets/images/images-xinxian/index/pic_lsxs.jpg',
//         'http://weixin.xinxiantour.com/Common/website/assets/images/images-xinxian/index/pic_gsxc.jpg',
//     ]
// });

// myPhotoBrowserStandalone.open();
var myPhotoBrowserStandalone;
var showPhotos = function(photos, activeIndex)
{
    if(myPhotoBrowserStandalone)
    {
        app.photoBrowser.destroy(myPhotoBrowserStandalone);
        myPhotoBrowserStandalone = undefined;
    }
    myPhotoBrowserStandalone = app.photoBrowser.create({
        photos : photos,
        on: {
            photoBrowserClosed: function()
            {
                window.parent.postMessage(JSON.stringify({
                    type: 'photo_browser_closed'
                }), '*');
            },
            photoBrowserOpened: function()
            {
                window.parent.postMessage(JSON.stringify({
                    type: 'photo_browser_opened'
                }), '*');
            }
        },
    });
    
    myPhotoBrowserStandalone.open(activeIndex === undefined ? 0 : activeIndex);
};

window.addEventListener('message', function(e){
    var msgObj;
    if(e && e.data && e.data.length > 0)
    {
        msgObj = JSON.parse(e.data);
    }
    if(!msgObj)
    {
        return;
    }
    if(msgObj.type === 'photo_browser_photos')
    {
        showPhotos(msgObj.data, msgObj.activeIndex);
    }
});

if(window.parent)
{
    window.parent.postMessage(JSON.stringify({
        type: 'photo_browser_loading'
    }), '*');
}
