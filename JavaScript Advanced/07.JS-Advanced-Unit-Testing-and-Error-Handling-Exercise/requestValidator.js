function validator(HTTPrequest) {
    if (HTTPrequest.hasOwnProperty('method')) {
        if (HTTPrequest.method != 'GET' && HTTPrequest.method != 'POST' && HTTPrequest.method != 'DELETE' && HTTPrequest.method != 'CONNECT') {
            throw Error('Invalid request header: Invalid Method');
        }
    } else {
        throw Error('Invalid request header: Invalid Method');
    }
    if (HTTPrequest.hasOwnProperty('uri')) {
        let regexp = /^\*+$|^[\w\.]+$/g;
        if (HTTPrequest.uri.match(regexp) == null) {
            throw Error('Invalid request header: Invalid URI');
        }
    } else {
        throw Error('Invalid request header: Invalid URI');
    }
    if (HTTPrequest.hasOwnProperty('version')) {
        let regexp = /HTTP\/[012]{1}.[901]{1}/g;
        if (HTTPrequest.version.match(regexp) == null) {
            throw Error('Invalid request header: Invalid Version');
        }
    } else {
        throw Error('Invalid request header: Invalid Version');
    }
    if (HTTPrequest.hasOwnProperty('message')) {
        let regexp = /[<>\\&'"]/g;
        if (HTTPrequest.message.match(regexp) != null) {
            throw Error('Invalid request header: Invalid Message');
        }
    } else {
        throw Error('Invalid request header: Invalid Message');
    }
    return HTTPrequest;
}


console.log(validator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
))
console.log('-------')
console.log(validator({
    method: 'GET',
    uri: 'defineapps',
    version: 'HTTP/1.1',
    message: '-recursive'
}
));

console.log(validator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}
));
