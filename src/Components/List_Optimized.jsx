import React from 'react'
import {AutoSizer,Grid} from 'react-virtualized'


function List_Optimized({data,renderItem,itemwidth=180,itemheight=250}) {
    
  return (
    <div style={{width:'100%',height:'300px',marginBottom:'2rem'}}>
        <AutoSizer >
            {({width,height})=>(
                <Grid
                 containerStyle={{ marginTop:'30px',overflow:'visible'}}
                className='scrollbar-hide ' 
                width={width} 
                height={height} 
                columnWidth={itemwidth}// for horizontal list only
                columnCount={data.length} //for horizontal list only else use rowcount
                rowHeight={itemheight}
                 rowCount={1} //it will be set to 1 if using horizontal list
                 cellRenderer={renderItem} // for horizontal list else use rowrendere
                 />
            )}
        </AutoSizer>
    </div>
    
  )
}

export default List_Optimized