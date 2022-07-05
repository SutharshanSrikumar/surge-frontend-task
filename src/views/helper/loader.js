import React from 'react';
export const SmallDivLoader = (props) =>{
    const { styles } = props;
    return(
        <div className="overlay" style={styles}>
            <i className="fa fa-refresh fa-spin"/>
        </div>
    )
}


export const DivLoader = (props) =>{
    const { styles } = props;
    return(
        <div style={{display:'flex',justifyContent:'center'}}>
             <i className="fa fa-refresh fa-spin"  style={styles ? styles : {fontSize: '46px', margin: '10px'}}/>
        </div>
    )
}
