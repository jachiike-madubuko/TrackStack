

import * as React from 'react'
import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks';

import CreateThing from '../../gql/Thing/CreateThing';
import GetAllThings from '../../gql/Thing/GetAllThings';
import SubAllThings from '../../gql/Thing/SubAllThings';
// Typing on Hooks
// https://www.apollographql.com/docs/react/development-testing/static-typing/
interface PrismaTestProps {

}
const PrismaTest: React.FC<PrismaTestProps>= props => {

    const [update, setupdate] = React.useState( false );
    const [thingData, setthingData] = React.useState<any[]>( [] );
    const { loading, error, data } = useQuery( GetAllThings)
    const [createThing ] = useMutation( CreateThing );

    React.useEffect( () => {
        (
            () => {
                 setthingData(data.things)
            }
        )()
    },[loading])
    // Figure out subscriptions
    // const { loading, data } = useSubscription( SubAllThings );



    const click = async () => {
       const newThing = await  createThing( {
            variables: {
                name: "Thing33",
                content: "Cont3ent3",
                color: "Color33"
            }
        }

        )

        setthingData( [...thingData, newThing.data.createThing])
    }

    return (
        <>
            {!loading && <p>{JSON.stringify(thingData)}</p>}
            <button onClick={click}>Click Me</button>
            </>
    )
}



export default PrismaTest;