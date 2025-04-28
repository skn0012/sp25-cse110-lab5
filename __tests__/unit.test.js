// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
describe('isPhoneNumber', () => {
  test('valid phone number with parentheses', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(false);
  });
  test('valid phone number with dash', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('invalid phone number missing dashes', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
  });
  test('invalid phone number with not enough numbers', () => {
    expect(isPhoneNumber('12-3456-789')).toBe(false);
  });
});

describe('isEmail', () => {
  test('valid email with underscore domain', () => {
    expect(isEmail('test_email@domain.com')).toBe(true);
  });
  test('valid simple email', () => {
    expect(isEmail('user123@abc.net')).toBe(true);
  });
  test('invalid email missing "@"', () => {
    expect(isEmail('user123abc.com')).toBe(false);
  });
  test('invalid email with long domain ending', () => {
    expect(isEmail('user123@domain.comm')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('valid strong password', () => {
    expect(isStrongPassword('a1234')).toBe(true);
  });
  test('valid strong password with underscore', () => {
    expect(isStrongPassword('A_bc123')).toBe(true);
  });
  test('invalid password starting with number', () => {
    expect(isStrongPassword('1abc123')).toBe(false);
  });
  test('invalid password too short', () => {
    expect(isStrongPassword('a1')).toBe(false);
  });
});

describe('isDate', () => {
  test('valid date with single-digit month and day', () => {
    expect(isDate('1/1/2025')).toBe(true);
  });
  test('valid date with two-digit month and day', () => {
    expect(isDate('01/01/2025')).toBe(true);
  });
  test('invalid date with wrong separator', () => {
    expect(isDate('1-1-2025')).toBe(false);
  });
  test('invalid date with wrong year format', () => {
    expect(isDate('1/1/25')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('valid 3-digit hex without #', () => {
    expect(isHexColor('fff')).toBe(true);
  });
  test('valid 6-digit hex with #', () => {
    expect(isHexColor('#ffffff')).toBe(true);
  });
  test('invalid hex with wrong characters', () => {
    expect(isHexColor('#ggg')).toBe(false);
  });
  test('invalid hex with wrong length', () => {
    expect(isHexColor('#ffff')).toBe(false);
  });
});