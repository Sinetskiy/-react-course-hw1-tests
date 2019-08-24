import { useCounter } from './HookCounter';
import { cleanup } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

afterEach(cleanup);

describe('useCounter', () => {
    it('Увеличивает счетчик после вызова метода increment()', () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.increment();
        });

        expect(result.current.count).toBe(1);
    });

    it('Уменьшает счетчик после вызова метода decrement()', () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.decrement();
        });

        expect(result.current.count).toBe(-1);
    });
});
