({
    doInit : function(component, event, helper) {
        console.log('init handler');
        //get design component lists
        const consoleAPI = component.find("console"); //
        const barAPI = component.find("bar");
        //set design values into set of links

        //these always resolve whether current context is console app or not
        console.log(consoleAPI);
        console.log(barAPI);

        //does it make sense to set this state on component render? If I change apps, does the utility bar rerender? 
        component.set("v.isConsole", consoleAPI.isConsoleNavigation());

        console.log(component.get("v.isConsole"));

        //let links = component.get("v.linkslist");
        const rawlinks = component.get("v.linkslist_config");

        //console.log(rawlinks);

        let validList = helper.createValidList(rawlinks);

        validList
            .then(
                $A.getCallback(function(linksObjectArray){
                    component.set("v.linkslist", linksObjectArray);
                })
            )
            .catch(
                $A.getCallback(function(error){
                //TODO: do something to the UI if there is an error
                    component.set("v.hasError", true);
                    console.error(error);
                })
            );

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
