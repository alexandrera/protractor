// spec.js

var helper = require('./helper');

describe('Protractor Demo App', function () {
    it('should have a title', function () {
        browser.get(browser.params.url);
        var title = 'Etsy.com | Shop for anything from creative people everywhere';

        expect(browser.getTitle()).toEqual(title);
    });
    it('should sign in', function () {
        browser.get(browser.params.url);

        var signIn = element(by.id('sign-in'));
        var signInButton = element(by.id('signin-button'));
        var usernameField = element(by.id('username-existing'));
        var userPasswordField = element(by.id('password-existing'));
        var usernameExistingError = element(by.id('username-existing-error'))

        signIn.click();
        helper.waitUntilReady(usernameField);
        usernameField.sendKeys('qwetyuiop1234@test.com');
        helper.waitUntilReady(userPasswordField);
        userPasswordField.sendKeys('password');
        helper.waitUntilReady(signInButton);
        signInButton.click();
        helper.waitUntilReady(usernameExistingError);
        var usernameExistingError = usernameExistingError.getText();
        expect(usernameExistingError).toBe('Email address is invalid.');

    });

});