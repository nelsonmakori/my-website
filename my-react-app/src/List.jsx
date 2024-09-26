
function List(){
  const fruits = [{id:1,
                name :"banana", 
                 calories: 95},
                 {name:"orange",
                 calories: 360
                },
                {name:"mango",
                calories: 78
                },
               {name:"pinneple",
               calories: 100
    }];
  const listItems = fruits.map(fruit => <li>{fruit}</li>)
  return(<ol>{listItems}</ol>);

}
export default List