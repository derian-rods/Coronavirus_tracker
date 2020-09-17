import { useState, useEffect, useRef } from 'react';
import Axios from 'axios'

export const useAxios = ( url ) => {
    
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect( () => {

        setState({ data: null, loading: true, error: null });

        Axios.get( url )
            .then( resp => resp.data)
            .then( data => {

                if ( isMounted.current ) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }

            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            })

    },[url])

    return state;
}
