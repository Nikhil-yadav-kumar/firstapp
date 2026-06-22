
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';


function App() {
  const response=[
    {
      ItemName:"Nikhil",
      ItemDay:"20",
      ItemMonth:"june",
      ItemYear:"2004"
    },
    {
      ItemName:"Kumar",
      ItemDay:"21",
      ItemMonth:"july",
      ItemYear:"2006"
    },
    {
      ItemName:"Nikh",
      ItemDay:"10",
      ItemMonth:"june",
      ItemYear:"2008"
    },
  ];

  return (
    <div>
    <ItemDate day={response[0].ItemDay}  month={response[0].ItemMonth} year={response[0].ItemYear}></ItemDate>
    <Item ItemName={response[0].ItemName}> Kumar</Item>

    <ItemDate day={response[1].ItemDay}  month={response[1].ItemMonth} year={response[1].ItemYear}></ItemDate>
    <Item ItemName={response[1].ItemName}></Item>

    <ItemDate day={response[2].ItemDay}  month={response[2].ItemMonth} year={response[2].ItemYear}></ItemDate>
    <Item ItemName={response[2].ItemName}></Item>


    {/* <ItemDate day={response[0].ItemDay}  month="june"  year="2004"></ItemDate>
    <Item ItemName="Nikhil"></Item>
    <ItemDate day="23"  month="july"  year="2005"></ItemDate>
    <Item ItemName="kumar"></Item>
    <ItemDate day="21"  month="August"  year="2006"></ItemDate>
    <Item ItemName="yadav"></Item> */}
    
    <div className="App">Hello Nikhil</div>
    
    </div>

  );

  
}

export default App;
