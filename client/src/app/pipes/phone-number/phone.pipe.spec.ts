import { PhonePipe } from 'src/app/pipes/phone-number/phone.pipe';

describe('PhonePipePipe', () => {
  it('create an instance', () => {
    const pipe = new PhonePipe();
    expect(pipe).toBeTruthy();
  });
});
