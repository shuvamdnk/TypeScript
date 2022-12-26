"use strict";
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
generateError('Not Found', 404);
