export default {
    get: jest.fn(() => Promise.resolve({
        data: '',
        status: '',
        message: '',
        statusText: ''
    })),
    post: jest.fn(() => Promise.resolve({
        data: '',
        status: '',
        message: ''
    })),
    create: jest.fn(function () {
        return this;
    })
}