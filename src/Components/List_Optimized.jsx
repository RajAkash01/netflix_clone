import React from 'react'
import {AutoSizer,Grid} from 'react-virtualized'


function List_Optimized({data,renderItem,itemwidth=180,itemheight=250,islast}) {
    
  return (
    <div style={{width:'100%',height:'400px',marginBottom:islast?'':'-70px'}}>
        <AutoSizer >
            {({width,height})=>(
                <Grid
                 containerStyle={{ marginLeft:'20px',marginTop:'40px',overflow:'visible'}}
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