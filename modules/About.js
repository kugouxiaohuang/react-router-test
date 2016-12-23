import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
    render:function(){
        return (
            <div>
                <Link to='/'>返回</Link>
                <div>this is about page</div>
            </div>
            )
    }
})