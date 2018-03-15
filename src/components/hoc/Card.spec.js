import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';


const header = <p />
const content = <section>Content</section>
const defaultProps = {
    children: [header, content]
}
const setup = (props = defaultProps) => {
    return shallow(<Card>
        {header}
        {content}
    </Card>)
}

describe.skip('<Card> HOC', () => {

    it('should render and match snapshot', () => {
        const enzymeWrapper = setup()
        expect(enzymeWrapper).toMatchSnapshot()
    })
    it('should wrap header in proper classes', () => {
        const enzymeWrapper = setup()
        expect(enzymeWrapper).toContainReact(<header className='card-header'>
            <p className='card-header-title' />
        </header>)
    })

    it('should wrap content in proper classes', () => {
        const enzymeWrapper = setup()
        expect(enzymeWrapper).toContainReact(<div className='card-content'>
            <section className='content'>Content</section>
        </div>)
    })
})
