({
    createValidList : function(rawLinksString) {
        return new Promise(
            function(resolve, reject){
            //TODO: validate inputs
            // - not null or undefined
            // - even number of entries
            // - odd numbered entries can parse as URLs
            // - any others? 
                if (!rawLinksString){
                    reject(new Error("No Links have been defined."));
                } else if (rawLinksString.length % 2 !== 0){
                    reject(new Error("There is an uneven number of entries defined in App Builder. Be sure the config string contains labels and URLs in pairs."));
                 } else {
                    console.log("In promise and data looks good."); 
                    let linksarray = rawLinksString.split(",");
                    let linksobjectarray = [];
                    let linkobject = {};
            
                    console.log(linksarray);
            
                    for (var i = 0 ; i < linksarray.length ; i++){
            
                        linkobject = {
                            "label" : linksarray[i++], 
                            "link" : linksarray[i]                
                        };
            
                        console.log(linkobject);
            
                        linksobjectarray.push(linkobject);
                    }
                    resolve(linksobjectarray);
                 }                
            }
        );
    }
})
