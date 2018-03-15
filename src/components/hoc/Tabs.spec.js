import React from 'react';
import { shallow } from 'enzyme';
import Tabs from './Tabs';

const children = [
    <span>First title</span>,
    <div>First content</div>,
    <span>Second title</span>,
    <div>Second content</div>
]

const onClick = jest.fn()

const defaultProps = {
    onClick,
    children
}

const setup = (props = defaultProps) => shallow(<Tabs {...props} />)

describe.skip('<Tabs> hoc', () => {
    it('should properly wrap headers', () => {
        const enzymeWrapper = setup()
        expect(enzymeWrapper).toContainReact(
            <li class="is-active" >
                <a onClick={onClick}>
                    {children[0]}
                </a>
            </li>
        )
        expect(enzymeWrapper).toContainReact(
            <li>
                <a onClick={onClick}>
                    {children[2]}
                </a>
            </li>
        )
    })

    it('should wrap content')
    it('should change content on click')

})
