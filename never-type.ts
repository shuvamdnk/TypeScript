function generateError(message:string,code:number) :never{
    throw {
        message:message,
        errorCode:code
    }
}

generateError('Not Found',404);