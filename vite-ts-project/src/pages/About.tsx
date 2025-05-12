import React, { PureComponent, ReactNode } from 'react'
import { Helmet } from 'react-helmet'

interface Props {}
interface State {}

class About extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <>
            <Helmet>
                    <title>О нас</title>
                    <meta name='description' content='Узнайте больше о нашей компании'/>
                    <meta name='keywords' content='о нас, компания, информация, React'/>
            </Helmet>
            <div>ABOUT</div>
            </>
            
        )
    }
}

export default About
