import { mount } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'

export default () => {
    const ref = useRef(null)

    useEffect(() => {
        mount(ref.current)
    }, [])

    return <div ref={ref} />
}


//why we use this way to render apps in container .. becouse if we change the other app framework we will not be change any thing in conteiner becouse we render an function not component of specific framework
