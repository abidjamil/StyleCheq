import API from '../Config/networkSetup';
async function AuthAction(Body) {
    return await Promise.resolve(API({
        method: 'GET',
        url: '/api/v1/user/auth',
        params: Body,
    })
        .then(function (response) {
            console.log("Success Login Response", JSON.stringify(response))
            return Promise.resolve(response.data)
        })
        .catch(function (error) {
            console.log("Login Error Response", JSON.stringify(error))
            return Promise.reject(error.response.data)
        })
    )


}
async function SignupStep1(Body) {
    console.log("Sign Up Body", Body)
    return await Promise.resolve(API({
        method: 'POST',
        url: '/api/v1/user/account/registration/step/1',
        data: Body,
    })
        .then(function (response) {
            console.log(response)
            return Promise.resolve(response.data)
        })
        .catch(function (error) {
            console.log(error)
            return Promise.reject(error)
        })
    )

}
async function SignupStep2(Body) {
    console.log("Sign Up Body", Body)
    return await Promise.resolve(API({
        method: 'PUT',
        url: '/api/v1/user/account/registration/step/2',
        data: Body,
    })
        .then(function (response) {
            return Promise.resolve(response.data)
        })
        .catch(function (error) {
            return Promise.reject(error.response.data)
        })
    )

}
async function SignupStep3(Body) {
    console.log("Sign Up Body", Body)
    return await Promise.resolve(API({
        method: 'PUT',
        url: '/api/v1/user/account/registration/step/3',
        data: Body,
    })
        .then(function (response) {
            return Promise.resolve(response.data)
        })
        .catch(function (error) {
            return Promise.reject(error.response.data)
        })
    )

}

async function ForgotStep1(Body) {
    console.log("Forgot Password Body", Body)
    return await Promise.resolve(API({
        method: 'GET',
        url: '/api/v1/user/account/forgot/password?username=' + Body,
    })
        .then(function (response) {
            return Promise.resolve(response.data)
        })
        .catch(function (error) {
            return Promise.reject(error.response.data)
        })
    )

}
async function ForgotStep2(Body) {
    console.log("Forgot Password Body", Body)
    return await Promise.resolve(API({
        method: 'GET',
        url: '/api/v1/user/account/forgot/password/verify',
        params: Body,
    })
        .then(function (response) {
            return Promise.resolve(response.data)
        })
        .catch(function (error) {
            return Promise.reject(error.response.data)
        })
    )

}
async function ForgotStep3(Body) {
    console.log("Forgot Password Body", Body)
    return await Promise.resolve(API({
        method: 'PUT',
        url: '/api/v1/user/account/forgot/password',
        data: Body,
    })
        .then(function (response) {
            return Promise.resolve(response.data)
        })
        .catch(function (error) {
            return Promise.reject(error.response.data)
        })
    )

}

async function GetPeopleToFollow(Token) {
    console.log("Forgot Password Body", Token)
    return await Promise.resolve(API({
        method: 'GET',
        url: '/api/v1/people/find/top/new',
        headers: {
            'Authorization': "Bearer " + Token
        }
    })
        .then(function (response) {
            return Promise.resolve(response.data)
        })
        .catch(function (error) {
            return Promise.reject(error.response.data)
        })
    )

}

async function GetTimeline(Request, Token) {
    console.log("Forgot Password Body", Body)
    return await Promise.resolve(API({
        method: 'GET',
        url: '/api/v1/post/timeline',
        params: Body,
        headers: {
            'Authorization': "Bearer " + Token
        }
    })
        .then(function (response) {
            return Promise.resolve(response.data)
        })
        .catch(function (error) {
            return Promise.reject(error.response.data)
        })
    )

}
export { GetTimeline, AuthAction, SignupStep1, SignupStep2, SignupStep3, ForgotStep1, ForgotStep2, ForgotStep3, GetPeopleToFollow }