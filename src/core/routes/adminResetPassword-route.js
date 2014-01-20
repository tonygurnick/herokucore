

"use strict";


module.exports=function( router, controller, view  ){



    router.post("/admin/password/reset/:id", controller);
    router.get("/admin/password/reset/:id", view);


};