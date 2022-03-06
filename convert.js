
function convert(bytes) {
    /*let units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

    let i = 0
    
    for (i; bytes > 1024; i++) {
        bytes /= 1024;
    }*/
    if(bytes>=1024){
        var megabytes=bytes/1024;
    }

    return megabytes.toFixed(1);
}
module.exports=convert;