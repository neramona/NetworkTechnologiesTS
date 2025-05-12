import React, { PureComponent, ReactNode } from 'react'
import {Helmet} from 'react-helmet'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { Input } from '../components/Input'

interface Props {}
interface State {}

class Home extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <>
                <Helmet>
                    <title>Главная</title>
                    <meta name='description' content='Добро пожаловать на главнуя страницу'/>
                    <meta name='keywords' content='главная, React, сайт'/>
                </Helmet>
                <div className='p-5'>
                    <div>HOME</div>
                    <Button color="primary" size="large" title="OK" />
                    <Text size="large" color="dark" weight="normal">RR</Text>
                    <Input size="medium" color="gray" placeholder="Enter text" />
                </div>
            </>
        )
    }
}

export default Home
