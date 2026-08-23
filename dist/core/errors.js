export class Yad2Error extends Error {
}
export class Yad2RequestError extends Yad2Error {
    status;
    path;
    detail;
    constructor(status, path, detail) {
        super(`Yad2 ${status} on ${path}: ${detail}`);
        this.status = status;
        this.path = path;
        this.detail = detail;
    }
}
export class Yad2BlockedError extends Yad2Error {
    path;
    constructor(path) {
        super(`Yad2 bot protection challenged the request to ${path}. ` +
            `Slow the request rate, or switch to the browser transport.`);
        this.path = path;
    }
}
export class Yad2SchemaError extends Yad2Error {
    path;
    issues;
    constructor(path, issues) {
        super(`Yad2 response from ${path} did not match schema: ${issues}`);
        this.path = path;
        this.issues = issues;
    }
}
export class Yad2ParamsError extends Yad2Error {
    context;
    issues;
    constructor(context, issues) {
        super(`Invalid ${context} params: ${issues}`);
        this.context = context;
        this.issues = issues;
    }
}
export class Yad2NotFoundError extends Yad2Error {
    what;
    constructor(what) {
        super(`No Yad2 match for ${what}`);
        this.what = what;
    }
}
