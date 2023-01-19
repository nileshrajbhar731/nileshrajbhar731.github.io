const array_data=[
    {
        firstName:"nilesh",
        lastName:"bhardwaj",
        email:"nileshrajbhar731@gmail.com",
        userRole:"user",
        api_key:[
            {
                key:"1234567890",
                websiteUrl_token:"google.com",
                key_data:[
                    {
                        problem:"password undfine",
                        solution:"plase check password",
                        url_link:"google.com",
                        id:"1",
                    }
                ]
            }
        ]
    }
]

var nav_info=window.navigator;
var screen_info=window.screen;
var uid=nav_info.mimeTypes.length;
uid+=nav_info.userAgent.replace(/\D+/g,'');
uid+=screen_info.height || '';
uid+=screen_info.width || '';
uid+=screen_info.pixelDepth || '';
console.log(uid);
alert(uid)