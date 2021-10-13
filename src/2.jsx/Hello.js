import React  from "react";

// const Hello = function(){
//     return <div id="divID" className="divClass">
//              <h1 id="h1Id" className="h1Class">Hello Uma</h1>
//            </div>
// }

const Hello = function(){
    return React.createElement(
            'div', 
             {id: 'divHeader', className: 'divClass'}, 
             React.createElement(
               'h1', 
               {id: 'h1Header', className: 'h1Class'}, 
               'Without using JSX'
            ))
}

export default Hello