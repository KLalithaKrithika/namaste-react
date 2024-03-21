const heading = React.createElement('h1',{id:"heading",hello:"hi"},'Hello World from react')
// {} - is the place where we give attributes to our tag - like id,class for your h1 tag
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

//nested html structure
const parent = React.createElement('div',"parent",React.createElement('div',"child-1",[React.createElement('h1',"child-2",'Iam heading 1'),React.createElement('h2',{},'Iam heading 2')]))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)