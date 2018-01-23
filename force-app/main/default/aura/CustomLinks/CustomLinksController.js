({
    doInit : function(component, event, helper) {
        console.log('init handler');
        //get design component lists
        
        //set design values into set of links

        //let links = component.get("v.linkslist");
        const rawlinks = component.get("v.linkslist_config");

        //console.log(rawlinks);

        let validList = helper.createValidList(rawlinks);

        validList
            .then(function(linksObjectArray){
                component.set("v.linkslist", linksObjectArray);
            })
            .catch(function(error){
                //TODO: do something to the UI if there is an error
                console.error(error);
            });

    }, 
    doRender : function (component, event, helper) {
        console.log("render handler");

        let links = component.get("v.linkslist");

        //console.log(links);

    }, 
    doUnrender : function (component, event, helper) {
        console.log("unrender handler");
    }
})
