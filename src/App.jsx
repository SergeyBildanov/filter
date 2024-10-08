import React from 'react'
import './App.css'

function ProjectList({projects}){
  return(
    <div className="project-list">
      {
        projects.map((x, i=0)=>{
          return <img className="card" src={x.img} alt="img" key={i++}/>
        })
      }
    </div>
  )
}

function Toolbar({filters, selected, onSelectFilter}){
  return (
    <div className="toolbar">
      {
        filters.map((x)=>{
          return (
            <div className={(x===selected)?"filter active":"filter"} onClick={()=>{onSelectFilter(x)}} key={x}>
            {x}
            </div>
          )
        })
      }
    </div>
    
  )
}

class Portfolio extends React.Component{
  state = {
    selected: "All"
  }
  constructor(props){
    super(props);
    this.onSelectFilter = this.onSelectFilter.bind(this);
    this.images = props.images;
  }
  onSelectFilter(newState){
    this.setState({
      selected: newState,
    }) 
  }
  render(){
    let projects = (this.state.selected==="All")?this.images:this.images.filter((item)=>{return item.category === this.state.selected});
    return(
      <div>
        <Toolbar filters={["All", "Websites", "Flayers", "Business Cards"]} selected={this.state.selected} onSelectFilter={(filter) => this.onSelectFilter(filter)}/>
        <ProjectList projects={projects}/>
      </div>
      
    )
  }
}

let images = [{
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
  category: "Flayers"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
  category: "Flayers"
}]
function App() {

  return (
    <Portfolio images={images}/>
  )
}

export default App
