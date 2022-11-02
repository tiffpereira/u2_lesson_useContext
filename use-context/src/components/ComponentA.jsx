import ComponentB from './ComponentB'
import { useContext } from 'react'
import { DataContext } from '../DataContext'

export default function ComponentA () {
    const data = useContext(DataContext)

    return (
        <div>
            <h2>This is Component A</h2>

            <p>
                <span>
                    {data.userInfo.name}'s favorite color is  
                </span>

                <span style={{color: data.userInfo.favColor}}>
                    {data.userInfo.favColor}
                </span>
            </p>
            <ComponentB />
        </div>
    )
}