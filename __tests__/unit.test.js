// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('908-555-3333 isPhoneNumber', () => {
    expect(functions.isPhoneNumber('908-555-3333')).toBe(true);
});

test('908-444-3233 isPhoneNumber', () => {
    expect(functions.isPhoneNumber('908-444-3233')).toBe(true);
});

test('hello isPhoneNumber', () => {
    expect(functions.isPhoneNumber('hello')).toBe(false);
});

test('93rufn isPhoneNumber', () => {
    expect(functions.isPhoneNumber('93rufn')).toBe(false);
});

test('seantfuhrman@gmail.com isEmail', () => {
    expect(functions.isEmail('seantfuhrman@gmail.com')).toBe(true);
});

test('otheremail@gmail.edu isEmail', () => {
    expect(functions.isEmail('otheremail@gmail.edu')).toBe(true);
});

test('notAnEmail isEmail', () => {
    expect(functions.isEmail('notAnEmail')).toBe(false);
});

test('1234 isEmail', () => {
    expect(functions.isStrongPassword('1234')).toBe(false);
});

test('Password123 isStrongPassword', () => {
    expect(functions.isStrongPassword('Password123')).toBe(true);
});

test('Password123__ isStrongPassword', () => {
    expect(functions.isStrongPassword('Password123__')).toBe(true);
});

test('a isStrongPassword', () => {
    expect(functions.isStrongPassword('a')).toBe(false);
});

test('_ isStrongPassword', () => {
    expect(functions.isStrongPassword('_')).toBe(false);
});


test('12/12/2001 isDate', () => {
    expect(functions.isDate('12/12/2001')).toBe(true);
});

test('2/12/2001 isDate', () => {
    expect(functions.isDate('2/12/2001')).toBe(true);
});

test('a isDate', () => {
    expect(functions.isDate('a')).toBe(false);
});

test('_ isDate', () => {
    expect(functions.isDate('_')).toBe(false);
});

test('FFF isHexColor', () => {
    expect(functions.isHexColor('FFF')).toBe(true);
});

test('ffffff isHexColor', () => {
    expect(functions.isHexColor('ffffff')).toBe(true);
});

test('a isHexColor', () => {
    expect(functions.isHexColor('a')).toBe(false);
});

test('_ isHexColor', () => {
    expect(functions.isHexColor('_')).toBe(false);
});

