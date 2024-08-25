const heading = React.createElement('div', {id:"division1"},  
                React.createElement('div', {id:"division2"}, 
                [React.createElement('h1', {id:"heading1"}, "Im an heading1"), React.createElement('h2', {id:"heading2"}, "Im an heading2")]))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);