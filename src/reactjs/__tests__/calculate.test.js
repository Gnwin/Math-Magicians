import calculate from '../components/calculate';
import numbers from '../components/numbers';
import operands from '../components/operators';

const object0 = {
  total: '',
  next: '',
  operation: '',
};

const object1 = {
  total: '',
  next: `${numbers[9]}`,
  operation: '',
};

const object2 = {
  total: numbers[9],
  next: '',
  operation: operands[1],
};

const object3 = {
  total: numbers[9],
  next: numbers[6],
  operation: operands[1],
};

const object4 = {
  total: '3',
  next: '',
  operation: '',
};

describe('executes calculate function', () => {
  it('returns a new object with next key', () => {
    const newstate = calculate(object0, `${numbers[9]}`);
    expect(newstate.next).toBe(object1.next);
  });

  it('returns a new object with a total key', () => {
    const newstate = calculate(object1, operands[1]);
    expect(newstate.total).toEqual(`${object2.total}`);
  });

  it('returns a new object with an operation key', () => {
    const newstate = calculate(object1, operands[1]);
    expect(newstate.operation).toEqual(object2.operation);
  });

  it('returns a new object with a next key after a total key', () => {
    const newstate = calculate(object2, `${numbers[6]}`);
    expect(newstate.next).toEqual(`${object3.next}`);
  });

  it('returns a new object with a computed total key', () => {
    const newstate = calculate(object3, '=');
    expect(newstate.total).toEqual(`${object4.total}`);
  });
});
